let Image = require('./../models/ImageSchema')
let Tag = require('./../models/TagSchema')
const fs = require('fs')

module.exports = (req, res) => {
  if (req.pathname.startsWith('/search')) {
    fs.readFile('./views/index.html', (err, dataHtml) => {
      if (err) {
        console.log(err)
        return
      }
      let displayImages = ''
      if (req.pathquery !== {}) {
        if (req.pathquery.tagName !== '' && req.pathquery.tagName !== 'Write tags separted by ,') {
          let tags = (req.pathquery.tagName.split(/,|, /).filter(t => t))
          let tagsId = []
          Tag.find({}).then(data => {
            for (let tag of tags) {
              for (let dbTag of data) {
                if (tag === dbTag.tagName) {
                  tagsId.push(dbTag._id)
                }
              }
            }
            Image.find({}).where('tags').in(tagsId).then(images => {
              drawImages(images, dataHtml, res)
            }).catch(err => console.log('last ' + err))
          }).catch(err => console.log(err))
        } else if (req.pathquery.afterDate !== '' && req.pathquery.beforeDate !== '') {
          console.log(req.pathquery.afterDate + ' data')
          let startDate = new Date(req.pathquery.afterDate).toISOString()
          let endDate = new Date(req.pathquery.beforeDate).toISOString()
          let limitRecords = isNaN(req.pathquery.Limit) || req.pathquery.Limit === 0 ? 10 : Number(req.pathquery.Limit)
          Image.find({}).where('creationDate').gt(startDate).lt(endDate).limit(limitRecords).then(images => {
            drawImages(images, dataHtml, res)
          }).catch(err => console.log(err))
        } else {
          Image.find({}).then(images => {
            drawImages(images, dataHtml, res)
          })
        }
      }
    })
  } else {
    return true
  }
}

function drawImages (images, dataHtml, res) {
  let displayImages = ''
  for (let image of images) {
    displayImages += `<fieldset id => <legend>${image.imageTitle}:</legend> 
      <img src=${image.imageUrl}>
      </img><p>${image.description}<p/>
      <button onclick='location.href="/delete?id=${image._id}"'class='deleteBtn'>Delete
      </button> 
      </fieldset>`
  }
  dataHtml = dataHtml
    .toString()
    .replace(`<div class='replaceMe'></div>`, displayImages)
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(dataHtml)
}
