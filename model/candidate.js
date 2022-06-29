const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating a Schema:
const candidateSchema = new Schema({
    Name: {
      type: String,
      //required: true
    },
    Email: {
      type: String,
      //required: true
      unique: true
    },
    MobileNumber: {
      type: String,
      //required: true
    },
    DateOfBirth: {
        type: String,
        //required: true
      },
    Experience: {
        type: String,
        //required: true
    },
    Resume: {
        type: String,
        //required: true
    },
    Location: {
        type: String,
        //required: true
    },
    Address: {
        type: String,
        //required: true
    },
    Employer: {
        type: String,
        //required: true
    },
    Designation: {
        type: String,
        //required: true
    }
  }, { timestamps: true });

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;