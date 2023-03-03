// module.exports = (fileNumber, applicantName, applicantAddress, term, commencementDate, groundRent, landUse, regNum, page, volume, passportUrl, agency_logoUrl, bengisLogoUrl)
module.exports = inputData => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Offer Letter</title>
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
        margin: 0.5cm auto;
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

      .offer-terms {
        position: relative;
        list-style: none;
        margin-top: 1.5mm;
      }

      .list {
        padding-left: 0;
        margin-left: 0;
      }

      .term_lists {
        position: relative;
        list-style: none;
        margin-top: 1mm;
        line-height: 12px;
      }

      .list_numbering {
        position: absolute;
        display: inline-block;
        width: 5mm;
        top: 0;
      }

      .list_term {
        display: inline-block;
        padding-left: 5mm;
        text-align: justify;
      }

      .sublist_term {
        display: inline-block;
        padding-left: 6mm;
        text-align: justify;
      }

      .term_sublists {
        position: relative;
        list-style: none;
        padding-left: 5mm;
        margin-top: 1.5mm;
        line-height: 12px;
      }

      .term-key {
        display: inline-block;
        width: 180px;
      }

      .term-margin {
        margin-left: 15px;
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
             OFFER OF GRANT OR RE-GRANT OF STATUTORY RIGHT OF OCCUPANCY
            </p>
          </section>
        <p class="invoice-number">
          <span class="bold">Date: ${new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}</span>
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
              <td>Phone Number:</td>
              <td>${inputData.phoneNumber}</td>
            </tr>
            <tr>
              <td>Offer Date:</td>
              <td>${inputData.offerDate}</td>
            </tr>
          </table>
        </section>

        <section class="offer-terms">
          <ul class="list">
            <li class="term_lists">
              <span class="list_numbering">1</span>
              <span class="list_term">
                1. I am hereby directed to inform the applicant(s) (multiple
                applicants are listed in Schedule B) of the approval of the
                Governor of Oyo State of the grant or re-grant of a right of
                occupancy in respect of Plot No:
                <span class="bold">${
                  inputData.plotNumber
                } </span> having an area of approximately
                <span class="bold">${inputData.plotSize} m2</span> in
                <span class="bold">${inputData.area}</span> of Cadastral Zone
                <span class="bold">${inputData.districtCode}</span> of
                <span class="bold">${inputData.district}</span> within
                <span class="bold">${
                  inputData.plotLGA
                } L.G.A.</span> and described
                by
                <span class="bold"
                  >${inputData.plotLocation},</span
                >
                on the following terms and conditions:
              </span>
              <ul class="list">
                <li class="term_sublists term-margin">
                  <span class="list_numbering">1.1</span>
                  <span class="sublist_term term-key">Premium:</span>
                  <span class="bold right">₦ ${inputData.premium}</span>
                </li>
                <li class="term_sublists term-margin">
                  <span class="list_numbering">1.2</span>
                  <span class="sublist_term term-key"
                    >Ground Rent Rate Per Annum:</span
                  >
                  <span class="bold right">₦ ${inputData.rentRate} /m²</span>
                </li>
                <li class="term_sublists term-margin">
                  <span class="list_numbering">1.3</span>
                  <span class="sublist_term term-key">Compensation:</span>
                  <span class="bold right">₦ ${inputData.compensation}</span>
                </li>
                <li class="term_sublists term-margin">
                  <span class="list_numbering">1.4</span>
                  <span class="sublist_term term-key">Improvement Value:</span>
                  <span class="bold right">₦ ${
                    inputData.improvementValue
                  }</span>
                </li>
                <li class="term_sublists term-margin">
                  <span class="list_numbering">1.5</span>
                  <span class="sublist_term term-key">Land Use/Purpose:</span>
                  <span class="bold right"
                    >${inputData.purposeOfUse}</span
                  >
                </li>
                <li class="term_sublists term-margin">
                  <span class="list_numbering">1.6</span>
                  <span class="sublist_term term-key">Lease Term:</span>
                  <span class="bold right">${inputData.leaseTerm} Years</span>
                </li>
                <li class="term_sublists term-margin">
                  <span class="list_numbering">1.7</span>
                  <span class="sublist_term term-key">Rent Revision:</span>
                  <span class="bold right"
                    >At the discretion of the Governor</span
                  >
                </li>
              </ul>
            </li>

            <li class="term_lists">
              <span class="list_numbering">2</span>
              <span class="list_term"
                >Furthermore, the following conditions shall, in addition to
                other conditions, be included in the Certificate of Occupancy
                evi dencing the grant of this right of occupancy:</span
              >
              <ul class="list">
                <li class="term_sublists">
                  <span class="list_numbering">2.1</span>
                  <span class="sublist_term"
                    >In the case of a vacant plot of land the occupier must,
                    within 36 months from the date of Commencement, erect and
                    complete on the said plot buildings or other works specified
                    in detailed plans that have been approved by the Bureau of
                    Physical Planning and Development Control (BPP & DC) or any
                    other agency empowered to do so.</span
                  >
                </li>
                <li class="term_sublists">
                  <span class="list_numbering">2.2</span>
                  <span class="sublist_term"
                    >In the case of a plot of land with existing structures
                    please note that the right of occupancy does not convey
                    building plan approval. It is the responsibility of the
                    holder of the right of occupancy to obtain building plan
                    approval for existing structures from BPP & DC or any other
                    agency empowered to do so.</span
                  >
                </li>
                <li class="term_sublists">
                  <span class="list_numbering">2.3</span>
                  <span class="sublist_term"
                    >Not to erect or build or permit to be erected or built on
                    the said plot any buildings other than those permitted to be
                    erected by virtue of the land use, nor make or permit to
                    make additions or alterations to the said buildings or
                    existing buildings on the plot except in accordance with
                    plans and specifications approved by the BPP & DC or any
                    other agency empowered to do so.</span
                  >
                </li>
                <li class="term_sublists">
                  <span class="list_numbering">2.4</span>
                  <span class="sublist_term"
                    >Not to alienate the right of occupancy hereby granted or
                    any part thereof by sale, assignment, mortgage, transfer of
                    possession, sublease or bequest, or otherwise howsoever
                    without first obtaining consent from the Governor and the
                    payment of the prescribed fees.</span
                  >
                </li>
                <li class="term_sublists">
                  <span class="list_numbering">2.5</span>
                  <span class="sublist_term"
                    >The Director General OYOGIS or any public officer duly
                    authorized by the Governor shall have the power to enter
                    upon and inspect the land comprised in this right of
                    occupancy or any improvements effected therein at any
                    reasonable hour during the day, and the occupier shall
                    permit and give free access to the Director General (OYOGIS)
                    or any such officer to enter and so inspect.</span
                  >
                </li>
              </ul>
            </li>

            <li class="term_lists">
              <span class="list_numbering">3</span>
              <span class="list_term"
                >This right of occupancy shall commence on the Offer Date
                specified above. You are required to sign and return the
                attached Acceptance Letter within 60 days from the date of this
                offer letter.</span
              >
            </li>

            <li class="term_lists">
              <span class="list_numbering">4</span>
              <span class="list_term"
                >You are required to pay the Initial Bill and other fees and
                charges for the GIS charting, premium, ground rent (for the
                remaining days), preparation, and registration of the
                Certificate of Occupancy. The Initial Bill is attached to this
                offer letter and must be paid within 60 days.</span
              >
            </li>

            <li class="term_lists">
              <span class="list_numbering">5</span>
              <span class="list_term"
                >A breach or failure to comply with any or all of the terms and
                conditions stated herein shall be liable to the withdrawal of
                this offer.</span
              >
            </li>
          </ul>
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
