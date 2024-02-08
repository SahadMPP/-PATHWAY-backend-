const mongoose = require("mongoose");



const subjectsSchema = new mongoose.Schema({
  mathematics: Boolean,
  art: Boolean,
  science: Boolean,
  geography: Boolean,
  socialStudies: Boolean,
  history: Boolean,
  computer: Boolean
})

const certificatesSchema = new mongoose.Schema({
  certificateOne: String,
  certificateTwo: String
})
let teacherDataSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  appledSubject: {
    type: String,

  },
  appledStatus: {
    type: Boolean,
  },
  password: {
    type: String,
  },
  mobNumber: {
    type: String
  },
  universityName: {
    type: String
  },
  universityPlace: {
    type: String
  },
  universityState: {
    type: String
  },
  experience: {
    type: String
  },
  officerName: {
    type: String
  },
  certificates:certificatesSchema,
  signatureImage: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  },
  subjects: subjectsSchema
})

module.exports = mongoose.model("teacher", teacherDataSchema);