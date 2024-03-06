const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    creatorName: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
      },
      coverImage: {
        type: String,
        default : ""
      },
      countOfLessonWatched: {
        type: Number,
        default: 0
      },
      totelCountOfLesson: {
        type: Number,
        default: 0
      },
      title: {
        type: String,
        required: true
      },
      studentId: {
        type: String,
        required: true
      },
      lessonId: {
        type: String,
        required: true
      }

});

const progress = mongoose.model('progress',progressSchema);

module.exports = progress;