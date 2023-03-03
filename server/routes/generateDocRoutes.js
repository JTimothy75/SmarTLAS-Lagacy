const express = require('express');
const generateDoc = require('./../utilities/generateDocument');

const router = express.Router();

// CofO Generation
router.route('/CofO').post(generateDoc.generateCofO);

router
  .route('/CofO/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewCofO);

// TDP Generation
router.route('/tdp').post(generateDoc.generateTdp);

router
  .route('/tdp/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewTdp);

// Acknowledgement Letter Generation
router
  .route('/acknowledgementLetter')
  .post(generateDoc.generateAcknowledgementLetter);

router
  .route('/acknowledgementLetter/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewAcknowledgementLetter);

// List Generation
router.route('/list').post(generateDoc.generateConfirmationList);

router
  .route('/list/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewAcknowledgementLetter);

// Invoice Generation
router.route('/invoice').post(generateDoc.generateInvoice);

router
  .route('/invoice/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewInvoice);

// Receipt Generation
router.route('/receipt').post(generateDoc.generateReceipt);

router
  .route('/receipt/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewReceipt);

// ********************************************
// Initial Bill Generation
router.route('/initialBill').post(generateDoc.generateInitialBill);

router
  .route('/initialBill/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewInitialBill);

// OfferLetter Generation
router.route('/offerLetter').post(generateDoc.generateOfferLetter);

router
  .route('/offerLetter/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewOfferLetter);

// letter of acceptance of offer Generation
router
  .route('/acceptanceOfOfferLetter')
  .post(generateDoc.generateAcceptanceOfOfferLetter);

router
  .route('/acceptanceOfOfferLetter/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewAcceptanceOfOfferLetter);

// Deeds of Assignment Generation
router.route('/deedsOfAssignment').post(generateDoc.generateDeedsOfAssignment);

router
  .route('/deedsOfAssignment/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewDeedsOfAssignment);

// Approval for Assignment Generation
router
  .route('/approvalForAssignment')
  .post(generateDoc.generateApprovalForAssignment);

router
  .route('/approvalForAssignment/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewApprovalForAssignment);

// Deeds of Mortgage Generation
router.route('/deedsOfMortgage').post(generateDoc.generateDeedsOfMortgage);

router
  .route('/deedsOfMortgage/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewDeedsOfMortgage);

// Approval for Mortgage Generation
router
  .route('/approvalForMortgage')
  .post(generateDoc.generateApprovalForMortgage);

router
  .route('/approvalForMortgage/fileNum/:fileNumber/doc/:docName')
  .get(generateDoc.previewApprovalForMortgage);

module.exports = router;
