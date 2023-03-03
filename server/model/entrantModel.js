const mongoose = require('mongoose');

const entrantSchema = new mongoose.Schema({
  entryDate: {
    type: Date,
    default: Date.now(),
    require: [true, 'Application is required']
  },

  personalDetails: {
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

    gender: {
      type: String,
      trim: true,
      require: [true, 'Entrant gender name is required']
    },
    dateOfBirth: {
      type: Date,
      require: [true, 'Entrant birth date is required']
    },

    occupation: {
      type: String,
      trim: true
    },

    children: {
      type: Number
    },

    nationality: {
      type: String,
      trim: true,
      require: [true, 'Nationality of entrant is required']
    },
    stateOfOrigin: {
      type: String,
      trim: true,
      require: [true, 'Entrant state of origin is required']
    },
    originLGA: {
      type: String,
      trim: true,
      require: [true, 'Entrant LGA is required']
    },
    status: {
      type: String,
      trim: true
    },

    maritalStatus: {
      type: String,
      trim: true
    },
    religion: {
      type: String,
      trim: true
    },
    education: {
      type: String,
      trim: true
    },
    annualIncomme: {
      type: String,
      trim: true
    },

    IDReferenceNumber: {
      type: String,
      trim: true,
      require: [true, 'Entrant ID reference number is required'],
      unique: [true, 'An entrant with this IDReferenceNumber already exist']
    },

    TIN: {
      type: String,
      trim: true,
      unique: [
        true,
        'An entrant with this Tax Identification Number (TIN) already exist'
      ],
      require: [true, 'Entrant Tax Identification Number (TIN) is required']
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
      unique: [true, 'An entrant with this Fax already exist']
    },

    email: {
      type: String,
      trim: true,
      unique: [true, 'An entrant with this Email already exist']
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

entrantSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'createdBy',
    select: 'userName'
  }).populate({
    path: 'modifiedBy.modifiedBy',
    select: 'userName'
  });
  next();
});

entrantSchema.pre('save', function(next) {
  if (!this.modifiedBy[0]) {
    this.modifiedBy.push({
      modifiedAt: Date.now(),
      modifiedBy: this.createdBy
    });
  }
  next();
});

const Entrant = mongoose.model('Entrant', entrantSchema);

module.exports = Entrant;
