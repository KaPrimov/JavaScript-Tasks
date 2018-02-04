const Comment = require('../models/Comment')

module.exports = {
  delete: (req, res) => {
    let id = req.params.id
    Comment.findById(id).then((comment) => {
      comment.remove()
      res.redirect('/')
    })
  }
}
