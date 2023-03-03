const express = require('express');
const fileController = require('./../controller/fileController');
const authController = require('./../controller/authController');

const router = express.Router();
router.route('/tour-stats').get(fileController.getFileStats);
router
  .route('/month-created-file/:year')
  .get(fileController.getMonthCreatedFile);

router
  .route('/')
  .get(authController.protect, fileController.getAllFiles)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'data-capture'),
    fileController.createFile
  );

router
  .route('/:id')
  .get(fileController.getFile)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'data-capture'),
    fileController.updateFile
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'manage-user'),
    fileController.deleteFile
  );

module.exports = router;
