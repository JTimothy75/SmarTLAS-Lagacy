const express = require('express');

const entrantController = require('./../controller/entrantController');
const authController = require('./../controller/authController');

const router = express.Router();

router
  .route('/')
  .get(entrantController.getAllEntrant)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'data-capture'),
    entrantController.createEntrant
  );

router
  .route('/:id')
  .get(entrantController.getEntrant)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'data-capture'),
    entrantController.updateEntrant
  )
  .delete(entrantController.deleteEntrant);

module.exports = router;
