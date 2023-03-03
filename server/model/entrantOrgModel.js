const mongoose = require('mongoose');

const entrantOrgSchema = new mongoose.Schema({
  entryDate: {
    type: Date,
    default: Date.now(),
    require: [true, 'Application is required']
  },

  organizationDetails: {
    organizationType: {
      type: String,
      trim: true,
      require: [true, 'Entrant last name is required']
    },

    organizationName: {
      type: String,
      trim: true,
      require: [true, 'Entrant first name is required'],
      unique: [true, 'An organiation with this Name already exist']
    },

    RCNumber: {
      type: String,
      trim: true,
      unique: [true, 'An organiation with this RCNumber already exist']
    },

    dateOfRegistration: {
      type: Date,
      require: [true, 'Entrant birth date is required']
    },

    TIN: {
      type: String,
      trim: true,
      require: [true, 'Entrant Tax Identification Number (TIN) is required'],
      unique: [
        true,
        'An organiation with this Tax Identification Number (TIN) already exist'
      ]
    },
    phoneNumber: {
      type: String,
      require: [true, 'Entrant phone number is required']
    },

    secondPhoneNumber: {
      type: [String]
    },

    fax: {
      type: String,
      trim: true,
      unique: [true, 'An organiation with this Fax already exist']
    },

    email: {
      type: String,
      trim: true,
      unique: [true, 'An organiation with this Email already exist']
    }
  },

  contactPerson: {
    title: {
      type: String,
      trim: true,
      require: [true, 'Entrant most have a title']
    },
    firstName: {
      type: String,
      trim: true,
      require: [true, 'Entrant first name is required']
    },

    middleName: {
      type: String,
      trim: true
    },

    familyName: {
      type: String,
      trim: true,
      require: [true, 'Entrant last name is required']
    },

    phoneNumber: {
      type: String,
      require: [true, 'Entrant phone number is required']
    },

    gender: {
      type: String,
      trim: true,
      require: [true, 'Entrant gender name is required']
    },
    dateOfBirth: {
      type: Date,
      require: [true, 'Entrant birth date is required']
    },
    designation: {
      type: String,
      trim: true
    },
    IDReferenceNumber: {
      type: String,
      trim: true,
      require: [true, 'Entrant ID reference number is required']
    },
    nationality: {
      type: String,
      trim: true,
      require: [true, 'Nationality of entrant is required']
    },
    photo: {
      type: String,
      trim: true
    }
  },

  currentAddress: {
    houseNo: {
      type: String,
      trim: true
    },

    streetName: {
      type: String,
      trim: true,
      require: [true, 'Street name is required']
    },

    streetExt: {
      type: String,
      trim: true,
      require: [true, 'Street extention is required'],
      enum: {
        values: ['road', 'street', 'close', 'crescent'],
        message: 'File Condition can either: road, street, close, and crescent'
      }
    },
    ward: {
      type: String,
      trim: true,
      require: [true, 'Ward is required']
    },

    city_Town: {
      type: String,
      trim: true,
      require: [true, 'City is required']
    },
    district: {
      type: String,
      trim: true,
      require: [true, 'District is required']
    },
    state: {
      type: String,
      trim: true,
      require: [true, 'State is required']
    },

    country: {
      type: String,
      trim: true,
      require: [true, 'Country is required']
    },
    PO_PMB: {
      type: String,
      trim: true
    },

    C_O: {
      type: String,
      trim: true
    },

    additionalAddress: {
      type: String,
      trim: true
    }

    //   addressPreview virtual
  },

  remark: {
    type: String,
    trim: true
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
});

entrantOrgSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'createdBy',
    select: 'userName'
  }).populate({
    path: 'modifiedBy.modifiedBy',
    select: 'userName'
  });
  next();
});

entrantOrgSchema.pre('save', function(next) {
  if (!this.modifiedBy[0]) {
    this.modifiedBy.push({
      modifiedAt: Date.now(),
      modifiedBy: this.createdBy
    });
  }
  next();
});

const EntrantOrg = mongoose.model('EntrantOrg', entrantOrgSchema);

module.exports = EntrantOrg;
