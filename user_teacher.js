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
  },
  universityName: {
    type: String,
  },
  universityPlace: {
    type: String,
  },
  universityState: {
    type: String,
  },
  experience: {
    type: String
  },
  officerName: {
    type: String
  },
  profileImage: {
    type: String
  },
  appledSubject: {
    type: String
  },
  appledStatus: {
    type: String,
    default: false,
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
    default: true,
  },
  subjects: [String],
});

const User = mongoose.model('teacher', userSchema);

module.exports = User;
