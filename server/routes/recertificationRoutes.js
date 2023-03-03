const express = require('express');
const recertificationController = require('../controller/recertificationController');
const authController = require('../controller/authController');

const router = express.Router();
// router.route('/tour-stats').get(fileController.getFileStats);
router
  .route('/month-created-file/:year')
  .get(recertificationController.getMonthCreatedRecertification);

router
  .route('/')
  .get(authController.protect, recertificationController.getAllRecertifications)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'data-capture'),
    recertificationController.createRecertification
  );

router
  .route('/:id')
  .get(recertificationController.getRecertification)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'data-capture'),
    recertificationController.updateRecertification
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'manage-user'),
    recertificationController.deleteRecertification
  );

module.exports = router;
