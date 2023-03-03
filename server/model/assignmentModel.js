const mongoose = require('mongoose');

const ApplicantSchema = mongoose.Schema({
  // Application for Assignment - Application Details
  // Application Lodged on
  // 12-Apr-2019 15:37
  // Application Date:
  // 12-Apr-2019
  applicationOverallStatus: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  currentStepStatus: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  // Application Steps:
  // 1-Application Form 2 3 4 5 6 7
  // Application for Assignment - Data Collection
  // Official Use
  signer: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  assigneeDetails: {
    type: mongoose.Schema.ObjectId,
    ref: 'Applicant',
    required: [true, 'CofO application most have an applicant']
  },

  //  // Plot Information
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
  plotSize: {
    type: Number,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  plotSizeUnit: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },

  plotLocationDescription: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  //  Transaction Details
  considerationAmount: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  dateOfTransaction: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },

  // Application for Assignment - Fees
  assignmentConsentProcessingFee: {
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
  },

  applicationForAssignmentDocuments: [
    // Required Document	Upload New Document	View Document	Use DMS	Browse DMS

    { certificateOfRegistration: String },
    {
      internationalPassport: String
    },
    {
      birthCertificate: String
    },
    {
      taxClearanceCertificate: String
    },
    {
      certificationOfIncorporation: String
    },
    {
      votersRegistrationCard: String
    },
    {
      deedOfAssignment: String
    },
    {
      courtAffidavit: String
    },
    {
      letterOfAuthorization: String
    },
    {
      particularsOfDirector_CAC7: String
    },
    {
      workID: String
    },
    {
      TINCard: String
    },
    {
      particularsOfCompanySecretary_CAC2: String
    },
    {
      statementOfShareCapital_CAC2: String
    }
  ]
});

const Applicant = mongoose.model('CofOApplication', ApplicantSchema);

module.exports = Applicant;
