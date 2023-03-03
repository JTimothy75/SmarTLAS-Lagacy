const mongoose = require('mongoose');
const slugify = require('slugify');
// const debug = require('debug')('server:fileController');

const fileSchema = new mongoose.Schema(
  {
    fileNumberFull: {
      type: String,
      // required: [true, 'File number is required'],
      unique: true
    },
    filePrefix: {
      type: String,
      required: [true, 'File number prefix is required'],
      unique: true
    },
    fileNumber: {
      type: String,
      required: [true, 'File number is required'],
      unique: true,
      maxlength: [6, 'Enter a valid file number'],
      minlength: [6, 'Enter a valid file number']
    },
    slug: String,
    applicantName: {
      type: String,
      trim: true,
      required: [true, 'Applicant name is required']
    },
    existingApplication: Boolean,
    applicationDate: Date,
    existingCofO: Boolean,
    CofODate: Date,
    existingOffer: Boolean,
    offerDate: Date,
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      maxlength: 11,
      minlength: 10
    },
    fileAlias: String,
    LGA: {
      type: String,
      required: [true, 'LGA name is required']
    },
    batchNo: {
      type: Number
      // required: [true, 'Batch number is required']
    },
    rackNo: {
      type: Number
      // required: [true, 'rack number is required']
    },
    currentLocation: {
      type: String,
      default: 'Archive',
      enum: {
        values: ['Archive', 'Vetting', 'GIS', 'Customer service'],
        message:
          'File Condition can either: Archive, Vetting, GIS, or Customer service'
      }
    },
    fileCondition: {
      type: String,
      default: 'open',
      enum: {
        values: ['Open', 'Close', 'Temporary file', 'Temporary closed'],
        message:
          'File Condition can either: Open, Close, Temporary file, Temporary closed'
      }
    },
    numberOfPages: {
      type: Number,
      required: [true, 'number of Pages in the file is required']
    },

    snappedDocNames: [String],

    generatedDocNames: [String],

    //TODO

    fileRemark: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
          trim: true,
          required: [true, 'Remark must be created by a user']
        },
        remark: {
          type: String,
          trim: true,
          required: [true, 'Remark can not be empty']
        },
        createAt: {
          type: Date,
          default: Date.now
        },
        active: {
          type: Boolean,
          default: true,
          select: false
        }
      }
    ],

    // costumerServiceRemarks: [
    //   {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'CostumerServiceRemark'
    //   }
    // ],

    // applicantList: []

    plotGeom: {
      fileNumber: String,
      plotNumber: String,
      areaName: String,
      billingZone: String,
      plotAreaSize: Number,
      parcelPoint: [
        {
          type: {
            type: String,
            default: 'MultiPoint'
          },
          coordinates: [Number],
          beaconNumber: {
            type: String,
            unique: true
          }
        }
      ],
      parcel: {
        type: {
          type: String,
          default: 'Polygon'
        },
        coordinates: [[[Number]]]
      }
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
        // test: String,
        modifiedAt: {
          type: Date,
          default: Date.now(),
          require: true
        },
        modifiedBy: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
          required: [true, 'modifiedBy id required']
        }
      }
    ]

    //TODO:
  },
  {
    toJSON: { virtuals: true },
    toObjectId: { virtuals: true }
  }
);

// Virtual Populate
fileSchema.virtual('applicantionList.recertification', {
  ref: 'Recertification',
  foreignField: 'file',
  localField: '_id'
});

fileSchema.virtual('applicantionList.mortgage', {
  ref: 'Mortgage',
  foreignField: 'file',
  localField: '_id'
});

fileSchema.virtual('costumerServiceRemarks', {
  ref: 'CostumerServiceRemark',
  foreignField: 'file',
  localField: '_id'
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create
fileSchema.pre('save', function(next) {
  this.slug = slugify(this.fileNumber, { lower: true });
  next();
});

fileSchema.pre('save', function(next) {
  this.batchNo = Math.ceil(this.fileNumber / 50);
  this.rackNo = Math.ceil(this.fileNumber / 750);
  this.fileNumberFull = `${this.filePrefix} ${this.fileNumber}`;

  // this.modifiedBy.push({ test: `${this.createdBy}` });
  if (!this.modifiedBy[0]) {
    this.modifiedBy.push({
      modifiedAt: Date.now(),
      modifiedBy: this.createdBy
    });
  }
  next();
});

fileSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'createdBy',
    select: 'userName -_id'
  })

    .populate({
      path: 'modifiedBy.modifiedBy',
      select: 'userName -_id'
    })
    .populate({
      path: 'fileRemark.user',
      select: 'userName -_id'
    });
  next();
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
