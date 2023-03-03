const Remark = require('./../model/costumerServiceRemarksModel');
const catchAsync = require('./../utilities/catchAsync');
const AppError = require('./../utilities/appError');

exports.getAllRemarks = catchAsync(async (req, res, next) => {
  const remarks = await Remark.find();

  if (!remarks) {
    return next(new AppError('can not find remarks', 404));
  }

  res.status(200).json({
    status: 'success',
    results: remarks.length,
    data: {
      remarks
    }
  });
});

exports.getRemark = catchAsync(async (req, res, next) => {
  const remark = await Remark.findById(req.params.id);

  if (!remark) {
    return next(new AppError('No remark found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      remark
    }
  });
});

exports.createRemark = catchAsync(async (req, res, next) => {
  const remark = await Remark.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      remark
    }
  });
});

exports.updateRemark = catchAsync(async (req, res, next) => {
  const remarkUpdate = await Remark.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!remarkUpdate) {
    return next(new AppError('No remark found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      remarkUpdate
    }
  });
});

exports.treatRemark = catchAsync(async (req, res, next) => {
  const treatedRemark = await Remark.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!treatedRemark) {
    return next(new AppError('No remark found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      treatedRemark
    }
  });
});

exports.deleteRemark = catchAsync(async (req, res, next) => {
  await Remark.findByIdAndUpdate(req.params.id, {
    active: false
  });

  res.status(204).json({
    status: 'success',
    data: null
  });
});
