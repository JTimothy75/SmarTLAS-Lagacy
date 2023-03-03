const mongoose = require('mongoose');

const CofOApplicationSchema = mongoose.Schema({
  fileNumber: {
    type: String,
    require: [true, 'CofO application most have a file number']
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
  applicationDate: {
    type: Date,
    require: [true, 'Application is required']
  },
  // Multiple Owner Information
  // Total Number of Claimants *
  // Other Claimants
  // First Name	Middle Name	Last Name	Phone	Email	TIN/ID ref	+ -

  //  Regularisation Information
  otherCertificatesDocuments: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  CertificateOfferNumber: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  alloteeFullName: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },

  transactionDocuments: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  nameOfFormerOwner: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  dateOfTransaction: {
    type: Date,
    default: Date.now,
    require: [true, 'Application is required']
  },
  documentOfDemarcationSubmitted: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  plotNumber: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  area_DistrictName: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  streetName: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  plotState: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },
  plotLGA: {
    type: String,
    trim: true,
    require: [true, 'CofO application most have a file number']
  },

  // Plot Information
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

  // Application for Statutory Right of Occupancy Individual - Fees

  applicationProcessingFee: {
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

  // NB: Fees will be recalculated when the application is created

  recertificationForIndividualDocuments: [
    // Required Document	Upload New Document	View Document	Use DMS	Browse DMS

    { applicationForm: String },
    { coordinates: String },
    { nationalIDCard: String },
    { internationalPassport: String },
    { birthCertificate: String },
    { receipt: String },
    { taxClearanceCertificate: String },
    { stampedBankTeller: String },
    { salesAgreement: String },
    { votersRegistrationCard: String },
    { driversLicense: String },
    { customary_CofO: String },
    { utilityReceipt: String },
    { otherIdentification: String },
    { otherProofOfOwnership: String },
    { localGovernmentCertificate: String },
    { deedOfAssignment: String },
    { courtAffidavit: String },
    { districtHeadConfirmation: String },
    { letterOfAdministration: String },
    { sitePlan: String },
    { satelliteImageries: String },
    { federalOfferOfGrant: String },
    { TINCard: String },
    { ownershipAffidavit: String },
    { siteAnalysisReport: String }
  ]
});

const CofO = mongoose.model('CofOApplication', CofOApplicationSchema);

module.exports = CofO;
