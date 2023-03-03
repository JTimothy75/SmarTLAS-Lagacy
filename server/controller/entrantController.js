const Entrant = require('./../model/entrantModel');
const catchAsync = require('./../utilities/catchAsync');
const AppError = require('./../utilities/appError');

exports.getAllEntrant = catchAsync(async (req, res, next) => {
  const entrant = await Entrant.find();

  if (!entrant) {
    return next(new AppError('Can not fetch Entrant', 404));
  }

  res.status(200).json({
    status: 'success',
    results: entrant.length,
    data: {
      entrant
    }
  });
});

exports.getEntrant = catchAsync(async (req, res, next) => {
  const entrant = await Entrant.findById(req.params.id);

  if (!entrant) {
    return next(new AppError('No entrant found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      entrant
    }
  });
});

exports.createEntrant = catchAsync(async (req, res, next) => {
  const entrant = await Entrant.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      entrant
    }
  });
});

exports.updateEntrant = catchAsync(async (req, res, next) => {
  const entrantUpdate = await Entrant.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!entrantUpdate) {
    return next(new AppError('No entrant found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      entrantUpdate
    }
  });
});

exports.deleteEntrant = catchAsync(async (req, res, next) => {
  await Entrant.findByIdAndUpdate(req.params.id, {
    active: false
  });

  res.status(204).json({
    status: 'success',
    data: null
  });
});
