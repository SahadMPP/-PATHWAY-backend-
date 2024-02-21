const mongoose = require('mongoose');


// const subjects = new mongoose.Schema({
//     mathematics: { type: Boolean },
//     art: { type: Boolean },
//     science: { type: Boolean },
//     geography: { type: Boolean },
//     socialStudies: { type: Boolean },
//     history: { type: Boolean },
//     computer: { type: Boolean },
// });


const studentSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    password: String,
    mobNumber: {
        type: String,
    },
    subjects: [String],
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