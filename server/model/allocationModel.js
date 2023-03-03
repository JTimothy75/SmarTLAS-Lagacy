const mongoose = require('mongoose');

const ApplicantSchema = mongoose.Schema({
  // Application for Allocation Individual - Application Details
  // Application Date:
  // Application for Allocation Individual - Data Collection
  // Acceptance Deadline *
  // Official Use
  // Signer *

  // Applicant Information
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

  //  Plot Information

  landUse: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  purposeOfUse: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  plotSizeRequested: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  preferredDistrict: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  valueOfImprovement: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  timeForDevelopment_Years: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  PreferredLGA: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  comments: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  plotLocationDescription: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },

  // Application for Allocation Individual - Fees
  applicationProcessingFee: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  reGrantProcessingFee: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  totalFee: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  issueDate: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  }

  // NB: Fees will be recalculated when the application is created.
});

const Applicant = mongoose.model('CofOApplication', ApplicantSchema);

module.exports = Applicant;
