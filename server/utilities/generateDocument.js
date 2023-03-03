const pdf = require('html-pdf');
const debug = require('debug')('server:generateCofO');
const path = require('path');
// const fs = require('fs');

const cofoTemplate = require('./templates/cofoTemplate');
const tdpTemplate = require('./templates/tdpTemplate');
const acknowLetterTemplate = require('./templates/acknowLetterTemplate');
const cofoConfirmationListTemplate = require('./templates/cofoConfirmationListTemplate');
const invoiceTemplate = require('./templates/invoiceTemplate');
const receiptTemplate = require('./templates/receiptTemplate');
const initialBillTemplate = require('./templates/initialBillTemplate');
const offerLetterTemplate = require('./templates/offerLetterTemplate');
const acceptanceOfOfferLetterTemplate = require('./templates/acceptanceOfOfferLetterTemplate');
const deedsOfAssignmentTemplate = require('./templates/deedsOfAssignmentTemplate');
const approvalForAssignmentTemplate = require('./templates/approvalForAssignmentTemplate');
const deedsOfMortgageTemplate = require('./templates/deedsOfMortgageTemplate');
const approvalForMortgageTemplate = require('./templates/approvalForMortgageTemplate');

const generatePDF = (res, template, option, fileName) => {
  pdf
    .create(template, option)
    .toFile(`./documents/generated/${fileName}.pdf`, err => {
      if (err) {
        res.send(Promise.reject());
      }
      // res.json({
      //   status: 'success',
      //   Message: 'file generated'
      // });

      res.sendFile(
        `C:/BN/program/project/SmartLAS/server/documents/generated/${fileName}.pdf`
      );
    });
};

const options = {
  format: 'A4',
  type: 'pdf',
  quality: '75',
  border: '0.6cm',
  base: 'file:///C:/BN/program/project/SmartLAS/server/'
};

const optionsCofO = {
  format: 'A4',
  type: 'pdf',
  quality: '75',
  border: '1.7cm',
  base: 'file:///C:/BN/program/project/SmartLAS/server/'
};

const optionsLandscape = {
  format: 'A4',
  type: 'pdf',
  quality: '75',
  border: '0.6cm',
  orientation: 'landscape',
  base: 'file:///C:/BN/program/project/SmartLAS/server/'
};

// CofO Generation---

// Post ---> fetching data and PDF generation
exports.generateCofO = (req, res) => {
  console.log('wowowo');

  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_cofo`;
  generatePDF(res, cofoTemplate(req.body), optionsCofO, fileName);
};
// Get ---> Sending the generated PDF to the client
exports.previewCofO = async (req, res) => {
  try {
    res.sendFile(
      `C:/BN/program/project/SmartLAS/server/documents/generated/${req.params.fileNumber}/${req.params.docName}.pdf`
    );

    // res.sendfile(`./documents/generated/BEN 10102/BEN 10102_2019121945052_digital_cofo.pdf`);
    // res.send('Love')
  } catch (error) {
    res.json({
      status: 'failed',
      Message: 'No preview'
    });
    debug(error);
  }
};

// TDP Generation---

exports.generateTdp = (req, res) => {
  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_tdp`;
  generatePDF(res, tdpTemplate(req.body), options, fileName);
};
// preview
exports.previewTdp = async (req, res) => {
  try {
    res.sendFile(
      `C:/BN/program/project/SmartLAS/server/documents/generated/${req.params.fileNumber}/${req.params.docName}.pdf`
    );

    // res.sendfile(`./documents/generated/BEN 10102/BEN 10102_2019121945052_digital_cofo.pdf`);
    // res.send('Love')
  } catch (error) {
    res.json({
      status: 'failed',
      Message: 'No preview'
    });
    debug(error);
  }
};

// Acknowledgement Letter Generation-

exports.generateAcknowledgementLetter = (req, res) => {
  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_acknowledgement_letter`;
  generatePDF(res, acknowLetterTemplate(req.body), options, fileName);
};
// preview
exports.previewAcknowledgementLetter = (req, res) => {};

// Confirmation List Generation-

exports.generateConfirmationList = (req, res) => {
  const fileName = `cofo list/CofO_List_${
    req.body.listCount
  }_${Date.now()}_digital_cofo_list`;
  generatePDF(
    res,
    cofoConfirmationListTemplate(req.body),
    optionsLandscape,
    fileName
  );
};
// preview
exports.previewConfirmationList = (req, res) => {};

// Invoice Generation---

exports.generateInvoice = (req, res) => {
  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_invoice`;
  generatePDF(res, invoiceTemplate(req.body), options, fileName);
};
// preview
exports.previewInvoice = (req, res) => {};

// Receipt Generation--

exports.generateReceipt = (req, res) => {
  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_receipt`;
  generatePDF(res, receiptTemplate(req.body), options, fileName);
};
// preview
exports.previewReceipt = (req, res) => {};

// Initial Bill Generation--

exports.generateInitialBill = (req, res) => {
  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_initial_bill`;
  generatePDF(res, initialBillTemplate(req.body), options, fileName);
};
// preview
exports.previewInitialBill = (req, res) => {};

// OfferLetter Generation--

exports.generateOfferLetter = (req, res) => {
  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_offer_letter`;
  generatePDF(res, offerLetterTemplate(req.body), options, fileName);
};
// preview
exports.previewOfferLetter = (req, res) => {};

// letter of acceptance of offer Generation---

exports.generateAcceptanceOfOfferLetter = (req, res) => {
  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_letter_of_acceptance_of_offer`;
  generatePDF(
    res,
    acceptanceOfOfferLetterTemplate(req.body),
    options,
    fileName
  );
};
// preview
exports.previewAcceptanceOfOfferLetter = (req, res) => {};

// Deeds of Assignment Generation---

exports.generateDeedsOfAssignment = (req, res) => {
  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_deeds_of_assignment`;
  generatePDF(res, deedsOfAssignmentTemplate(req.body), options, fileName);
};
// preview
exports.previewDeedsOfAssignment = (req, res) => {};

// Approval for Assignment Generation---

exports.generateApprovalForAssignment = (req, res) => {
  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_approval_for_assignment`;
  generatePDF(res, approvalForAssignmentTemplate(req.body), options, fileName);
};
// preview
exports.previewApprovalForAssignment = (req, res) => {};

// Deeds of Mortgage Generation--

exports.generateDeedsOfMortgage = (req, res) => {
  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_deeds_of_mortgage`;
  generatePDF(res, deedsOfMortgageTemplate(req.body), options, fileName);
};
// preview
exports.previewDeedsOfMortgage = (req, res) => {};

// Approval for Mortgage Generation--

exports.generateApprovalForMortgage = (req, res) => {
  const fileName = `file/${req.body.fileNumber}/${
    req.body.fileNumber
  }_${Date.now()}_digital_approval_for_mortgage`;
  generatePDF(res, approvalForMortgageTemplate(req.body), options, fileName);
};
// preview
exports.previewApprovalForMortgage = (req, res) => {};
