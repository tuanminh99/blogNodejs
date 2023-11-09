class NewsController {
  // [GET] /news
  index(req, res) {
      res.render('news')
  }
  show(req, res) {
    res.send('Detaillll')
}
}

module.exports = new NewsController;