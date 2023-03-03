const express = require('express');
const mortgageController = require('../controller/mortgageController');
const authController = require('../controller/authController');

const router = express.Router();
// router.route('/tour-stats').get(mortgageController.getFileStats);
router
  .route('/month-created-file/:year')
  .get(mortgageController.getMonthCreatedMortgage);

router
  .route('/')
  .get(authController.protect, mortgageController.getAllMortgage)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'data-capture'),
    mortgageController.createMortgage
  );

router
  .route('/:id')
  .get(mortgageController.getMortgage)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'data-capture'),
    mortgageController.updateMortgage
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'manage-user'),
    mortgageController.deleteMortgage
  );

module.exports = router;
