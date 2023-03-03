// const debug = require('debug')('server:fileController');
// const chalk = require('chalk');
const File = require('./../model/fileModel');
const APIFeatures = require('./../utilities/apiFeatures');
const catchAsync = require('./../utilities/catchAsync');
const AppError = require('./../utilities/appError');

exports.getAllFiles = catchAsync(async (req, res, next) => {  
  // Execute query
  const features = new APIFeatures(File.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const files = await features.query;

  res.status(200).json({
    status: 'success',
    results: files.length,
    data: {
      files
    }
  });
});

exports.getFile = catchAsync(async (req, res, next) => {
  const file = await File.findById(req.params.id)
    .populate({
      path: 'applicantionList.recertification',
      select: '_id'
    })
    .populate({
      path: 'applicantionList.mortgage',
      select: '_id'
    })
    .populate({
      path: 'costumerServiceRemarks'
      // select: 'alloteeFullName'
    });
  if (!file) {
    return next(new AppError('No file found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      file
    }
  });
});

exports.createFile = catchAsync(async (req, res, next) => {
  const newFile = await File.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      file: newFile
    }
  });
});

exports.updateFile = catchAsync(async (req, res, next) => {
  const updateToFile = await File.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!updateToFile) {
    return next(new AppError('No file found with that id', 404));
  }

  res.status(201).json({
    status: 'success',
    data: {
      file: updateToFile
    }
  });
});

exports.deleteFile = catchAsync(async (req, res, next) => {
  const file = await File.findByIdAndDelete(req.params.id);

  if (!file) {
    return next(new AppError('No file found with that id', 404));
  }

  res.status(204).json({
    status: 'success',
    message: null
  });
});

exports.getFileStats = catchAsync(async (req, res, next) => {
  const stats = await File.aggregate([
    {
      $match: { rackNo: { $gte: 1 } }
    },
    {
      $group: {
        _id: '$currentLocation',
        numFiles: { $sum: 1 },
        avgRackNo: { $avg: '$rackNo' },
        avgBatchNo: { $avg: '$batchNo' },
        minRackNo: { $min: '$rackNo' },
        maxRackNo: { $max: '$rackNo' }
      }
    },
    {
      $sort: { avgBatchNo: 1 }
    }
  ]);

  res.status(200).json({
    status: 'success',
    results: stats.length,
    data: {
      stats
    }
  });
});

exports.getMonthCreatedFile = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1;
  const monthFile = await File.aggregate([
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
        Files: { $push: '$fileNumber' }
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
    results: monthFile.length,
    data: {
      year: year,
      monthFile
    }
  });
});
