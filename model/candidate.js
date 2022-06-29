const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating a Schema:
const candidateSchema = new Schema({
    Name: {
      type: String
    },
    Email: {
      type: String,
      unique: true
    },
    MobileNumber: {
      type: String
    },
    DateOfBirth: {
        type: String
      },
    Experience: {
        type: String
    },
    Resume: {
        type: String
    },
    Location: {
        type: String
    },
    Address: {
        type: String
    },
    Employer: {
        type: String
    },
    Designation: {
        type: String
    }
  }, { timestamps: true });

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;