const express = require('express');

const entrantOrgController = require('../controller/entrantOrgController');
const authController = require('./../controller/authController');

const router = express.Router();

router
  .route('/')
  .get(entrantOrgController.getAllEntrantOrg)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'data-capture'),
    entrantOrgController.createEntrantOrg
  );

router
  .route('/:id')
  .get(entrantOrgController.getEntrantOrg)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'data-capture'),
    entrantOrgController.updateEntrantOrg
  )
  .delete(entrantOrgController.deleteEntrantOrg);

module.exports = router;
