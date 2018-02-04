const fs = require('fs')
const qs = require('querystring')
const formidable = require('formidable')
const shortId = require('shortid')
const url = require('url')
const zlib = require('zlib')
const db = require('../config/dataBase')
const viewAllPath = './views/viewAll.html'
const viewAddMemePath = './views/addMeme.html'
const viewDetailsMemePath = './views/details.html'

let viewAll = (req, res) => {
  let memes = db.getDb()
  fs.readFile(viewAllPath, (err, data) => {
    if (err) {
      console.log(err.stack)
      return
    }

    let allMemesHtml = ''

    memes = memes.sort((a, b) => {
      return b.timeStamp - a.timeStamp
    })
      .filter(m => m.privacy === 'on')

    for (let meme of memes) {
      allMemesHtml += `<div class="meme">
        <a href="/getDetails?id=${meme.id}">
        <img class="memePoster" src="${meme.memeSrc}"/>          
        </div`
    }
    fs.readFile(viewAllPath, (err, data) => {
      if (err) {
        console.log(err.stack)
        return
      }
      let htmlData = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', allMemesHtml)
      zlib.gzip(htmlData, (_, result) => {
        res.writeHead(200, {
          'Content-Type': 'text/html',
          'Content-Encoding': 'gzip'
        })
        res.write(result)
        res.end()
      })
    })
  })
}

let viewAddMeme = (req, res) => {
  fs.readFile(viewAddMemePath, (err, data) => {
    if (err) {
      console.log(err.stack)
      return
    }
    zlib.gzip(data, (_, result) => {
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Encoding': 'gzip'
      })
      res.write(result)
      res.end()
    })
  })
}

let addMeme = (req, res) => {
  var form = new formidable.IncomingForm()
  let dbLength = Math.ceil(db.getDb().length / 10)
  let name = shortId.generate()
  let memePath = `./public/memeStorage/${dbLength}`
  form.uploadDir = memePath
  form.on('error', (err) => {
    console.log(err)
    return
  }).on('file', (fileName, file) => {
    fs.rename(file.path, form.uploadDir + '/' + name + '.jpg')
  })

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err)
      return
    }
    let id = shortId.generate()
    let newMeme = memeGenerator(id, fields.memeTitle, memePath + '/' + name + '.jpg', fields.memeDescription, fields.status === undefined ? 'off' : 'on')
    db.add(newMeme)
    db.save().then(() => {
      viewAll(req, res)
    })
  })
}

let getPrivateDetails = (req, res) => {
  fs.readFile(viewDetailsMemePath, (err, data) => {
    if (err) {
      console.log(err.stack)
      return
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })

    let targetId = qs.parse(url.parse(req.url).query).id
    let targetedMeme = db.getDb().find(m => m.id === targetId)

    let htmlMeme = `<div class="content">
    <img src="${targetedMeme.memeSrc}" alt=""/>
    <h3>Title  ${targetedMeme.title}</h3>
    <p> ${targetedMeme.description}</p>
    <button><a href="download/${targetedMeme.memeSrc}">Download Meme</a></button>
    </div>`
    if (targetedMeme.privacy === 'on') {
      res.write('No Access!')
    } else {
      res.write(data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', htmlMeme))
    }
    res.end()
  })
}

let getDetails = (req, res) => {
  fs.readFile(viewDetailsMemePath, (err, data) => {
    if (err) {
      console.log(err.stack)
      return
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })

    let targetId = qs.parse(url.parse(req.url).query).id
    let targetedMeme = db.getDb().find(m => m.id === targetId)

    let htmlMeme = `<div class="content">
    <img src="${targetedMeme.memeSrc}" alt=""/>
    <h3>Title  ${targetedMeme.title}</h3>
    <p> ${targetedMeme.description}</p>
    <button><a href="download/${targetedMeme.memeSrc}">Download Meme</a></button>
    </div>`

    const detailsHtml = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', htmlMeme)
    zlib.gzip(detailsHtml, (_, result) => {
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Encoding': 'gzip'
      })
      res.write(result)
      res.end()
    })
  })
}

let memeGenerator = (id, title, memeSrc, description, privacy) => {
  return {
    id: id,
    title: title,
    memeSrc: memeSrc,
    description: description,
    privacy: privacy,
    dateStamp: Date.now()
  }
}

let downloadImage = (req, res) => {
  var query = './' + url.parse(req.url, true).pathname
  fs.readFile(query.replace('/download', ''), function (err, content) {
    if (err) {
      res.writeHead(400, { 'Content-type': 'text/html' })
      console.log(err)
      res.end('No such file')
    } else {
      res.setHeader('Content-disposition', 'attachment; filename=' + 'pic.jpg')
      res.end(content)
    }
  })
}

module.exports = (req, res) => {
  if (req.pathname === '/viewAllMemes' && req.method === 'GET') {
    viewAll(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'GET') {
    viewAddMeme(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'POST') {
    addMeme(req, res)
  } else if (req.pathname.startsWith('/getDetails?id=') && req.method === 'GET') {
    getPrivateDetails(req, res)
  } else if (req.pathname.startsWith('/getDetails') && req.method === 'GET') {
    getDetails(req, res)
  } else if (req.pathname.startsWith('/download/public/memeStorage/') && req.method === 'GET') {
    downloadImage(req, res)
  } else {
    return true
  }
}
