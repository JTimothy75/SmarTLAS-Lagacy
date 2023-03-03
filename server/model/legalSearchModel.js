const mongoose = require('mongoose');

const ApplicantSchema = mongoose.Schema({
  // Legal Search Application - Application Details
  applicationDate: {
    type: Date,
    default: Date.now,
    require: [true, 'Application is required']
  },

  applicant: {
    type: mongoose.Schema.ObjectId,
    ref: 'Applicant',
    required: [true, 'CofO application most have an applicant']
  },
  authorisesRep: {
    type: mongoose.Schema.ObjectId,
    ref: 'Applicant',
    required: [true, 'CofO application most have an applicant']
  },
  // Legal Search Application - Data Collection
  // Applicant Details
  // First Name *
  // Middle Name
  // Family Name *
  // Full Address
  //  Representative Details
  // Representative First Name
  // Representative Middle Name
  // Representative Surname
  // Representative Full Address

  // Legal Search Application - Fees
  legalSearchProcessingFee: {
    type: Number,
    require: [true, 'Application is required']
  },
  totalFee: {
    type: Number,
    require: [true, 'Application is required']
  },
  issueDate: {
    type: Date,
    default: Date.now,
    require: [true, 'Application is required']
  }
  // NB: Fees will be recalculated when the application is created
});

const Applicant = mongoose.model('CofOApplication', ApplicantSchema);

module.exports = Applicant;
