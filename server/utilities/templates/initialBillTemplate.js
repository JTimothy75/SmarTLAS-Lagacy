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
    <title>INITIAL BILL</title>
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
        padding: 10px 0;
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

      .revenue-list {
        height: 14.2cm;
        padding: 5px;
        margin: 0.5cm 0;
      }

      .list-table {
        max-height: 9cm;
        margin-bottom: 3px;
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
        /* border-bottom: 1px solid #000000; */
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
      .key-values {
        min-width: 4.3cm;
        max-width: 4.3cm;
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
            <p class="document-name">
              ACKNOWLEDGEMENT OF APPLICATION FOR RECERTIFICATION
            </p>
          </section>
        <p class="invoice-number">
          <span class="bold">Invoice Number: ${inputData.invoiceNumber}</span>
        </p>

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
              <td>Issue Date:</td>
              <td>${inputData.issueDate}</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>${inputData.phoneNumber}</td>
            </tr>
          </table>
        </section>

        <h3>Dear Sir or Madam,</h3>
        <section class="revenue-statement">
          <p class="content">
            You may wish to please refer to the offer of right of occupancy
            granted in your favour with the particulars shown below:
          </p>
        </section>

        <section class="revenue-list">
          <table class="list-table">
            <tbody>
              <tr class="data-particulars">
                <td class="key">Plot Number:</td>
                <td class="key-values bold">${inputData.plotNumber}</td>
                <td class="key">Plot Size:</td>
                <td class="key-values bold">${inputData.plotSize} m <sup>2</sup></td>
              </tr>
              <tr class="data-particulars">
                <td class="key">District:</td>
                <td class="key-values bold">${inputData.district}</td>
                <td class="key">Rent Rate:</td>
                <td class="key-values bold">₦ ${inputData.rentRate} /m<sup>2</sup></td>
              </tr>
              <tr class="data-particulars">
                <td class="key">Lease Term:</td>
                <td class="key-values bold">${inputData.leaseTerm} Years</td>
                <td class="key">Rent per Annum:</td>
                <td class="key-values bold">₦ ${inputData.groundRent}</td>
              </tr>
              <tr class="data-particulars">
                <td class="key">Offer Date:</td>
                <td class="key-values bold">22-Jul-2019</td>
                <td class="key">General Land Use:</td>
                <td class="key-values bold">${inputData.landUse}</td>
              </tr>
              <tr class="data-particulars">
                <td class="key">This Offer Expires:</td>
                <td class="key-values bold">${inputData.offerExpires}</td>
                <td class="key">Purpose of Use:</td>
                <td class="key-values bold">${inputData.purposeOfUse}</td>
              </tr>
              <tr class="data-particulars">
                <td class="key">Plot Location or Address:</td>
                <td class="bold" colspan="3">${inputData.plotLocation}</td>
                <td></td>
                <td></td>
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
                <td class="remaining"><span class="bold">₦ ${inputData.totalRemaining} </span></td>
              </tr>
            </tfoot>
          </table>

          <section class="revenue-statement">
            <p>
              Payment of this Initial Bill must be made within 60 days of issue
              at <span class="bold"> any commercial bank</span> into the
              <span class="bold">OYOGIS PAYDirect</span> platform.
            </p>

            <p>
              The Certificate of Occupancy which confirms your right of
              occupancy will not be conveyed until the amount due to the Oyo
              State Government is paid. I take this opportunity to remind you
              that future annual ground rent is payable in advance on or before
              the 1st day of January each year without demand, unless otherwise
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
