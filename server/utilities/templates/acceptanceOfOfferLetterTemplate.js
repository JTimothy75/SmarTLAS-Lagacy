// module.exports = (fileNumber, applicantName, applicantAddress, term, commencementDate, groundRent, landUse, regNum, page, volume, passportUrl, agency_logoUrl, bengisLogoUrl)
module.exports = inputData => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>
      letter of acceptance of offer of grant or regrant of right of occupancy
    </title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }

      .bold {
        font-weight: bolder;
      }

      .left{
        float: left;
      }

      .center{
        display: inline-block;
        text-align: center;
        width: 150px;
      }

      .right{
        float: right;
      }

      .space {
        display: block;
      }
      .align-center {
        text-align: center;
        text-decoration: underline;
        margin-top: 5px;
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

      .header {
        display: block;
      }

      .photo {
        width: 130px;
        height: 150px;
        border: solid 2px rgb(0, 0, 0);
        margin: 15px 0;
        padding-top: 20px;
        font-size: 0.8em;
        float: left;
      }

      .photo p {
        text-align: center;
        margin: 10px 0;
        margin-top: 5px;
      }

      .file-info {
        font-weight: bolder;
        margin: 10px 0 20px;
        float: right;
      }

      .clear{
        clear: both;
      }

      .file-info table tr td {
        padding: 5px 0;
      }

      .address-head-key {
        width: 4cm;
      }

      .letter-statement {
        max-height: 2.2cm;
        text-align: justify;
        margin: 10px 0;
      }

      .letter-statement p {
        margin: 2px 0;
      }

      .letter-list {
        margin: 0.5cm 0;
      }

      .list-table {
        max-height: 9cm;
        margin-bottom: 3px;
        padding: 25px;
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
        min-width: 3.8cm;
        max-width: 3.8cm;
      }
      .key-values {
        min-width: 4cm;
        max-width: 4cm;
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
        <section class="header">
          <section class="photo">
            <p>Individual Applicant</p>
            <p>
              Please attach 1 Passport Picture for your CofO here carefully at
              the edge of the photo
            </p>
            <p>Don't pin the face!!</p>
          </section>
          <section class="file-info">
            <table>
              <tr>
                <td class="address-head-key">Contact Address:</td>
                <td class="address-head-value">
                  ____________________________________
                </td>
              </tr>
              <tr>
                <td class="address-head-key"></td>
                <td class="address-head-value">
                  ____________________________________
                </td>
              </tr>
              <tr>
                <td class="address-head-key"></td>
                <td class="address-head-value">
                  ____________________________________
                </td>
              </tr>
              <tr>
                <td class="address-head-key"></td>
                <td class="address-head-value">
                  ____________________________________
                </td>
              </tr>
              <tr>
                <td class="address-head-key"></td>
                <td class="address-head-value">
                  ____________________________________
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td class="address-head-key">Mobile Phone 1:</td>
                <td class="address-head-value">
                  ____________________________________
                </td>
              </tr>
              <tr>
                <td class="address-head-key">Mobile Phone 2:</td>
                <td class="address-head-value">
                  ____________________________________
                </td>
              </tr>
              <tr>
                <td class="address-head-key">E-mail:</td>
                <td class="address-head-value">
                  ____________________________________
                </td>
              </tr>
              <tr>
                <td class="address-head-key">TIN:</td>
                <td class="address-head-value">
                  ____________________________________
                </td>
              </tr>
              <tr>
                <td class="address-head-key">NIN:</td>
                <td class="address-head-value">
                  ____________________________________
                </td>
              </tr>
              <tr>
                <td class="address-head-key">Date:</td>
                <td class="address-head-value">
                  ________/____________/_______________
                </td>
              </tr>
              <tr>
                <td class="address-head-key"></td>
                <td class="space address-head-value">
                  <span class="left"> DD </span> <span class="center"> MM </span> <span class="right">YYYY</span>
                </td>
              </tr>
            </table>
          </section>
        </section>

        <h3 class="clear">The Governor,</h3>
        <h3>Oyo State, Nigeria</h3>
        <h3>Sir</h3>
        <h3 class="align-center">
          LETTER OF ACCEPTANCE OF OFFER OF GRANT OR RE-GRANT OF RIGHT OF
          OCCUPANCY
        </h3>
        <h3 class="align-center">
          IN KOGI STATE OF NIGERIA
        </h3>
        <section class="letter-statement">
          <p class="content">
            I wish to refer to your offer of grant of Right of Occupancy dated
            ${inputData.cofoDate} in respect of the plot with the particulars below:
          </p>
        </section>

        <section class="letter-list">
          <table class="list-table">
            <tbody>
              <tr class="data-particulars">
                <td class="key">File Number:</td>
                <td class="key-values bold">${inputData.fileNumber}</td>
              </tr>
              <tr class="data-particulars">
                <td class="key">Plot Number:</td>
                <td class="key-values bold">${inputData.plotNumber}</td>
              </tr>
              <tr class="data-particulars">
                <td class="key">Plot Size:</td>
                <td class="key-values bold">${inputData.plotSize} m <sup>2</sup></td>
              </tr>
              <tr class="data-particulars">
                <td class="key">District Code:</td>
                <td class="key-values bold">${inputData.districtCode}</td>
              </tr>
              <tr class="data-particulars">
                <td class="key">Local Gov. Area:</td>
                <td class="key-values bold">${inputData.plotLGA}</td>
              </tr>
              <tr class="data-particulars">
                <td class="key">District:</td>
                <td class="key-values bold">${inputData.district}</td>
              </tr>
              <tr class="data-particulars">
                <td class="key">Area Name:</td>
                <td class="key-values bold">${inputData.area}</td>
              </tr>
              <tr class="data-particulars">
                <td class="key">Location:</td>
                <td class="bold" colspan="3">${inputData.plotLocation}</td>
              </tr>
            </tbody>
          </table>

          <section class="letter-statement">
            <p>
              and to state that I accept the offer and the terms and conditions
              therein as conveyed to me in the offer letter under reference.
            </p>
            <p>
              In addition, I agree to keep the Governor informed of any change
              in my contact details for the duration of the lease term.
            </p>
          </section>

          <section class="signature-box">
            <div class="applicant-Signature">
              <p class="signature-remark">
                Yours faithfully
              </p>
              <p class="signature">
                _______________________________
              </p>
              <p class="signature-name">
                ${inputData.applicantName}
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
