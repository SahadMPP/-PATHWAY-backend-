const mongoose = require('mongoose');

// Define the schema
const tutorialSchema = new mongoose.Schema({
  creatorName: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    default : ""
  },
  coverImage: {
    type: String,
    default : ""
  },
  countOfLesson: {
    type: Number,
    default: 0
  },
  watchTime: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    required: true
  },
  lessonId: {
    type: [String],
    default: []
  }
});

// Create a model from the schema
const Lession = mongoose.model('Lession', tutorialSchema);

module.exports = Lession;
