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
  appliedSubject: {
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
    default: true,
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
});

const User = mongoose.model('teacher', userSchema);

module.exports = User;
