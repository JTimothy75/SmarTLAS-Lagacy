// const debug = require('debug')('server:fileController');
// const chalk = require('chalk');
const Mortgage = require('../model/mortgageModel');
const APIFeatures = require('../utilities/apiFeatures');
const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');

exports.getAllMortgage = catchAsync(async (req, res, next) => {
  // Execute query
  const features = new APIFeatures(Mortgage.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const mortgages = await features.query;

  res.status(200).json({
    status: 'success',
    results: mortgages.length,
    data: {
      mortgages
    }
  });
});

exports.getMortgage = catchAsync(async (req, res, next) => {
  const mortgage = await Mortgage.findById(req.params.id).populate(
    'applicantList'
  );

  if (!mortgage) {
    return next(new AppError('No mortgage found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      mortgage
    }
  });
});

exports.createMortgage = catchAsync(async (req, res, next) => {
  const newMortgage = await Mortgage.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      mortgage: newMortgage
    }
  });
});

exports.updateMortgage = catchAsync(async (req, res, next) => {
  const updateToMortgage = await Mortgage.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!updateToMortgage) {
    return next(new AppError('No mortgage found with that id', 404));
  }

  res.status(201).json({
    status: 'success',
    data: {
      mortgage: updateToMortgage
    }
  });
});

exports.deleteMortgage = catchAsync(async (req, res, next) => {
  const mortgage = await Mortgage.findByIdAndDelete(req.params.id);

  if (!mortgage) {
    return next(new AppError('No mortgage found with that id', 404));
  }

  res.status(204).json({
    status: 'success',
    message: null
  });
});

exports.getMonthCreatedMortgage = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1;
  const monthMortgage = await Mortgage.aggregate([
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
        numMortgages: { $sum: 1 },
        Mortgages: { $push: '$fileNumber' }
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
    results: monthMortgage.length,
    data: {
      year: year,
      monthMortgage
    }
  });
});
