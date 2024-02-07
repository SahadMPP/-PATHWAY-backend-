const mongoose = require("mongoose");

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
  certificates: {
    type: Map,
    of: String
  },
  signatureImage: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  },
  subjects: {
    type: Map,
    of: {
      type: Boolean,
      default: false
    }
  }
})

module.exports = mongoose.model("teacher", teacherDataSchema);