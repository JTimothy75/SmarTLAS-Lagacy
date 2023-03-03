const mongoose = require('mongoose');

const mortgageSchema = new mongoose.Schema(
  {
    // Mortgagee Details
    mortgagee: {
      type: mongoose.Schema.ObjectId,
      ref: 'EntrantOrg',
      required: [true, 'Application for mortgage most have a mortgagee']
    },

    //  Representative Details
    authorisesRep: {
      type: mongoose.Schema.ObjectId,
      ref: 'Entrant'
    },
    thirdParty: {
      type: mongoose.Schema.ObjectId,
      ref: 'Entrant',
      required: [true, 'Application for mortgage most have a third party']
    },

    applicationDate: {
      type: Date,
      require: true
    },
    signer: {
      type: String,
      trim: true,
      require: [true, 'Application for mortgage most have a signer']
    },

    //  Mortgage Details
    considerationAmount: {
      type: String,
      trim: true,
      require: [
        true,
        'Application for mortgage most have a consideration amount'
      ]
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

    submittedDocuments: [String]
  },
  {
    toJSON: { virtuals: true },
    toObjectId: { virtuals: true }
  }
);

mortgageSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'mortgagee'
  })
    .populate({
      path: 'thirdParty'
    })
    .populate({
      path: 'authorisesRep'
    })
    .populate({
      path: 'file',
      select: 'fileNumber'
    })
    .populate({
      path: 'createdBy',
      select: 'userName'
    })
    .populate({
      path: 'modifiedBy',
      select: 'userName'
    });
  next();
});

mortgageSchema.pre('save', function(next) {
  if (!this.modifiedBy[0]) {
    this.modifiedBy.push({
      modifiedAt: Date.now(),
      modifiedBy: this.createdBy
    });
  }
  next();
});

const Mortgage = mongoose.model('Mortgage', mortgageSchema);

module.exports = Mortgage;

//  // Application For Mortgage - Fees
//  mortgageProcessingFee: {
//   type: String,
//   trim: true,
//   require: [true, 'Application for mortgage most have a']
// },
// totalFee: {
//   type: String,
//   trim: true,
//   require: [true, 'Application for mortgage most have a']
// },

// applicationOverallStatus: {
//   type: String,
//   trim: true,
//   require: [true, 'CofO application most have a file number']
// },
// currentStepStatus: {
//   type: String,
//   trim: true,
//   require: [true, 'CofO application most have a file number']
// },

// applicationForMortgageDocuments: [
//   {
//     nationalIDCard: String
//   },
//   {
//     internationalPassport: String
//   },
//   {
//     receipt: String
//   },
//   {
//     taxClearanceCertificate: String
//   },
//   {
//     certificationOfIncorporation: String
//   },
//   {
//     votersRegistrationCard: String
//   },
//   {
//     driversLicense: String
//   },
//   {
//     TINCard: String
//   }
// ]
