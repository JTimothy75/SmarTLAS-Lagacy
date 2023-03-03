// module.exports = (fileNumber, applicantName, applicantAddress, term, commencementDate, groundRent, landUse, regNum, page, volume, passportUrl, agency_logoUrl, bengisLogoUrl)
module.exports = inputData => {
  let submittedDoc = '';

  if (inputData.submittedDocument) {
    inputData.submittedDocument.forEach(element => {
      submittedDoc += `
      <tr>
        <td>${element}</td>
      </tr>
      `;
    });
  }

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
        * {
          padding: 0;
          margin: 0;
        }
  
        .bold {
          font-weight: bolder;
        }
  
        .container {
          position: relative;
          font-weight: 400;
          font-family: Arial, Helvetica, sans-serif;
          height: 27cm;
          width: 17cm;
          margin: 0.6cm auto;
        }
  
        .inner-container {
          position: relative;
          font-size: 8.5pt;
          font-weight: 400;
          font-family: Arial, Helvetica, sans-serif;
          height: 27cm;
          width: 17cm;
        }
  
        #head {
          height: 3.2cm;
        }
  
        .state-logo {
          position: relative;
          width: 100%;
        }
  
        #state-logo-img {
          position: relative;
          display: block;
          border: rgb(0, 0, 0) solid 1px;
          height: 65px;
          width: 65px;
          margin: 10px auto;
        }
        .state {
          text-align: center;
          color: rgb(255, 0, 0);
          font-size: 1.2em;
          font-weight: bolder;
          padding: 1px;
          margin: 0;
        }
  
        .agency-name {
          text-align: center;
          font-weight: bolder;
          font-size: 1.1em;
          padding: 1px;
          margin: 0;
        }
  
        .document-name {
          text-align: center;
          font-weight: bolder;
          font-size: 1.1em;
          padding: 2px;
          margin: 0;
        }
  
        .file-info {
          height: 2cm;
          font-weight: bolder;
          margin: 20px 0;
        }

        .key {
          padding-right: 20px;
        }
  
        .aknowledgement-statement {
          height: 2.2cm;
          text-align: justify;
        }
  
        .submitted-document {
          border-top: 1px solid #000000;
          height: 10.3cm;
          padding: 5px;
          margin: 0.5cm 0;
        }

        .submitted-document h4 {
          float: left;
        }
  
        .submitted-document-list {
          float: right;
          font-weight: bolder;
          padding-top: 20px;
        }
  
        .submitted-document-list table tr {
          display: block;
          width: 6cm;
          border-bottom: 1px solid #000000;
        }
  
        .signature-box {
          position: absolute;
          bottom: 150px;
          width: 100%;
          border-bottom: 1px solid #000000;
          margin-bottom: 2px;
        }
  
        .signature,
        .signature-name {
          padding: 0;
          margin: 10px;
          font-weight: bolder;
        }

        .commissioner-Signature {
          float: left;
        }

        .applicant-Signature {
          float: right;
        }
  
        .disclaimer {
          position: absolute;
          bottom: 70px;
          width: 100%;
          height: 60px;
          text-align: justify;
          font-size: 0.7em;
          font-weight: bolder;
        }
  
        .disclaimer h4,
        .disclaimer p {
          margin: 0;
          padding: 1.5px;
        }
  
        footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 70px;
        }
  
        address p {
          text-align: center;
          font-weight: bolder;
          margin: 2px;
          color: rgb(255, 0, 0);
          font-size: 0.7em;
        }
  
        .agency-logo {
          float: right;
        }
  
        #agency-logo-img {
          position: relative;
          display: inline-block;
          border: rgb(0, 0, 0) solid 2px;
          height: 30px;
          width: 100px;
          margin: 2px;
        }

        .p1 {
          display: inline-block;
          float: left;
          margin-top: 10px;
        }

        .p2 {
          display: inline-block;
          float: right;
          margin-top: 10px;
        }
      </style>
    </head>
  
    <body>
      <div class="container">
        <div class="inner-container">
          <section id="head">
            <div class="state-logo">
              <img id="state-logo-img" src="resources/img/state_logo.jpg" alt="state logo" />
            </div>
            <p class="state">KOGI STATE GOVERNMENT</p>
            <p class="agency-name">KOGI STATE GEOGRAPHIC INFORMATION SERVICE</p>
            <p class="document-name">
              ACKNOWLEDGEMENT OF APPLICATION FOR RECERTIFICATION
            </p>
          </section>
  
          <section class="file-info">
            <table>
              <tr>
                <td class='key'>File Number:</td>
                <td class='value'>${inputData.fileNumber}</td>
              </tr>
              <tr>
                <td class='key'>Applicant Name:</td>
                <td class='value'>${inputData.applicantName}</td>
              </tr>
              <tr>
                <td class='key'>Applicant Address:</td>
                <td class='value'>${inputData.applicantAddress}</td>
              </tr>
              <tr>
                <td class='key'>Representative Name:</td>
                <td class='value'>${inputData.representativeName}</td>
              </tr>
              <tr>
                <td class='key'>Application Date:</td>
                <td class='value'>${inputData.applicantionDate}</td>
              </tr>
            </table>
          </section>
          <section class="aknowledgement-statement">
            <p class="content">
              This is to acknowledge the receipt of the original
              <span class="bold">${inputData.certificationDocument}.</span> for
              <span class="bold">${inputData.applicantName}.</span>
            </p>
            <p class="content">
              In respect of plot Number <span class="bold">${inputData.plotNumber}</span> on
              street <span class="bold">${inputData.street}</span> of District/Area
              <span class="bold">${inputData.areaDistrict}</span> in LGA
              <span class="bold">${inputData.plotLGA}</span> and dated
              <span class="bold">${inputData.documentDate}</span>.
            </p>
          </section>
  
          <section class="submitted-document">
            <h4>The following documents were received</h4>
            <div class="submitted-document-list">
              <table>
                ${submittedDoc}
              </table>
            </div>
          </section>
          <section class="signature-box">
            <div class="commissioner-Signature">
              <p class="signature">
                _______________________________
              </p>
              <p class="signature-name">
                for: Honorable Commissioner
              </p>
            </div>
  
            <div class="applicant-Signature">
              <p class="signature">
                _______________________________
              </p>
              <p class="signature-name">
                Signature (Applicant/Representative)
              </p>
            </div>
          </section>
  
          <section class="disclaimer">
            <h4>
              Disclaimer
            </h4>
            <p class="disclaimer-line">
              This acknowledgement does not in any way validate the authenticity
              of the documents described above. All documents are subject to
              further verification for authenticity
            </p>
            <p class="disclaimer-line">
              This acknowledgement must be presented at the time of collection of
              the new C-of-O. Please notify us of any change of contact address or
              any other vital information contained in your original application.
              Contact us directly at:
            </p>
          </section>
  
          <footer>
            <address>
              <p>
                KOGI STATE GEOGRAPHIC INFORMATION SERVICE (KOGIGIS), P.M.B. 5643,
                KOGI STATE, NIGERIA
              </p>
              <p>
                KOGI STATE SECRETARIAT FELELE, LOKOJA
              </p>
              <p>
                TEL. 07036400227, 09096646126, info@KOGIGIS.org
              </p>
            </address>
            <div class="agency-logo">
              <p class="p1">powered by</p>
              <img id="agency-logo-img" src="resources/img/agency_logo.png" alt="Agency Logo" />
              <p class="p2">LAS</p>
            </div>
          </footer>
        </div>
      </div>
    </body>
  </html>
  
    `;
};
