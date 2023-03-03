// module.exports = (fileNumber, applicantName, applicantAddress, term, commencementDate, groundRent, landUse, regNum, page, volume, passportUrl, agency_logoUrl, bengisLogoUrl)
module.exports = tdpData => {
  let plotDataForTable_1 = '';
  let plotDataForTable_2 = '';
  let table_1_display, table_2_display, line_list_display;

  if (tdpData.plotDataForTable) {
    line_list_display = 'block';

    if (tdpData.plotDataForTable.length > 28) {
      table_1_display = 'float: left';
      table_2_display = 'float: right';
      for (let i = 0; i < 28; i++) {
        const line = tdpData.plotDataForTable[i];
        plotDataForTable_1 += `
      <tr class="data-row">
          <td class="from">${line.from}</td> 
          <td class="bearing">${line.bearing}</td>
          <td class="distance">${line.distance}</td>
          <td class="to">${line.to}</td>
      </tr>`;
      }

      for (let i = 28; i < tdpData.plotDataForTable.length; i++) {
        const line = tdpData.plotDataForTable[i];
        plotDataForTable_2 += `
       <tr class="data-row">
          <td class="from">${line.from}</td>
          <td class="bearing">${line.bearing}</td>
          <td class="distance">${line.distance}</td>
          <td class="to">${line.to}</td>
      </tr>`;
      }
    } else {
      table_1_display = 'display: block';
      table_2_display = 'display: none';
      tdpData.plotDataForTable.forEach(line => {
        plotDataForTable_1 += `
        <tr class="data-row">
            <td class="from">${line.from}</td>
            <td class="bearing">${line.bearing}</td>
            <td class="distance">${line.distance}</td>
            <td class="to">${line.to}</td>
        </tr>`;
      });
    }
  } else {
    line_list_display = 'none';
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
          border: black solid 2px;
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
          height: 4cm;
        }
  
        .state {
          text-align: center;
          color: rgb(255, 0, 0);
          font-size: 1.2em;
          font-weight: bolder;
          padding: 1px;
          margin: 0;
        }
  
        .head-p-big {
          text-align: center;
          font-weight: bolder;
          font-size: 1.1em;
          padding: 1px;
          margin: 0;
        }
  
        .head-p-small {
          text-align: center;
          font-weight: bolder;
          font-size: 1.1em;
          padding: 2px;
          margin: 0;
        }
  
        .signature-box {
          margin-bottom: 2px;
          display: flex;
          justify-content: center;
        }
  
        .signature,
        .signature-name {
          padding: 0;
          margin: 10px;
          font-weight: bolder;
          text-align: center;
        }
  
        .surveyor-gen-Signature {
          padding-top: 15px;
        }
  
        .parcel-container {
          display: block;
          text-align: center;
        }
  
        .parcel {
          width: 14cm;
          height: 10cm;
          font-weight: bolder;
          margin: 10px 1.4cm 20px;
          background-color: rgb(245, 248, 242);
        }
  
        .line-list {
          display: ${line_list_display};
          height: 9.8cm;
          width: 11.2cm;
          padding: 0;
          margin: 0.5cm 0;
          font-size: 0.7em;
          font-family: Arial, Helvetica, sans-serif;
        }
  
        .list-table_1 {
          ${table_1_display};
          max-height: 7cm;
          margin-bottom: 3px;
        }
  
        .list-table_2 {
          ${table_2_display};
          max-height: 7cm;
          margin-bottom: 3px;
          margin-top: 9px;
        }
  
        .head-row {
          display: block;
          border-top: 1px solid #000000;
          border-bottom: 1px solid #000000;
          height: 10px;
          padding: 1px 0 0;
          border-spacing: 0;
          vertical-align: bottom;
          text-align: left;
          background: rgba(180, 180, 180, 0.39);
        }
  
        .data-row:nth-child(odd) {
          display: block;
          border-bottom: 1px dashed #000000;
          height: 10px;
          padding: 1px 0 0;
          margin: 0;
          border-spacing: 0;
          vertical-align: bottom;
          background: rgba(150, 192, 137, 0.103);
        }
        .data-row:nth-child(even) {
          display: block;
          border-bottom: 1px solid #000000;
          height: 10px;
          padding: 1px 0 0;
          margin: 0;
          border-spacing: 0;
          vertical-align: bottom;
        }
  
        .head-row th {
          padding: 0;
          margin: 0;
        }
  
        .data-row td {
          padding: 0;
          margin: 0;
        }
  
        .from,
        .to {
          width: 1.7cm;
        }
        .bearing {
          width: 1cm;
        }
        .distance {
          width: 1cm;
        }
  
        .footer{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100px;
        }
  
        .foot {
          position: absolute;
          bottom: 2px;
          left: 2px;
          font-size: 0.8em;
          margin: 2px;
        }
  
        .note {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 200px;
          font-size: 0.7em;
          margin: 2px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="inner-container">
          <section id="head">
            <p class="state">
              RIGHT OF OCCUPANCY LAND FILE NO: ${tdpData.fileNumber}
            </p>
            <p class="head-p-big">LAND GRANTED TO ${tdpData.ownerName}</p>
            <p class="head-p-small">PLOT NO: ${tdpData.plotNumber}</p>
            <p class="head-p-big">${tdpData.area_district}</p>
            <p class="head-p-small">${tdpData.lga}</p>
            <section class="signature-box">
              <div class="surveyor-gen-Signature">
                <p class="signature">
                  _______________________________
                </p>
                <p class="signature-name">
                  SURVEYOR - GENERAL
                </p>
              </div>
            </section>
          </section>
  
          <section class="parcel-container ">
            <div class="parcel">
            ${tdpData.drawing}
            </div>
            <h4>Scale 1: ${tdpData.drawingScale}</h4>
            <h4>SCHEDULE A: AS DESCRIBED IN GRAPHICS ABOVE</h4>
          </section>
  
          <div class="left-right">
            <div class="tabulation">
              <section class="line-list">
                <table class="list-table_1">
                  <caption>
                    TABULATION
                  </caption>
                  <thead>
                    <tr class="head-row">
                      <th class="from">From</th>
                      <th class="bearing">Bearing</th>
                      <th class="distance">Distance</th>
                      <th class="to">To</th>
                    </tr>
                  </thead>
  
                  <tbody>
                    ${plotDataForTable_1}
                  </tbody>
                </table>
  
                <table class="list-table_2">
                  <caption></caption>
                  <thead>
                    <tr class="head-row">
                      <th class="from">From</th>
                      <th class="bearing">Bearing</th>
                      <th class="distance">Distance</th>
                      <th class="to">To</th>
                    </tr>
                  </thead>
  
                  <tbody>
                    ${plotDataForTable_2}
                  </tbody>
                </table>
              </section>
              
            </div>
            
          </div>
          <div class="footer">
                <section class="foot">
                  <p>
                      CHARTED BY: KOGIGIS ${new Date().toLocaleString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                  <p>
                </section>
    
                <section class="note">
                  <h4>NOTE:</h4>
                  <p>
                      UTM COORDINATES OF ${tdpData.refBeacon.beaconName}
                  </p>
                  <p>
                      N. ${tdpData.refBeacon.northing}
                  </p>
                  <p>
                      E. ${tdpData.refBeacon.easthing}
                  </p>
                  <p>
                      COORDINATE SYSTEM MINNA UTM 31N
                  </p>
                  <p>
                      KOGI SHEET ${tdpData.sheet}
                  </p>
                </section>
            </div>
        </div>
      </div>
    </body>
  </html>
    `;
};
