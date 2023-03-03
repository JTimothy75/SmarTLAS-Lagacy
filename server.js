const mongoose = require('mongoose');
const debug = require('debug')('server');
const chalk = require('chalk');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥💥 Shutting down....');
  console.log(err.name, err.message, err);
  process.exit(1);
});

dotenv.config({
  path: './config.env'
});
const app = require('./server/app');

const dbUrl = process.env.DATABASE_LOCAL;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log(`DB connection ${chalk.green('successful')}`));

// const port = process.env.PORT || 4020;
// const port = 4020;
// const server = app.listen(port, () => {
//   console.log(`Listening on port ${chalk.green(port)}`);
// });
const port = 8080;
// const server = app.listen(port, 'smartlas.gov', () => {
//   console.log(`Listening on port ${chalk.green(port)}`);
// });

const server = app.listen(port, () => {
  console.log(`Listening on port ${chalk.green(port)}`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLE REJECTION! 💥💥 Shutting down....');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
