const EntrantOrg = require('../model/entrantOrgModel');
const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');

exports.getAllEntrantOrg = catchAsync(async (req, res, next) => {
  const entrantOrg = await EntrantOrg.find();

  if (!entrantOrg) {
    return next(new AppError('Can not fetch Entrant Organization', 404));
  }

  res.status(200).json({
    status: 'success',
    results: entrantOrg.length,
    data: {
      entrantOrg
    }
  });
});

exports.getEntrantOrg = catchAsync(async (req, res, next) => {
  const entrantOrg = await EntrantOrg.findById(req.params.id);

  if (!entrantOrg) {
    return next(
      new AppError('No entrant Organization found with that id', 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      entrantOrg
    }
  });
});

exports.createEntrantOrg = catchAsync(async (req, res, next) => {
  const entrantOrg = await EntrantOrg.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      entrantOrg
    }
  });
});

exports.updateEntrantOrg = catchAsync(async (req, res, next) => {
  const entrantOrgUpdate = await EntrantOrg.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!entrantOrgUpdate) {
    return next(
      new AppError('No entrant Organization found with that id', 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      entrantOrgUpdate
    }
  });
});

exports.deleteEntrantOrg = catchAsync(async (req, res, next) => {
  await EntrantOrg.findByIdAndUpdate(req.params.id, {
    active: false
  });

  res.status(204).json({
    status: 'success',
    data: null
  });
});
