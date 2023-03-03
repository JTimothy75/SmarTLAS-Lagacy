const express = require('express');
const costumerServiceRemarksController = require('./../controller/costumerServiceRemarksController');

const router = express.Router();

router
  .route('/')
  .get(costumerServiceRemarksController.getAllRemarks)
  .post(costumerServiceRemarksController.createRemark);

router
  .route('/:id')
  .get(costumerServiceRemarksController.getRemark)
  .post(costumerServiceRemarksController.treatRemark)
  .patch(costumerServiceRemarksController.updateRemark)
  .delete(costumerServiceRemarksController.deleteRemark);

module.exports = router;
