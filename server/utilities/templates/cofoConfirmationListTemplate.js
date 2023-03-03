// module.exports = (fileNumber, applicantName, applicantAddress, term, commencementDate, groundRent, landUse, regNum, page, volume, passportUrl, agency_logoUrl, bengisLogoUrl)
module.exports = inputData => {
  let listTable = '';

  inputData.list.forEach(element => {
    listTable += `
    <tr class="data-row">
        <td class="file-no">${element.fileNumber}</td>
        <td class="owner-name">${element.applicantName}</td>
        <td class="plot">${element.plotNumber}</td>
        <td class="plot-size">${element.plotSize} m <sup>2</sup></td>
        <td class="area-name">${element.areaDistrict}</td>
        <td class="purpose">${element.purpose}</td>
        <td class="outstanding">$ ${element.outstanding}</td>
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
      <title>Ak</title>
      <style>
        * {
          padding: 0;
          margin: 0;
        }
  
        .container {
          position: relative;
          font-size: 7pt;
          font-weight: 400;
          font-family: Arial, Helvetica, sans-serif;
        
          height: 19.2cm;
          width: 26.8cm;
          margin: 0 auto;
        }
  
        .inner-container {
          position: relative;
          font-size: 7pt;
          font-weight: 400;
          font-family: Arial, Helvetica, sans-serif;
          border: solid 1px rgba(236, 235, 235, 0.089);
          height: 19.2cm;
          width: 26.8cm;
        }
  
        #head {
          border-bottom: 2px solid #000000;
          height: 3.6cm;
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
          font-size: 1.6em;
          font-weight: bolder;
          padding: 1px;
          margin: 0;
        }
  
        .agency-name {
          text-align: center;
          font-weight: bolder;
          font-size: 1.4em;
          padding: 1px;
          margin: 0;
        }
  
        .document-name {
          text-align: center;
          font-weight: bolder;
          padding: 2px;
          margin: 0;
        }
  
        .list-table {
          max-height: 11cm;
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
  
        .data-row td {
          padding: 0;
          margin: 0;
        }
        .file-no {
          
          min-width: 3cm;
          padding-left: 5px;
        }
        .owner-name {
          min-width: 7cm;
        }
        .plot {
          min-width: 2.5cm;
        }
        .plot-size {
          min-width: 3cm;
        }
        .area-name {
          min-width: 4.5cm;
        }
        .purpose {
          min-width: 4cm;
        }
        .outstanding {
          width: 3cm;
        }
  
        .signature-box {
            position: absolute;
            bottom: 70px;
            width: 100%;
            border-bottom: 1px solid #000000;
            margin-bottom: 2px;
          }
  
          .commissioner-Signature {
            float: left;
          }
  
          .applicant-Signature {
            float: right;
          }
  
        .signature,
        .date {
          padding: 0;
          margin: 4px;
        }
        .date {
          float: right;
        }
  
        .list-footer {
          position: absolute;
          bottom: 41px;
          width: 100%;
          border-top: 1px solid #000000;
          font-weight: bold;
        }
  
        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 40px;
          }
        
        .agency-logo {
            float: right;
            margin-top: 10px;
          }
    
          #agency-logo-img {
            position: relative;
            display: inline-block;
            border: rgb(0, 0, 0) solid 2px;
            height: 30px;
            width: 100px;
            margin: 2px;
          }
  
          .p1, .file-count {
            display: inline-block;
            float: left;
            margin-top: 10px;
          }
  
          .p2, .list-count {
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
            <table class="list-table">
              <thead>
                <tr class="head-row">
                  <th class="file-no">File No.</th>
                  <th class="owner-name">Owner Name</th>
                  <th class="plot">Plot</th>
                  <th class="plot-size">Size(m<sup>2</sup>)</th>
                  <th class="area-name">Area Name</th>
                  <th class="purpose">Purpose</th>
                  <th class="outstanding">Outstanding</th>
                </tr>
              </thead>
              <tbody>
                ${listTable}
              </tbody>
            </table>
          </section>
          <section class="signature-box">
            <div class="commissioner-Signature">
              <p class="signature">
                Recommended by D.G. (KOGIGIS): ___________________
              </p>
              <p class="date">
                Date: ___________________
              </p>
            </div>
  
            <div class="applicant-Signature">
              <p class="signature">
                approved by Governor's signature: ___________________
              </p>
              <p class="date">
                Date: ___________________
              </p>
            </div>
          </section>
          <section class="list-footer">
            <div class="file-count">
              <p class="signature">
                C of O Confirmation List ${inputData.listCount}
              </p>
            </div>
  
            <div class="list-count">
              <p class="signature">
                Total Count ${inputData.list.length}
              </p>
            </div>
          </section>
  
          <footer>
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
