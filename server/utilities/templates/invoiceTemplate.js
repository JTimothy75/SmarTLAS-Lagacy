// module.exports = (fileNumber, applicantName, applicantAddress, term, commencementDate, groundRent, landUse, regNum, page, volume, passportUrl, agency_logoUrl, bengisLogoUrl)
module.exports = inputData => {
  let listTable = '';

  inputData.list.forEach(element => {
    listTable += `
    <tr class="data-row">
        <td class="fees">${element.fee}</td>
        <td class="revenue-code">${element.revenueCode}</td>
        <td class="amount">₦ ${element.amount}</td>
        <td class="remaining">₦ ${element.remaining}</td>
    </tr>
    `;
  });

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>INVOICE</title>
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
  
        .invoice-number {
          text-align: right;
        }
  
        .file-info {
          height: 2cm;
          font-weight: bolder;
          margin: 10px 0 20px;
        }
  
        .key {
            padding-right: 20px;
          }
  
        .revenue-statement {
          max-height: 2.2cm;
          text-align: justify;
          margin: 10px 0;
        }
  
        .revenue-statement p {
          margin: 2px 0;
        }
  
        .revenue-list {
          
          height: 14.2cm;
          padding: 5px;
          margin: 0.5cm 0;
        }

        .content{
          padding-top: 10px;
        }
  
        .list-table {
          border: 1px solid #000000;
          max-height: 9cm;
          margin-bottom: 10px;
        }
        .head-row {
          display: block;
          border-top: 2px solid #000000;
          border-bottom: 2px solid #000000;
          height: 18px;
          padding: 0;
          border-spacing: 0;
          vertical-align: bottom;
          font-family: Arial, Helvetica, sans-serif;
          text-align: left;
          background: rgba(180, 180, 180, 0.39);
        }
  
        .data-row:nth-child(odd) {
          display: block;
          border-bottom: 1px dashed #000000;
          height: 15px;
          padding: 0;
          margin: 0;
          border-spacing: 0;
          vertical-align: bottom;
          font-family: Arial, Helvetica, sans-serif;
          background: rgba(150, 192, 137, 0.103);
        }
        .data-row:nth-child(even) {
          display: block;
          border-bottom: 1px solid #000000;
          height: 15px;
          padding: 0;
          margin: 0;
          border-spacing: 0;
          vertical-align: bottom;
          font-family: Arial, Helvetica, sans-serif;
        }
  
        .head-row th {
          padding: 0;
          margin: 0;
        }
  
        .data-row td {
          padding: 0;
          margin: 0;
        }
  
        .fees {
          width: 5cm;
        }
        .revenue-code {
          width: 3cm;
        }
        .amount {
          width: 3.6cm;
        }
  
        .remaining {
          width: 4cm;
        }
  
        .text-box {
          margin-bottom: 2px;
          text-align: justify;
        }
  
        .signature-box {
          position: relative;
          padding: 0;
          margin: 15px 0;
        }
  
        .signature,
        .signature-name,
        .signature-remark {
          padding: 0;
          margin: 10px 0;
          font-weight: bolder;
        }
  
        .signature-remark {
          padding-bottom: 15px;
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
            <p class="document-name">INVOICE</p>
          </section>
          <p class="invoice-number">
            <span class="bold">Invoice Number: ${inputData.invoiceNumber}</span>
          </p>
  
          <section class="file-info">
            <table>
              <tr>
                <td class="key">File Number:</td>
                <td>${inputData.fileNumber}</td>
              </tr>
              <tr>
                <td class="key">Name:</td>
                <td>${inputData.applicantName}</td>
              </tr>
              <tr>
                <td class="key">Applicant Address:</td>
                <td>${inputData.applicantAddress}</td>
              </tr>
              <tr>
                <td class="key">Issue Date:</td>
                <td>${inputData.issueDate}</td>
              </tr>
              <tr>
                <td class="key">Phone Number:</td>
                <td>${inputData.phoneNumber}</td>
              </tr>
              <tr>
                <td class="key">Plot Location:</td>
                <td>${inputData.plotLocation}</td>
              </tr>
            </table>
          </section>
  
          <h3 class="content">Dear Sir or Madam,</h3>
          <section class="revenue-statement">
            <p class="content">
              On the day of <span class="bold">${inputData.issueDate}</span> the following
              bill including all fees has been issued to you over the following
              property:
            </p>
            
            <p class="content">
              Plot Number: <span class="bold">${inputData.plotNumber} </span> District / LGA:
              <span class="bold">${inputData.areaDistrict}, ${inputData.plotLGA} </span>Plot Size:
              <span class="bold">${inputData.plotSize}</span>
            </p>
          </section>
  
          <section class="revenue-list">
            <table class="list-table">
              <thead>
                <tr class="head-row">
                  <th class="fees">Fees</th>
                  <th class="revenue-code">Revenue Code</th>
                  <th class="amount">Amount</th>
                  <th class="remaining">Remaining</th>
                </tr>
              </thead>
  
              <tbody>
                ${listTable}
              </tbody>
              <tfoot>
                <tr class="data-row">
                  <td class="fees"><span class="bold">Total</span></td>
                  <td class="revenue-code"></td>
                  <td class="amount"></td>
                  <td class="remaining"><span class="bold">${inputData.totalRemaining} </span></td>
                </tr>
              </tfoot>
            </table>
  
            <section class="revenue-statement">
              <p>
                You are therefore requested to pay the
                <span class="bold">TOTAL</span> of:
                <span class="bold">${inputData.totalRemaining} </span>
              </p>
  
              <p>
                You are also expected to pay this amount at any
                <span class="bold"> any commercial bank</span> into the
                <span class="bold">OYOGIS PAYDirect</span> platform. This invoice
                is valid for 60 days. I take this opportunity to remind you that
                future annual ground rent is payable in advance on or before the
                1st day of January each year without demand, unless otherwise
                officially notified.
              </p>
            </section>
            <section class="signature-box">
              <div class="commissioner-Signature">
                <p class="signature-remark">
                  Yours faithfully
                </p>
                <p class="signature">
                  _______________________________
                </p>
                <p class="signature-name">
                  for: Honorable Commissioner
                </p>
              </div>
            </section>
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
