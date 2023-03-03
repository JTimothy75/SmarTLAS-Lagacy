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
    <title>Approval-for-mortgage</title>
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
        height: 26.5cm;
        width: 17cm;
        margin: 0.5cm auto;
      }

      .inner-container {
        position: relative;
        font-size: 8.5pt;
        font-weight: 400;
        font-family: Arial, Helvetica, sans-serif;
        height: 26.5cm;
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
        margin: 10px 0 20px;
      }

      .revenue-statement {
        max-height: 2.2cm;
        text-align: justify;
        margin: 10px 0;
      }

      .revenue-statement p {
        margin: 2px 0;
      }
      .revenue-statement ol {
        margin: 2px 0 2px 15px;
      }

      .revenue-list {
        height: 14.2cm;
        padding: 5px;
        margin: 0.5cm 0;
      }

      .list-table {
        max-height: 9cm;
        margin-bottom: 3px;
      }

      .info-table {
        border: 1px solid #000000;
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

      .data-particulars {
        display: block;
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

      .key {
        min-width: 4cm;
        max-width: 4cm;
      }
      .big-key-values {
        min-width: 12.5cm;
        max-width: 12.5cm;
      }

      .small-key-values {
        min-width: 12.5cm;
        max-width: 12.5cm;
      }

      .fees {
        width: 5.6cm;
      }
      .revenue-code {
        width: 3cm;
      }
      .amount {
        width: 4cm;
      }

      .remaining {
        width: 4cm;
      }

      .text-box {
        margin-bottom: 2px;
        text-align: justify;
      }

      .signature-box {
        margin-bottom: 2px;
        display: block;
      }

      .signature,
      .signature-name,
      .signature-remark {
        padding: 0;
        margin: 10px;
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
            <p class="document-name">
              APPROVAL FOR MORTGAGE
            </p>
          </section>

        <section class="file-info">
          <table>
            <tr>
              <td>File Number:</td>
              <td>${inputData.fileNumber}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>${inputData.applicantName}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>${inputData.applicantAddress}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>${new Date().toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}</td>
            </tr>
          </table>
        </section>

        <h3>Dear Sir or Madam,</h3>
        <section class="revenue-statement">
          <p class="content">
            Reference to your application for mortgage, I hereby convey to you
            the approval with the particulars shown below:
          </p>
        </section>

        <section class="revenue-list">
          <table class="list-table info-table">
            <tbody>
              <tr class="data-particulars">
                <td class="key">Mortgagee:</td>
                <td class="big-key-values bold">
                  ${inputData.mortgagor}
                </td>
              </tr>
              <tr class="data-particulars">
                <td class="key">Consideration:</td>
                <td class="small-key-values bold">₦ ${
                  inputData.consideration
                }</td>
              </tr>
              <tr class="data-particulars">
                <td class="key">Approval Date:</td>
                <td class="big-key-values bold">${inputData.approvalDate}</td>
              </tr>
              <tr class="data-particulars">
                <td class="key">Expiration Date:</td>
                <td class="small-key-values bold">${
                  inputData.approvalExpireDate
                }</td>
              </tr>
            </tbody>
          </table>

          <section class="revenue-statement">
            <p>
              The rent and fees payable are made up as follows
            </p>
          </section>
          <table class="list-table">
            <thead>
              <tr class="head-row">
                <th class="fees">Fees</th>
                <th class="revenue-code">Revenue Code</th>
                <th class="amount">Amount</th>
                <th class="remaining">Remaining</th>
              </tr>
            </thead>

             ${listTable}

            <tfoot>
              <tr class="data-row">
                <td class="fees"><span class="bold">Total</span></td>
                <td class="revenue-code"></td>
                <td class="amount"></td>
                <td class="remaining"><span class="bold">₦ 5,190.53 </span></td>
              </tr>
            </tfoot>
          </table>

          <section class="revenue-statement">
            <p>
              The approval is subject to the following conditions:
            </p>

            <ol>
              <li>
                Submission of satisfactory deed of mortgage duly executed,
                sealed, and delivered before the expiration date specified
                above.
              </li>
              <li>
                Payment of the amount specified above into the OYOGIS PAYDirect
                platform prior to the registration of the deed.
              </li>
              <li>
                For any additional consideration, approval must be sought for
                and obtained.
              </li>
              <li>
                If the deed is not received within the specified period and the
                total amount duly paid, the approval herein conveyed shall
                automatically lapse.
              </li>
            </ol>
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
