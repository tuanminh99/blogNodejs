const Course = require('./../models/Course');
const { multipleMongooseToObject } = require('./../../ultil/mongoose');

class MeController {
  // [GET] /me/courses-saved
  index(req, res, next) {
    Promise.all([Course.find(), Course.findWithDeleted({ deleted: true })])
      .then(([course, deletedCourseCount]) =>
        res.render('me/courses-saved', {
          course: multipleMongooseToObject(course),
          deletedCourseCount,
        }),
      )
      .catch(next);
  }
  // [GET] /me/trash
  trash(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((course) =>
        res.render('me/trash', {
          course: multipleMongooseToObject(course),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
