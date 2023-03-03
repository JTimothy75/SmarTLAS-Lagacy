// module.exports = (fileNumber, applicantName, applicantAddress, term, commencementDate, groundRent, landUse, regNum, page, volume, passportUrl, agency_logoUrl, bengisLogoUrl)
module.exports = inputData => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Deed of Mortgage</title>
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
        font-size: 9pt;
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

      .left-right{
        display: block;
        margin: 20px 0;
        height: 15px;
      }

      .left {
        float: left;
      }

      .right {
        float: right;
      }

      .clear{
        clear: both;
      }

      .deed-statement p {
        text-align: justify;
        line-height: 2em;
        margin: 20px 0;
      }

      .signature-box {
        margin-bottom: 2px;
        display: block;
      }

      .signature {
        width: 200px;
      }

      .signature-space,
      .signature-name,
      .signature-remark {
        padding: 0;
        margin: 10px 0;
        font-weight: bolder;
      }

      .signature-remark {
        padding-bottom: 15px;
      }

      .signature-name {
        text-align: center;
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
              DEED OF MORTGAGE
            </p>
          </section>
        <div class="content left-right">
          <p class="left">
            <span class="description">File Number: </span>
            <span class="bold">${inputData.fileNumber}</span>
          </p>
          <p class="right">Date: <span class="bold">${new Date().toLocaleDateString(
            'en-GB',
            {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }
          )}</span></p>
        </div>

        <section class="clear deed-statement">
          <p>
            Whereas by a Certificate of Occupancy number
            <span class="bold">${
              inputData.cofoNumber
            }</span> , under the hand of the Governor of
            Oyo State, Federal Republic of Nigeria, executed on
            <span class="bold">${inputData.cofoDate}</span> and registered as No
            <span class="bold">${
              inputData.cofoParticulars.regNum
            }</span> at Page
            <span class="bold">${
              inputData.cofoParticulars.page
            }</span> in Volume
            <span class="bold">${
              inputData.cofoParticulars.volume
            }</span> of the Digital Register in the
            OYOGIS Registry office of Oyo State, it was certified that
            <span class="bold">${
              inputData.applicantName
            }</span> whose address is
            <span class="bold">${
              inputData.applicantAddress
            }</span> was/were entitled to a Right of
            Occupancy over the land at
            <span class="bold">${inputData.plotLocation}</span>
            of Oyo State and more particularly described in the schedule to the
            said Certificate of Occupancy.
          </p>

          <p>
            AND WHEREAS the said
            <span class="bold">${inputData.applicantName},</span> has/have
            applied for and received an approval for mortgage with<span
              class="bold"
              >${inputData.mortgagor}.,</span
            >
            and has fulfilled the conditions in the said approval, this
            instrument has been generated to reflect the perfection of the deed
            of mortgage registered as No <span class="bold">${
              inputData.mortgageParticulars.regNum
            }</span> at
            Page <span class="bold">${
              inputData.mortgageParticulars.page
            }</span> in Volume
            <span class="bold">${
              inputData.mortgageParticulars.volume
            }</span> of the Digital Register in the
            OYOGIS Registry Office of Oyo State at ten o'clock in the morning
          </p>
        </section>
        <section class="signature-box">
          <div class="Deed-Registrar-Signature">
            <p class="signature-remark">
              of this ____ day of ______________________
            </p>
            <div class="signature">
              <p class="signature-space">
                ______________________________
              </p>
              <p class="signature-name">
                Deed Registrar
              </p>
            </div>
          </div>
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
