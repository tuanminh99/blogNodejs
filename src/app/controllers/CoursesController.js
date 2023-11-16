const Course = require('./../models/Course');
const { mongooseToObject } = require('./../../ultil/mongoose');

class CoursesController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render('courses/show', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }
  create(req, res, next) {
    res.render('courses/create');
  }
  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch(next);
  }
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }

  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/courses-saved'))
      .catch((error) => {
        console.log('error', error);
      });
  }
}

module.exports = new CoursesController();
