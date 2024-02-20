// const mongoose = require("mongoose");

// let StudentDataShema = new mongoose.Schema({

//     "name":{
//         required : true,
//         type : String
//     },
//     "email":{
//         required : true,
//         type : String
//     },
//     "password":{
//         required : true,
//         type : String
//     },
// });

// module.exports = mongoose.model("student",StudentDataShema);

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
        type: Map,
        of: Boolean
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