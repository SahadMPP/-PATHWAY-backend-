const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    password: String,
    mobNumber: {
        type: String,
    },
    subjects: {
        mathematics: { type: Boolean, default: false },
        art: { type: Boolean, default: false },
        science: { type: Boolean, default: false },
        geography: { type: Boolean, default: false },
        socialStudies: { type: Boolean, default: false },
        history: { type: Boolean, default: false },
        computer: { type: Boolean, default: false },
    },
    active: {
        type: Boolean,
        default: true,
    },
    level: String,
    profileImage: {
        type: String
    },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;