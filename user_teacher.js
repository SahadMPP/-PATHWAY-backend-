// const mongoose = require("mongoose");



// const subjectsSchema = new mongoose.Schema({
//   mathematics: Boolean,
//   art: Boolean,
//   science: Boolean,
//   geography: Boolean,
//   socialStudies: Boolean,
//   history: Boolean,
//   computer: Boolean,
// })

// const certificatesSchema = new mongoose.Schema({

// })
// let teacherDataSchema = new mongoose.Schema({

//   name: {
//     type: String,
//     required: true
//   },
//   profileImage: {
//     type: String,
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   appledSubject: {
//     type: String,

//   },
//   appledStatus: {
//     type: Boolean,
//   },
//   password: {
//     type: String,
//   },
//   mobNumber: {
//     type: String
//   },
//   certificateOne: String,

//   certificateTwo: String,

//   mathematics: Boolean,

//   art: Boolean,

//   science: Boolean,

//   geography: Boolean, 

//   socialStudies: Boolean,

//   history: Boolean,

//   computer: Boolean,
  
//   universityName: {
//     type: String
//   },
//   universityPlace: {
//     type: String
//   },
//   universityState: {
//     type: String
//   },
//   experience: {
//     type: String
//   },
//   officerName: {
//     type: String
//   },
//   signatureImage: {
//     type: String
//   },
//   active: {
//     type: Boolean,
//     default: true
//   },
// })

// module.exports = mongoose.model("teacher", teacherDataSchema);


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobNumber: {
    type: String,
    required: true
  },
  universityName: {
    type: String,
    required: true
  },
  universityPlace: {
    type: String,
    required: true
  },
  universityState: {
    type: String,
    required: true
  },
  experience: {
    type: String
  },
  officerName: {
    type: String
  },
  certificates: {
    type: Map,
    of: String
  },
  signatureImage: {
    type: String
  },
  active: {
    type: Boolean,
    default: false
  },
  subjects: {
    type: Map,
    of: Boolean
  }
});

const User = mongoose.model('teachersNew', userSchema);

module.exports = User;
