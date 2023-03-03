const mongoose = require('mongoose');

const ApplicantSchema = mongoose.Schema({
  // Application for CTC - Application Details
  // Application Date:
  // Application for CTC - Data Collection

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

  //  Application Details
  isApplicantOriginalOwner: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  reasonForCTC: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  // Documents for CTC
  CopiesOfCertificateOfOccupancy: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  copiesOfOfferLetter: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  CopiesOfOtherRegisteredDocuments: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  // Specify the Registered Documents
  copiesOfAdditionalFileDocuments: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  specifyTheFileDocuments: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  // Application for CTC - Fees
  CTCProcessingFee: {
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
  // NB: Fees will be recalculated when the application is created.

  // Application for CTC - Documents
  applicationForm: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  newspaperAdvertisement: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  nationalIDCard: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  internationalPassport: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  votersRegistrationCard: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  driversLicense: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  policeReport: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  courtAffidavit: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  TINCard: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  }
});

const Applicant = mongoose.model('CofOApplication', ApplicantSchema);

module.exports = Applicant;
