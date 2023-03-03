const mongoose = require('mongoose');

// Application form   Plot Matching  Offer Generation CofO Generation
const recertificationSchema = new mongoose.Schema(
  {
    // Applicant information & Address
    applicant: {
      type: mongoose.Schema.ObjectId,
      ref: 'Entrant',
      required: [true, 'Application for recertification most have an applicant']
    },

    // Other Claimants information & Address
    otherClaimants: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Entrant'
      }
    ],

    // Authorises Rep information & Address
    authorisesRep: {
      type: mongoose.Schema.ObjectId,
      ref: 'Entrant'
    },
    file: {
      type: mongoose.Schema.ObjectId,
      ref: 'File',
      required: [true, 'Application for recertification most belong to a file']
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [
        true,
        'Application for recertification most be created by a user'
      ]
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      require: true
    },
    modifiedBy: [
      {
        modifiedAt: {
          type: Date,
          default: Date.now(),
          require: true
        },
        modifiedBy: {
          type: mongoose.Schema.ObjectId,
          ref: 'User'
        }
      }
    ],

    applicationDate: {
      type: Date,
      require: true
    },
    signer: {
      type: String,
      trim: true,
      require: [true, 'Application for recertification most have a signer']
    },
    recertificationDocument: {
      type: String,
      trim: true,
      enum: {
        values: ['CofO', 'Offer Letter', 'Assignment'],
        message:
          'Recertification Document can either be: CofO, Offer Letter or Assignment'
      },
      require: [
        true,
        'Application for recertification most have a Recertification Document'
      ]
    },
    otherCertificatesDocuments: {
      type: String,
      trim: true
    },
    alloteeFullName: {
      type: String,
      trim: true,
      require: [true, 'Allotee FullName is required']
    },
    offerCommencementDate: {
      type: Date,
      require: [true, 'Offer Commencement Date is required']
    },
    transactionDocuments: {
      type: String,
      trim: true,
      require: [true, 'Transaction document is required']
    },
    nameOfFormerOwner: {
      type: String,
      trim: true,
      require: [true, 'Name of former owner is required']
    },
    dateOfTransaction: {
      type: Date,
      default: Date.now(),
      require: [true, 'Date of transaction is required']
    },
    documentOfDemarcationSubmitted: {
      type: String,
      trim: true,
      require: [true, 'Document of demarcation is required']
    },
    plotNumber: {
      type: String,
      trim: true
    },
    area_DistrictName: {
      type: String,
      trim: true,
      require: [true, 'District of recertification plot is required']
    },
    streetName: {
      type: String,
      trim: true
    },
    plotState: {
      type: String,
      trim: true,
      require: [true, 'State of plot is required']
    },
    plotLGA: {
      type: String,
      trim: true,
      require: [true, 'LGA of plot is required']
    },

    // Plot Information
    landUse: {
      type: String,
      trim: true,
      require: [true, 'LandUse of plot is required']
    },
    purposeOfUse: {
      type: String,
      trim: true,
      require: [true, 'Purpose of use of plot is required']
    },
    valueOfImprovement: {
      type: String,
      trim: true
    },
    timeForDevelopment_Years: {
      type: String,
      trim: true
    },
    plotSize: {
      type: Number,
      trim: true,
      require: [true, 'Plot size is required']
    },
    plotSizeUnit: {
      type: String,
      trim: true,
      require: [true, 'Plot size unit is required']
    },

    plotLocationDescription: {
      type: String,
      trim: true,
      require: [true, 'Plot location description is required']
    },

    // Payment Information
    ReceiptNumber: {
      type: String,
      trim: true,
      require: [true, 'CofO application most have a file number']
    },

    // NB: Fees will be recalculated when the application is created.
    submittedDocuments: [String]
  },
  {
    toJSON: { virtuals: true },
    toObjectId: { virtuals: true }
  }
);

recertificationSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'applicant'
  })
    .populate({
      path: 'otherClaimants'
    })
    .populate({
      path: 'authorisesRep'
    })
    .populate({
      path: 'file',
      select: 'fileNumberFull'
    })
    .populate({
      path: 'createdBy',
      select: 'userName'
    })
    .populate({
      path: 'modifiedBy.modifiedBy',
      select: 'userName'
    });
  next();
});

recertificationSchema.pre('save', function(next) {
  if (!this.modifiedBy[0]) {
    this.modifiedBy.push({
      modifiedAt: Date.now(),
      modifiedBy: this.createdBy
    });
  }
  next();
});

const Recertification = mongoose.model(
  'Recertification',
  recertificationSchema
);

module.exports = Recertification;

//  // Recertification for Individual - Fees
//  applicationProcessingFee: {
//   type: String,
//   trim: true,
//   require: [true, 'CofO application most have a file number']
// },
// assignmentConsentProcessingFee: {
//   type: String,
//   trim: true,
//   require: [true, 'CofO application most have a file number']
// },
// changeOfPurposeApplicationProcessingFee: {
//   type: String,
//   trim: true,
//   require: [true, 'CofO application most have a file number']
// },
// mergerConsentProcessingFee: {
//   type: String,
//   trim: true,
//   require: [true, 'CofO application most have a file number']
// },
// devolutionProcessingFee: {
//   type: String,
//   trim: true,
//   require: [true, 'CofO application most have a file number']
// },
// subdivisionConsentProcessingFee: {
//   type: String,
//   trim: true,
//   require: [true, 'CofO application most have a file number']
// },
// plotExtensionProcessingFee: {
//   type: String,
//   trim: true,
//   require: [true, 'CofO application most have a file number']
// },
// totalFee: {
//   type: String,
//   trim: true,
//   require: [true, 'CofO application most have a file number']
// },
// issueDate: {
//   type: String,
//   trim: true,
//   require: [true, 'CofO application most have a file number']
// },

// recertificationForIndividualDocuments: [
//   //   Required Document	Upload New Document	View Document	Use DMS	Browse DMS
//   { applicationForm: String },
//   { coordinates: String },
//   {
//     newspaperAdvertisement: String
//   },
//   {
//     surveyReport: String
//   },
//   {
//     nationalIDCard: String
//   },
//   {
//     internationalPassport: String
//   },
//   {
//     birthCertificate: String
//   },
//   {
//     receipt: String
//   },
//   {
//     offerLetter: String
//   },
//   {
//     TDP: String
//   },
//   {
//     certificateOfOccupancy: String
//   },
//   {
//     stampedBankTeller: String
//   },
//   {
//     changeOfOwnership: String
//   },
//   {
//     powerOfAttorney: String
//   },
//   {
//     salesAgreement: String
//   },
//   {
//     votersRegistrationCard: String
//   },
//   {
//     driversLicense: String
//   },
//   {
//     utilityReceipt: String
//   },
//   {
//     otherIdentification: String
//   },
//   {
//     identityAffidavit: String
//   },
//   {
//     otherProofOfOwnership: String
//   },
//   {
//     policeReport: String
//   },
//   {
//     deedOfGift: String
//   },
//   {
//     partSurrender: String
//   },
//   {
//     sublease: String
//   },
//   {
//     localGovernmentCertificate: String
//   },
//   {
//     certifiedTrueCopyC_of_O: String
//   },
//   {
//     approvalLetter: String
//   },
//   {
//     allocationLetter: String
//   },
//   {
//     deedOfAssignment: String
//   },
//   {
//     courtAffidavit: String
//   },
//   {
//     deedofRelease: String
//   },
//   {
//     letterOfAdministration: String
//   },
//   {
//     sitePlan: String
//   },
//   {
//     subdivisionSketch: String
//   },
//   {
//     TINCard: String
//   },
//   {
//     mergerSketch: String
//   },
//   {
//     ownershipAffidavit: String
//   }
// ]
