const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, minLength: 5 },
  image: { type: String, minLength: 5 },
  videoId: { type: String },
  des: { type: String, minLength: 5 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
