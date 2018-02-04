const qs = require('querystring')
const Image = require('../models/ImageSchema')
const Tag = require('../models/TagSchema')

module.exports = (req, res) => {
  if (req.pathname === '/addImage' && req.method === 'POST') {
    addImage(req, res)
  } else if (req.pathname.startsWith('/delete') && req.method === 'GET') {
    deleteImg(req, res)
  } else {
    return true
  }
}

let addImage = (req, res) => {
  let queryData = ''
  req.on('data', (data) => {
    queryData += data
  })

  req.on('end', () => {
    let image = qs.parse(queryData)
    let tags = image.tags.split(/[^A-Za-z0-9]/).filter(t => t)
    let tagsId = []
    Tag.find({}).then(data => {
      for (let tag of tags) {
        for (let dbTag of data) {
          if (tag === dbTag.tagName) {
            tagsId.push(dbTag._id)
          }
        }
      }
      image.tags = tagsId
      Image.create(image).then(() => {
        res.writeHead(302, {
          Location: '/'
        })
        res.end()
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  })
}

let deleteImg = (req, res) => {
  Image.findByIdAndRemove(req.pathquery.id).exec().then(() => {
    res.writeHead(302, {
      Location: '/'
    })
    res.end()
  }).catch(err => console.log(err))
}
