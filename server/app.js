const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const path = require('path');
// const xss = require('xss-clean');
const hpp = require('hpp');
// const debug = require('debug')('server:app');

const AppError = require('./utilities/appError');
const globalErrorHandler = require('./controller/errorController');
const userRouter = require('./routes/userRoutes');
const fileRouter = require('./routes/fileRoutes');
const entrantRouter = require('./routes/entrantRoutes');
const entrantOrgRouter = require('./routes/entrantOrgRoutes');
const recertificationRouter = require('./routes/recertificationRoutes');
const mortgageRouter = require('./routes/mortgageRoutes');
const costumerServiceRemarksRouter = require('./routes/costumerServiceRemarksRoutes');
const generateDocRouter = require('./routes/generateDocRoutes');
let error = '';
const app = express();

// 1) Global Middlewaes
// Set security HTTP header
app.use(helmet());

// Limit request from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour'
});

app.use('/api', limiter);

app.use(express.static(path.join(__dirname, 'dist/SmartLAS')));
app.use(express.static(path.join(__dirname, 'public')));

// Body parser, reading data from the body into req.body
app.use(
  express.json({
    limit: '200kb'
  })
);

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
// Data sanitization against XSS
// app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'fileNumber',
      'applicantName',
      'existingApplication',
      'applicationDate',
      'existingCofO',
      'offerCofODate',
      'existingOffer',
      'offerDate',
      'phoneNumber',
      'remark',
      'fileAlias',
      'LGA',
      'batchNo',
      'rackNo',
      'currentLocation',
      'fileCondition',
      'numberOfPages',
      'snappedDocNames',
      'generatedDocNames',
      'fileRemark',
      'costumerServiceRemarks',
      'applicantList'
    ]
  })
);

// ROUTES
app.use('/api/v1/user', userRouter);
app.use('/api/v1/file', fileRouter);
app.use('/api/v1/remark', costumerServiceRemarksRouter);
app.use('/api/v1/entrant', entrantRouter);
app.use('/api/v1/entrant-org', entrantOrgRouter);
app.use('/api/v1/recertification', recertificationRouter);
app.use('/api/v1/mortgage', mortgageRouter);
app.use('/api/v1/generateDoc', generateDocRouter);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/SmartLAS/index.html'));
});
// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
// });

app.use(globalErrorHandler);

module.exports = app;
