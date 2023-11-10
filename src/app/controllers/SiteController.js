const Course = require('./../models/Course');

class SiteController {
  // [GET] /site
  async index(req, res) {
    try {
      // res.render('home');
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      res.status(400).json({ error: 'Error' });
    }
  }
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
