// const debug = require('debug')('server:fileController');
// const chalk = require('chalk');
const Recertification = require('./../model/recertificationModel');
const APIFeatures = require('../utilities/apiFeatures');
const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');

exports.getAllRecertifications = catchAsync(async (req, res, next) => {
  // Execute query
  const features = new APIFeatures(Recertification.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const recertifications = await features.query;

  res.status(200).json({
    status: 'success',
    // results: recertifications.length,
    data: {
      recertifications
    }
  });
});

exports.getRecertification = catchAsync(async (req, res, next) => {
  const recertification = await Recertification.findById(
    req.params.id
  ).populate('applicantList');

  if (!recertification) {
    return next(new AppError('No recertification found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      recertification
    }
  });
});

exports.createRecertification = catchAsync(async (req, res, next) => {
  const newRecertification = await Recertification.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      recertification: newRecertification
    }
  });
});

exports.updateRecertification = catchAsync(async (req, res, next) => {
  const updateToRecertification = await Recertification.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!updateToRecertification) {
    return next(new AppError('No recertification found with that id', 404));
  }

  res.status(201).json({
    status: 'success',
    data: {
      file: updateToRecertification
    }
  });
});

exports.deleteRecertification = catchAsync(async (req, res, next) => {
  const recertification = await Recertification.findByIdAndDelete(
    req.params.id
  );

  if (!recertification) {
    return next(new AppError('No recertification found with that id', 404));
  }

  res.status(204).json({
    status: 'success',
    message: null
  });
});

exports.getMonthCreatedRecertification = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1;
  const monthRecertification = await Recertification.aggregate([
    {
      $match: {
        createDate: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`)
        }
      }
    },
    {
      $group: {
        _id: { $month: '$createDate' },
        numFiles: { $sum: 1 },
        Recertifications: { $push: '$fileNumber' }
      }
    },
    {
      $addFields: { month: '$_id' }
    },
    {
      $project: {
        _id: 0
      }
    },
    {
      $sort: { _id: -1 }
    }
  ]);

  res.status(200).json({
    status: 'success',
    // results: monthRecertification.length,
    data: {
      year: year,
      monthRecertification
    }
  });
});
