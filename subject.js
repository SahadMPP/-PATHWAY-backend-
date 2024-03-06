const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    countOfStudent: {
        type: Number,
        default: 0
    },
    countOfTeacher: {
        type: Number,
        default: 0
    },
    lessonCount: {
        type: Number,
        default: 0
    },
    orderValue: {
        type: Number,
        default: 0
    }


});

const Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;