const mongoose = require('mongoose');
// const slugify = require('slugify');
// const debug = require('debug')('server:fileController');

const costumerServiceRemarkSchema = new mongoose.Schema({
  file: {
    type: mongoose.Schema.ObjectId,
    ref: 'File',
    trim: true,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    trim: true,
    required: [true, 'Remark must be created by a user']
  },
  createAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  remark: {
    type: String,
    trim: true,
    required: [true, 'Remark can not be empty']
  },

  active: {
    type: Boolean,
    default: true,
    select: false
  },
  treatedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  treated: {
    type: Boolean,
    default: false,
    select: false
  }

  //TODO:
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create
// costumerServiceRemarkSchema.pre('save', function(next) {
//   this.slug = slugify(this.fileNumber, { lower: true });
//   next();
// });

costumerServiceRemarkSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'createdBy',
    select: 'userName -_id'
  }).populate({
    path: 'file',
    select: 'fileNumberFull  LGA'
    // -modifiedBy -createdBy -fileRemark
  });

  next();
});

const CostumerServiceRemark = mongoose.model(
  'CostumerServiceRemark',
  costumerServiceRemarkSchema
);

module.exports = CostumerServiceRemark;
