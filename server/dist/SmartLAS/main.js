(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Software Engineering\project\MEAN\SmartLAS A\src\main.ts */"zUnb");


/***/ }),

/***/ "7hlr":
/*!*******************************************!*\
  !*** ./src/app/smartlis-app.component.ts ***!
  \*******************************************/
/*! exports provided: SmartlisAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartlisAppComponent", function() { return SmartlisAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SmartlisAppComponent {
    constructor() {
        this.title = 'SmartLIS';
    }
}
SmartlisAppComponent.ɵfac = function SmartlisAppComponent_Factory(t) { return new (t || SmartlisAppComponent)(); };
SmartlisAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmartlisAppComponent, selectors: [["smartlis-app"]], decls: 11, vars: 0, consts: [[1, "container"], [1, "container-fixed"], [1, "copyright-container"], [1, "copyright"], [1, "title-subscript"]], template: function SmartlisAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BENGIS-Version 1.0.0 Copyright \u00A9 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Powered by SmarTech Consortium with S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "MART");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    margin-right: 20px;\n    background-color: rgb(21, 33, 88);\n    min-height: 100vh;\n  }\n  .container-fixed[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    height: 4vh;\n    width: 100%;\n    background-color: rgb(4, 12, 49);\n}\n  .copyright-container[_ngcontent-%COMP%] {\n    position: relative;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    margin-left: 20px; margin-right: 20px;\n    font-size: x-small;\n    text-align: center;\n    color: rgb(255, 255, 255);\n}\np[_ngcontent-%COMP%]{margin: 0px;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmartlisAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'smartlis-app',
                templateUrl: './smartlis-app.component.html',
                styles: [`
  .container {
    margin-left: 20px;
    margin-right: 20px;
    background-color: rgb(21, 33, 88);
    min-height: 100vh;
  }
  .container-fixed {
    position: fixed;
    bottom: 0px;
    left: 0px;
    height: 4vh;
    width: 100%;
    background-color: rgb(4, 12, 49);
}
  .copyright-container {
    position: relative;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-left: 20px; margin-right: 20px;
    font-size: x-small;
    text-align: center;
    color: rgb(255, 255, 255);
}
p{margin: 0px;}
  `]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CQE4":
/*!****************************************************************!*\
  !*** ./src/app/mod-file/land-file/Shared/land-file.service.ts ***!
  \****************************************************************/
/*! exports provided: LandFileService, dbfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandFileService", function() { return LandFileService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbfile", function() { return dbfile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LandFileService {
    constructor(http) {
        this.http = http;
        this.cofogen = 'http://localhost:4020/api/v1/generateDoc/CofO';
    }
    getFileDatas() {
        return dbfile;
    }
    getFileData(id) {
        return dbfile.find(file => file.id === id);
    }
    generateCofO(cofoData) {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.cofogen, cofoData, options);
        // .pipe(catchError(this.handleError('generateCofO')))
    }
}
LandFileService.ɵfac = function LandFileService_Factory(t) { return new (t || LandFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LandFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LandFileService, factory: LandFileService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandFileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
const dbfile = [
    {
        id: 10100,
        file: {
            fileNumber: 'BEN 10100',
            applicantName: 'Mr Benjamin Smith',
            applicationDate: '17/02/2019',
            offerCofODate: '18/07/2017',
            phoneNumber: '08012121200',
            remark: '',
            fileAlias: '',
            LGA: 'Markudi',
            batchNo: '1',
            rackNo: '1',
            createDate: '18/02/2019',
            currentLocation: 'Billing',
            fileCondition: 'Open',
            numberOfPages: '22'
        },
        applicantInfo: {
            fileNumber: 'BEN 10100',
            title: 'Mr',
            firstName: 'Benjamin',
            middleName: '',
            familyName: 'Smith',
            dateOfBirth: '03/07/1992',
            occupation: 'Computer Engineer',
            nationality: 'Nigeria',
            stateOfOrigin: 'Kogi',
            originLGA: 'Iyagba East',
            phone1: '08012121200',
            phone2: '08033322332',
            email: 'jaminsmith@gmail.com',
            TIN: '378679009',
            idReferenceNumber: '33875300393',
            passportPhotoUrl: '/img/appli/passport/10100photo.jpg',
            applicantAddressInfo: {
                fileN0: 'BEN 10100',
                houseNo: 'Plot 32',
                streetName: 'Badeck',
                streetExt: 'Close',
                city_town: 'Lokoja',
                country: 'Nigeria',
                po_pmb: '3421',
                C_O: '',
                additionalAddress: ''
            }
        },
        authorisedRepInfo: {
            fileNumber: 'BEN 10100',
            title: 'Mr',
            firstName: 'Kameel',
            middleName: 'Ibrahim',
            familyName: 'Abayomi',
            dateOfBirth: '25/08/1986',
            occupation: 'Accountant',
            nationality: 'Nigeria',
            stateOfOrigin: 'Kogi',
            originLGA: 'Iyagba East',
            phone1: '07087222100',
            phone2: '',
            email: 'kameelibayomi@gmail.com',
            TIN: '544772361',
            idIeferenceNumber: '97833155422',
            passportPhotoUrl: '/img/rep/passport/10100photo.jpg',
            authorisedRepAddressInfo: {
                fileNumber: 'BEN 10100',
                houseNo: 'Plot 32',
                streetName: 'Badeck',
                streetExt: 'Close',
                city_town: 'Lokoja',
                country: 'Nigeria',
                po_pmb: '3421',
                C_O: '',
                additionalAddress: ''
            }
        },
        CertificationInfo: {
            fileNumber: 'BEN 10100',
            recertificationDocument: 'Offer Letter',
            otherCertificates_Documents: '',
            alloteeFullName: 'Mr Benjamin Smith',
            offerCommencementDate: '18/07/2017',
            transactionDocuments: 'Sales Agreement',
            nameOfFormerOwner: 'Mrs Rosemary Basky',
            dateOfTransaction: '16/03/2009',
            documentOfDemarcationSubmitted: 'Survey Plan',
            plotNumber: '17',
            area_DistrictName: 'Paranas',
            streetName: 'Abubakar Road',
            plotState: 'Benue',
            plotLGA: 'Markudi'
        },
        plotInfo: {
            fileNumber: 'BEN 10100',
            landUse: 'Residential',
            purposeOfUse: 'Private Residential',
            plotNumber: '17',
            valueOfImprovement: '',
            timeForDevelopment_Years: '3',
            plotSize: '563.78',
            plotLocationDescription: 'N0. 17 Abubakar Road, Tako area, Paranas, Markudi.'
        },
        paymentInfo: {
            fileNumber: 'BEN 10100',
            application: '',
            GIS_Survey: ''
        },
        feesInfo: {
            fileNumber: 'BEN 10100',
            application: 'Recertification',
            GIS_Survey: '',
            deeds: '',
            groundRent: [
                { amount: '7380', year: 2010, status: 'paid' },
                { amount: '7380', year: 2011, status: 'paid' }
            ]
        },
        parcelGeoInfo: {
            fileNumber: 'BEN 10100',
            landUse: 'Residential',
            purposeOfUse: 'Private Residential',
            allocatedPlotNo: '17',
            allocatedPlotSize: '561.54',
            plotBillingArea: '',
            plotAreaName: 'Tako',
            plotCadzone: '',
            plotDistrict: 'Paranas',
            plotLGA: 'Markudi',
            allocationApprovalDate: '22/03/2019'
        },
        cofoData: {
            fileNumber: 'BEN 10100',
            applicantName: 'Mr Benjamin Smith',
            applicantAddress: 'Plot 32 Badeck Close, Lokoja, Nigeria.',
            term: 99,
            commencementDate: '18/07/2017',
            groundRent: '₦ 7,380',
            landUse: 'Residential (Private Residential)',
            regNum: 56,
            page: 2,
            volume: 1,
            passportUrl: 'dms/BEN 10100/BEN 10100_191202_photo.jpg'
        },
        remarks: {
            fileRemarks: [
                'The parcel require beacon number',
                'The property could not be identified, it will require going to the field'
            ],
            customer: ['The applicatant need to submit three passport Phograph']
        },
        users: [
            { user: 'Timi.John', name: 'Timi John', date: '17/02/2019' },
            { user: 'Blessing.Mark', name: 'Blessing Mark', date: '25/02/2019' }
        ]
    },
    {
        id: 10101,
        file: {
            fileNumber: 'BEN 10101',
            applicantName: 'Mr Udoh Francis',
            applicationDate: '19/02/2019',
            CofODate: '11/07/2010',
            phoneNumber: '08012125555',
            remark: '',
            fileAlias: '',
            LGA: 'Markudi',
            batchNo: '1',
            rackNo: '1',
            createDate: '19/02/2019',
            currentLocation: 'Billing',
            fileCondition: 'Open',
            numberOfPages: '25'
        },
        applicantInfo: {
            fileNumber: 'BEN 10101',
            title: 'Mr',
            firstName: 'Udoh',
            middleName: '',
            familyName: 'Francis',
            dateOfBirth: '08/04/1981',
            occupation: 'Contractor',
            nationality: 'Nigeria',
            stateOfOrigin: 'Benue',
            originLGA: 'Markudi',
            phone1: '08012125555',
            phone2: '',
            email: 'udohfrancis@gmail.com',
            TIN: '563635558',
            idReferenceNumber: '2475294624',
            passportPhotoUrl: '/img/appli/passport/10101photo.jpg',
            applicantAddressInfo: {
                fileN0: 'BEN 10101',
                houseNo: 'Plot 15',
                streetName: 'Katroll',
                streetExt: 'Close',
                city_town: 'Markudi',
                country: 'Nigeria',
                po_pmb: '4856',
                C_O: '',
                additionalAddress: ''
            }
        },
        authorisedRepInfo: {
            fileNumber: 'BEN 10101',
            title: 'Mr',
            firstName: 'Elija',
            middleName: '',
            familyName: 'Chimaroke',
            dateOfBirth: '21/05/1982',
            occupation: 'Lawyer',
            nationality: 'Nigeria',
            stateOfOrigin: 'Enugu',
            originLGA: 'Enugu south',
            phone1: '07087498555',
            phone2: '',
            email: 'elichimaroke@gmail.com',
            TIN: '984296325',
            idIeferenceNumber: '97856655545',
            passportPhotoUrl: '/img/rep/passport/10101photo.jpg',
            authorisedRepAddressInfo: {
                fileNumber: 'BEN 10101',
                houseNo: 'Plot 22',
                streetName: 'kanta',
                streetExt: 'road',
                city_town: 'Markudi',
                country: 'Nigeria',
                po_pmb: '96695',
                C_O: '',
                additionalAddress: ''
            }
        },
        CertificationInfo: {
            fileNumber: 'BEN 10101',
            recertificationDocument: 'Certicate of Occupancy',
            otherCertificates_Documents: '',
            alloteeFullName: 'Mr Udoh Francis',
            offerCommencementDate: '11/07/2010',
            transactionDocuments: 'Sales Agreement',
            nameOfFormerOwner: 'Ms Naomi Abayomi',
            dateOfTransaction: '11/03/2008',
            documentOfDemarcationSubmitted: 'Survey Plan',
            plotNumber: '08',
            area_DistrictName: 'Paranas',
            streetName: 'Abubakar Road',
            plotState: 'Benue',
            plotLGA: 'Markudi'
        },
        plotInfo: {
            fileNumber: 'BEN 10101',
            landUse: 'Residential',
            purposeOfUse: 'Private Residential',
            plotNumber: '08',
            valueOfImprovement: '',
            timeForDevelopment_Years: '3',
            plotSize: '589.28',
            plotLocationDescription: 'N0. 08 Abubakar Road, Tako area, Paranas, Markudi.'
        },
        paymentInfo: {
            fileNumber: 'BEN 10101',
            application: '',
            GIS_Survey: ''
        },
        feesInfo: {
            fileNumber: 'BEN 10101',
            application: 'Recertification',
            GIS_Survey: '',
            deeds: '',
            groundRent: [
                { amount: '8250', year: 2010, status: 'paid' },
                { amount: '8250', year: 2011, status: 'paid' },
                { amount: '8250', year: 2012, status: 'paid' },
                { amount: '8250', year: 2013, status: 'paid' }
            ]
        },
        parcelGeoInfo: {
            fileNumber: 'BEN 10101',
            landUse: 'Residential',
            purposeOfUse: 'Private Residential',
            allocatedPlotNo: '08',
            allocatedPlotSize: '589.02',
            plotBillingArea: '',
            plotAreaName: 'Tako',
            plotCadzone: '',
            plotDistrict: 'Paranas',
            plotLGA: 'Markudi',
            allocationApprovalDate: '22/03/2019'
        },
        remarks: {
            fileRemarks: [
                'The parcel require beacon number',
                'Seven (7) beacon were added to this parcel'
            ],
            customer: ['Applicant invoice is ready']
        },
        users: [
            { user: 'Timi.John', name: 'Timi John', date: '17/02/2019' },
            { user: 'Blessing.Mark', name: 'Blessing Mark', date: '25/02/2019' }
        ]
    },
    {
        id: 10102,
        file: {
            fileNumber: 'BEN 10102',
            applicantName: 'Mrs Omolara Joseph Balogun',
            applicationDate: '17/02/2019',
            CofODate: '04/09/2010',
            phoneNumber: '08084812400',
            remark: '',
            fileAlias: '',
            LGA: 'Markudi',
            batchNo: '1',
            rackNo: '1',
            createDate: '18/02/2019',
            currentLocation: 'GIS Office',
            fileCondition: 'Open',
            numberOfPages: '21'
        },
        applicantInfo: {
            fileNumber: 'BEN 10102',
            title: 'Mrs',
            firstName: 'Omolara',
            middleName: 'Joseph',
            familyName: 'Balogun',
            dateOfBirth: '12/12/1988',
            occupation: 'Trader',
            nationality: 'Nigeria',
            stateOfOrigin: 'Lagos',
            originLGA: 'Ikeja',
            phone1: '08084812400',
            phone2: '08044485152',
            email: 'jomobalogun@gmail.com',
            TIN: '879896582441',
            idReferenceNumber: '956985369265',
            passportPhotoUrl: '/img/appli/passport/10102photo.jpg',
            applicantAddressInfo: {
                fileN0: 'BEN 10102',
                houseNo: 'Plot 06',
                streetName: 'Ichankle',
                streetExt: 'road',
                city_town: 'Markudi',
                country: 'Nigeria',
                po_pmb: '38456',
                C_O: '',
                additionalAddress: ''
            }
        },
        authorisedRepInfo: {
            fileNumber: '',
            title: '',
            firstName: '',
            middleName: '',
            familyName: '',
            dateOfBirth: '',
            occupation: '',
            nationality: '',
            stateOfOrigin: '',
            originLGA: '',
            phone1: '',
            phone2: '',
            email: '',
            TIN: '',
            idIeferenceNumber: '',
            passportPhotoUrl: '',
            authorisedRepAddressInfo: {
                fileNumber: '',
                houseNo: '',
                streetName: '',
                streetExt: '',
                city_town: '',
                country: '',
                po_pmb: '',
                C_O: '',
                additionalAddress: ''
            }
        },
        CertificationInfo: {
            fileNumber: 'BEN 10102',
            recertificationDocument: 'Certicate of Occupancy',
            otherCertificates_Documents: '',
            alloteeFullName: 'Mrs Omolara Joseph Balogun',
            offerCommencementDate: '04/09/2010',
            transactionDocuments: 'Sales Agreement',
            nameOfFormerOwner: 'Mr Andrew Johnson',
            dateOfTransaction: '06/03/2010',
            documentOfDemarcationSubmitted: 'Survey Plan',
            plotNumber: '09',
            area_DistrictName: 'Kachi',
            streetName: 'Beski street Road',
            plotState: 'Benue',
            plotLGA: 'Markudi'
        },
        plotInfo: {
            fileNumber: 'BEN 10102',
            landUse: 'Commercial',
            purposeOfUse: 'Office',
            valueOfImprovement: '',
            timeForDevelopment_Years: '3',
            plotSize: '450.32',
            plotNumber: '09',
            plotLocationDescription: 'N0. 09 Beski street Road, Kachi Abanu, Kachi, Markudi.'
        },
        paymentInfo: {
            fileNumber: 'BEN 10102',
            application: '',
            GIS_Survey: ''
        },
        feesInfo: {
            fileNumber: 'BEN 10102',
            application: 'Recertification',
            GIS_Survey: '',
            deeds: '',
            groundRent: [
                { amount: '5273', year: 2014, status: 'paid' },
                { amount: '5273', year: 2015, status: 'paid' }
            ]
        },
        parcelGeoInfo: {
            fileNumber: 'BEN 10102',
            landUse: 'Commercial',
            purposeOfUse: 'Office',
            allocatedPlotNo: '09',
            allocatedPlotSize: '450.32',
            plotBillingArea: '',
            plotAreaName: 'Kachi Abanu',
            plotCadzone: '',
            plotDistrict: 'Kachi',
            plotLGA: 'Markudi',
            allocationApprovalDate: '22/03/2019'
        },
        cofoData: {
            fileNumber: 'BEN 10102',
            applicantName: 'Mrs Omolara Joseph Balogun',
            applicantAddress: 'Plot 06 Ichankle road, Markudi, Nigeria.',
            term: 99,
            commencementDate: '04/09/2010',
            groundRent: '₦ 5,273',
            landUse: 'Commercial (Office)',
            regNum: 59,
            page: 2,
            volume: 1,
            passportUrl: 'dms/BEN 10102/BEN 10102_191202_photo.jpeg'
        },
        remarks: {
            fileRemarks: [
                'The parcel require beacon number',
                'Seven (7) beacon were added to this parcel',
                ,
            ],
            customer: ['Applicant invoice is ready']
        },
        users: [
            { user: 'Joy.Maxwell', name: 'Joy Maxwell', date: '17/02/2019' },
            { user: 'Blessing.Mark', name: 'Blessing Mark', date: '25/02/2019' }
        ]
    },
    {
        id: 10103,
        file: {
            fileNumber: 'BEN 10103',
            applicantName: 'Ms Aisha Ahmed Sani',
            applicationDate: '27/02/2019',
            CofODate: '01/05/2013',
            phoneNumber: '08098553447',
            remark: '',
            fileAlias: '',
            LGA: 'Markudi',
            batchNo: '1',
            rackNo: '1',
            createDate: '20/02/2019',
            currentLocation: 'GIS Office',
            fileCondition: 'Open',
            numberOfPages: '27'
        },
        applicantInfo: {
            fileNumber: 'BEN 10103',
            title: 'Ms',
            firstName: 'Aisha',
            middleName: 'Ahmed',
            familyName: 'Sani',
            dateOfBirth: '28/05/1990',
            occupation: 'Trader',
            nationality: 'Nigeria',
            stateOfOrigin: 'Benue',
            originLGA: 'Ohimin',
            phone1: '08098553447',
            phone2: '',
            email: 'aisahmedni@gmail.com',
            TIN: '554921453',
            idReferenceNumber: '58585634985',
            passportPhotoUrl: '/img/appli/passport/10103photo.jpg',
            applicantAddressInfo: {
                fileN0: 'BEN 10103',
                houseNo: 'Plot 08',
                streetName: 'Samteik',
                streetExt: 'Crescent',
                city_town: 'Lagos',
                country: 'Nigeria',
                po_pmb: '3552',
                C_O: '',
                additionalAddress: ''
            }
        },
        authorisedRepInfo: {
            fileNumber: 'BEN 10103',
            title: 'Mr',
            firstName: 'Etim',
            middleName: 'Edem',
            familyName: 'Osong',
            dateOfBirth: '18/03/1973',
            occupation: 'Lawyer',
            nationality: 'Nigeria',
            stateOfOrigin: 'Kogi',
            originLGA: 'Iyagba East',
            phone1: '08058412563',
            phone2: '',
            email: 'etimedemosong@gmail.com',
            TIN: '598566555',
            idIeferenceNumber: '6221456355225',
            passportPhotoUrl: '/img/rep/passport/10103photo.jpg',
            authorisedRepAddressInfo: {
                fileNumber: 'BEN 10103',
                houseNo: 'Plot 21',
                streetName: 'Patrol',
                streetExt: 'Street',
                city_town: 'Lokoja',
                country: 'Nigeria',
                po_pmb: '9621',
                C_O: '',
                additionalAddress: ''
            }
        },
        CertificationInfo: {
            fileNumber: 'BEN 10103',
            recertificationDocument: 'Certicate of Occupancy',
            otherCertificates_Documents: '',
            alloteeFullName: 'Ms Aisha Ahmed Sani',
            offerCommencementDate: '01/05/2013',
            transactionDocuments: 'Sales Agreement',
            nameOfFormerOwner: 'Mr Thomas Morgan',
            dateOfTransaction: '07/03/2011',
            documentOfDemarcationSubmitted: 'Survey Plan',
            plotNumber: '09',
            area_DistrictName: 'Tsuwa',
            streetName: 'Ukume Road',
            plotState: 'Benue',
            plotLGA: 'Markudi'
        },
        plotInfo: {
            fileNumber: 'BEN 10103',
            landUse: 'Residential',
            purposeOfUse: 'Private Residential',
            plotNumber: '09',
            valueOfImprovement: '',
            timeForDevelopment_Years: '3',
            plotSize: '568.5',
            plotLocationDescription: 'N0. 09 Ukume Road, Ikan, Tsuwa, Markudi.'
        },
        paymentInfo: {
            fileNumber: 'BEN 10103',
            application: '',
            GIS_Survey: ''
        },
        feesInfo: {
            fileNumber: 'BEN 10103',
            application: 'Recertification',
            GIS_Survey: '',
            deeds: '',
            groundRent: [
                { amount: '6620', year: 2010, status: 'paid' },
                { amount: '6620', year: 2011, status: 'paid' }
            ]
        },
        parcelGeoInfo: {
            fileNumber: 'BEN 10103',
            landUse: 'Residential',
            purposeOfUse: 'Private Residential',
            allocatedPlotNo: '09',
            allocatedPlotSize: '569.08',
            plotBillingArea: '',
            plotAreaName: 'Ikan',
            plotCadzone: '',
            plotDistrict: 'Tsuwa',
            plotLGA: 'Markudi',
            allocationApprovalDate: '22/03/2019'
        },
        remarks: {
            fileRemarks: [
                'The property could not be identified, it will require going to the field'
            ],
            customer: [
                'The applicatant need to submit olr certificate for recertification'
            ]
        },
        users: [
            { user: 'Jonathan.Simeon', name: 'Jonathan Simeon', date: '22/02/2019' },
            { user: 'Joy.Maxwell', name: 'Joy Maxwell', date: '25/02/2019' }
        ]
    },
    {
        id: 10104,
        file: {
            fileNumber: 'BEN 10104',
            applicantName: 'Mr Chukwudi Vincent',
            applicationDate: '05/03/2019',
            CofODate: '11/07/2010',
            phoneNumber: '08099578244',
            remark: '',
            fileAlias: '',
            LGA: 'Markudi',
            batchNo: '2',
            rackNo: '1',
            createDate: '05/03/2019',
            currentLocation: 'Vetting',
            fileCondition: 'Open',
            numberOfPages: '18'
        },
        applicantInfo: {
            fileNumber: 'BEN 10104',
            title: 'Mr',
            firstName: 'Chukwudi',
            middleName: '',
            familyName: 'Vincent',
            dateOfBirth: '03/07/1992',
            occupation: 'Doctor',
            nationality: 'Nigeria',
            stateOfOrigin: 'Enugu',
            originLGA: 'Enugu East',
            phone1: '08099578244',
            phone2: '',
            email: 'vchuks@gmail.com',
            TIN: '358745854',
            idReferenceNumber: '385843877863',
            passportPhotoUrl: '/img/appli/passport/10104photo.jpg',
            applicantAddressInfo: {
                fileN0: 'BEN 10104',
                houseNo: 'Plot 19',
                streetName: 'Halacol',
                streetExt: 'Close',
                city_town: 'Markudi',
                country: 'Nigeria',
                po_pmb: '35469',
                C_O: '',
                additionalAddress: ''
            }
        },
        authorisedRepInfo: {
            fileNumber: '',
            title: '',
            firstName: '',
            middleName: '',
            familyName: '',
            dateOfBirth: '',
            occupation: '',
            nationality: '',
            stateOfOrigin: '',
            originLGA: '',
            phone1: '',
            phone2: '',
            email: '',
            TIN: '',
            idIeferenceNumber: '',
            passportPhotoUrl: '',
            authorisedRepAddressInfo: {
                fileNumber: '',
                houseNo: '',
                streetName: '',
                streetExt: '',
                city_town: '',
                country: '',
                po_pmb: '',
                C_O: '',
                additionalAddress: ''
            }
        },
        CertificationInfo: {
            fileNumber: 'BEN 10104',
            recertificationDocument: 'Certicate of Occupancy',
            otherCertificates_Documents: '',
            alloteeFullName: 'Mr Chukwudi Vincent',
            offerCommencementDate: '06/11/2015',
            transactionDocuments: 'Sales Agreement',
            nameOfFormerOwner: 'Joseph Godswill',
            dateOfTransaction: '09/04/2007',
            documentOfDemarcationSubmitted: 'Survey Plan',
            plotNumber: '24',
            area_DistrictName: 'Ubebe',
            streetName: 'Kajumi Close',
            plotState: 'Benue',
            plotLGA: 'Markudi'
        },
        plotInfo: {
            fileNumber: 'BEN 10104',
            landUse: 'Commercial',
            purposeOfUse: 'Hotel',
            plotNumber: '24',
            valueOfImprovement: '',
            timeForDevelopment_Years: '3',
            plotSize: '574.38',
            plotLocationDescription: 'N0. 24 Kajumi Close, Eyare, Ubebe, Markudi.'
        },
        paymentInfo: {
            fileNumber: 'BEN 10104',
            application: '',
            GIS_Survey: ''
        },
        feesInfo: {
            fileNumber: 'BEN 10104',
            application: 'Recertification',
            GIS_Survey: '',
            deeds: '',
            groundRent: [
                { amount: '11205', year: 2010, status: 'paid' },
                { amount: '11205', year: 2011, status: 'paid' },
                { amount: '11205', year: 2012, status: 'paid' }
            ]
        },
        parcelGeoInfo: {
            fileNumber: 'BEN 10104',
            landUse: 'Commercial',
            purposeOfUse: 'Hotel',
            allocatedPlotNo: '24',
            allocatedPlotSize: '574.38',
            plotBillingArea: '',
            plotAreaName: 'Eyare',
            plotCadzone: '',
            plotDistrict: 'Ubebe',
            plotLGA: 'Markudi',
            allocationApprovalDate: '22/03/2019'
        },
        remarks: {
            fileRemarks: [
                'The parcel require beacon number',
                'The property could not be identified, it will require going to the field'
            ],
            customer: ['Applicant is needed for interview']
        },
        users: [
            { user: 'Timi.John', name: 'Timi John', date: '08/02/2019' },
            { user: 'Mohammed.Iliya', name: 'Mohammed Iliya', date: '10/02/2019' }
        ]
    }
];


/***/ }),

/***/ "Df1Z":
/*!*********************************************!*\
  !*** ./src/app/mod-shared/shared.module.ts ***!
  \*********************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _errors_404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors/404.component */ "lpwa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class ShareModule {
}
ShareModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShareModule });
ShareModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShareModule_Factory(t) { return new (t || ShareModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShareModule, { declarations: [_errors_404_component__WEBPACK_IMPORTED_MODULE_1__["Error404Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_errors_404_component__WEBPACK_IMPORTED_MODULE_1__["Error404Component"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                declarations: [
                    _errors_404_component__WEBPACK_IMPORTED_MODULE_1__["Error404Component"],
                ],
                providers: [],
                exports: [
                    _errors_404_component__WEBPACK_IMPORTED_MODULE_1__["Error404Component"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "P76m":
/*!**********************************************************!*\
  !*** ./src/app/smartlis-home/smartlis-home.component.ts ***!
  \**********************************************************/
/*! exports provided: SmartlisHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartlisHomeComponent", function() { return SmartlisHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mod_file_land_file_Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mod-file/land-file/Shared/land-file.service */ "CQE4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nav_app_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/app-navbar.component */ "SKuL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a1) { return ["/file/landfile", a1]; };
function SmartlisHomeComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, data_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.file.fileNumber, " ");
} }
class SmartlisHomeComponent {
    constructor(landfileservice, route) {
        this.landfileservice = landfileservice;
        this.route = route;
    }
    ngOnInit() {
        this.fileData = this.landfileservice.getFileDatas();
    }
}
SmartlisHomeComponent.ɵfac = function SmartlisHomeComponent_Factory(t) { return new (t || SmartlisHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mod_file_land_file_Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__["LandFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SmartlisHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmartlisHomeComponent, selectors: [["ng-component"]], decls: 3, vars: 1, consts: [["class", "file_list", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "file_list", 3, "routerLink"]], template: function SmartlisHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SmartlisHomeComponent_section_2_Template, 2, 4, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fileData);
    } }, directives: [_nav_app_navbar_component__WEBPACK_IMPORTED_MODULE_3__["AppNavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".file_list[_ngcontent-%COMP%] {\r\n    background-color: rgb(88, 141, 187);\r\n    margin: 10px;\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc21hcnRsaXMtaG9tZS9zbWFydGxpcy1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zbWFydGxpcy1ob21lL3NtYXJ0bGlzLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlX2xpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAxNDEsIDE4Nyk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmartlisHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // selector: 'home',
                templateUrl: './smartlis-home.component.html',
                styleUrls: ['./smartlis-home.component.css']
            }]
    }], function () { return [{ type: _mod_file_land_file_Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__["LandFileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "SKuL":
/*!*********************************************!*\
  !*** ./src/app/nav/app-navbar.component.ts ***!
  \*********************************************/
/*! exports provided: AppNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavBarComponent", function() { return AppNavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return { exact: true }; };
class AppNavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppNavBarComponent.ɵfac = function AppNavBarComponent_Factory(t) { return new (t || AppNavBarComponent)(); };
AppNavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppNavBarComponent, selectors: [["app-navbar"]], decls: 79, vars: 4, consts: [[1, "nav"], [1, "navbar"], [1, "navList-left"], [1, "drop-down-toggle"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["href", "", "routerLinkActive", "active", "routerLinkActive", "active"], [1, "drop-down"], ["href", ""], ["href", "", "routerLinkActive", "active"], [1, "navList-right"], [1, "user-welcome"]], template: function AppNavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Search File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Search User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Approval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "C of O Approval List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Allocation Approval List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "DMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Printed Approval List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Signed Approval List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Registry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Deed Registry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Admin Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Manage User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Customer Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Call Centre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Queue System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "JTimothy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".nav[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: rgb(4, 12, 49);\r\n  height: 50px;\r\n  width: 100%;\r\n}\r\n\r\n  .navbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    max-height: 50px;\r\n    width: 100%;\r\n  }\r\n\r\n  .navList-left[_ngcontent-%COMP%] {\r\n      float: left;\r\n      margin-top: 0;\r\n    }\r\n\r\n  .navList-right[_ngcontent-%COMP%] {\r\n      float: right;\r\n      padding-right: 30px;\r\n      list-style: none;\r\n      margin: 0;\r\n    }\r\n\r\n  .navList-left[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .navList-right[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n        float: left;\r\n        padding-right: 10px;\r\n        padding-left: 10px;\r\n        padding-top: 20px;\r\n        list-style: none;\r\n        height: 30px;\r\n      }\r\n\r\n  .navList-left[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover, .navList-right[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover {\r\n          background-color: rgb(1, 4, 20);\r\n        }\r\n\r\n  .navList-left[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .navList-right[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n            color: rgb(177, 184, 196);\r\n            text-decoration: none;\r\n            height: 30px;\r\n            position: relative;\r\n            display: block;\r\n          }\r\n\r\n  .navList-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .navList-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n              color: rgb(255, 255, 255);\r\n            }\r\n\r\n  .user-welcome[_ngcontent-%COMP%] {\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n  li[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%] {\r\n  color: rgb(231, 25, 94) !important;\r\n}\r\n\r\n  .drop-down[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 5;\r\n  display: none;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  padding-bottom: 5px;\r\n  background-color: rgb(55, 74, 158);\r\n  border: rgb(1, 4, 20) solid 2px;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  transform: translateX(-10px);\r\n}\r\n\r\n  .drop-down-toggle[_ngcontent-%COMP%]:hover   .drop-down[_ngcontent-%COMP%], .drop-down-toggle[_ngcontent-%COMP%]:active   .drop-down[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n  .drop-down[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      clear: both;\r\n      padding-top: 5px;\r\n      padding-right: 5px;\r\n      padding-left: 5px;\r\n      width: 100%;\r\n      list-style: none;\r\n      transform: translateX(-5px);\r\n      text-align: left;\r\n    }\r\n\r\n  .drop-down[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n        background-color: rgb(180, 188, 221);\r\n      }\r\n\r\n  .drop-down[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n          text-decoration: none;\r\n        }\r\n\r\n  .drop-down[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n            color: rgb(3, 18, 85);\r\n          }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2FwcC1uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7RUFFRTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVFO01BQ0UsV0FBVztNQUNYLGFBQWE7SUFDZjs7RUFFQTtNQUNFLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLFNBQVM7SUFDWDs7RUFFRTs7UUFFRSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLFlBQVk7TUFDZDs7RUFFRTs7VUFFRSwrQkFBK0I7UUFDakM7O0VBRUU7O1lBRUUseUJBQXlCO1lBQ3pCLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGNBQWM7VUFDaEI7O0VBRUU7O2NBRUUseUJBQXlCO1lBQzNCOztFQUVaO0VBQ0UseUJBQXlCO0FBQzNCOztFQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLDRCQUE0QjtBQUM5Qjs7RUFFRTs7SUFFRSxjQUFjO0VBQ2hCOztFQUVFO01BQ0UsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsMkJBQTJCO01BQzNCLGdCQUFnQjtJQUNsQjs7RUFFRTtRQUNFLG9DQUFvQztNQUN0Qzs7RUFFRTtVQUNFLHFCQUFxQjtRQUN2Qjs7RUFFRTtZQUNFLHFCQUFxQjtVQUN2QiIsImZpbGUiOiJzcmMvYXBwL25hdi9hcHAtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQsIDEyLCA0OSk7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgICAubmF2TGlzdC1sZWZ0IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdkxpc3QtcmlnaHQge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAgIC5uYXZMaXN0LWxlZnQ+bGksXHJcbiAgICAgIC5uYXZMaXN0LXJpZ2h0PmxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgICAubmF2TGlzdC1sZWZ0PmxpOmhvdmVyLFxyXG4gICAgICAgIC5uYXZMaXN0LXJpZ2h0PmxpOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxLCA0LCAyMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYXZMaXN0LWxlZnQ+bGk+YSxcclxuICAgICAgICAgIC5uYXZMaXN0LXJpZ2h0PmxpPmEge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE3NywgMTg0LCAxOTYpO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXZMaXN0LWxlZnQgbGk6aG92ZXIgYSxcclxuICAgICAgICAgICAgLm5hdkxpc3QtcmlnaHQgbGk6aG92ZXIgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuLnVzZXItd2VsY29tZSB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxubGk+YS5hY3RpdmUge1xyXG4gIGNvbG9yOiByZ2IoMjMxLCAyNSwgOTQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wLWRvd24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA1O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA3NCwgMTU4KTtcclxuICBib3JkZXI6IHJnYigxLCA0LCAyMCkgc29saWQgMnB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XHJcbn1cclxuXHJcbiAgLmRyb3AtZG93bi10b2dnbGU6aG92ZXIgLmRyb3AtZG93bixcclxuICAuZHJvcC1kb3duLXRvZ2dsZTphY3RpdmUgLmRyb3AtZG93biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICAgLmRyb3AtZG93biBsaSB7XHJcbiAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgICAgLmRyb3AtZG93biBsaTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMTg4LCAyMjEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAgIC5kcm9wLWRvd24gYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kcm9wLWRvd24gbGk6aG92ZXIgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMywgMTgsIDg1KTtcclxuICAgICAgICAgIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppNavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './app-navbar.component.html',
                styleUrls: ['./app-navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _mod_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mod-shared/shared.module */ "Df1Z");
/* harmony import */ var _smartlis_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smartlis-app.component */ "7hlr");
/* harmony import */ var _nav_app_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/app-navbar.component */ "SKuL");
/* harmony import */ var _smartlis_home_smartlis_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smartlis-home/smartlis-home.component */ "P76m");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "a4+m");
/* harmony import */ var _mod_file_land_file_Shared_land_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mod-file/land-file/Shared/land-file.service */ "CQE4");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_smartlis_app_component__WEBPACK_IMPORTED_MODULE_5__["SmartlisAppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_mod_file_land_file_Shared_land_file_service__WEBPACK_IMPORTED_MODULE_9__["LandFileService"],], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_8__["appRoutes"]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _mod_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_smartlis_app_component__WEBPACK_IMPORTED_MODULE_5__["SmartlisAppComponent"],
        _nav_app_navbar_component__WEBPACK_IMPORTED_MODULE_6__["AppNavBarComponent"],
        _smartlis_home_smartlis_home_component__WEBPACK_IMPORTED_MODULE_7__["SmartlisHomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _mod_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _smartlis_app_component__WEBPACK_IMPORTED_MODULE_5__["SmartlisAppComponent"],
                    _nav_app_navbar_component__WEBPACK_IMPORTED_MODULE_6__["AppNavBarComponent"],
                    _smartlis_home_smartlis_home_component__WEBPACK_IMPORTED_MODULE_7__["SmartlisHomeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_8__["appRoutes"]),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _mod_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"]
                ],
                providers: [_mod_file_land_file_Shared_land_file_service__WEBPACK_IMPORTED_MODULE_9__["LandFileService"],],
                bootstrap: [_smartlis_app_component__WEBPACK_IMPORTED_MODULE_5__["SmartlisAppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a4+m":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _smartlis_home_smartlis_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smartlis-home/smartlis-home.component */ "P76m");
/* harmony import */ var _mod_shared_errors_404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mod-shared/errors/404.component */ "lpwa");


const appRoutes = [
    { path: 'home', component: _smartlis_home_smartlis_home_component__WEBPACK_IMPORTED_MODULE_0__["SmartlisHomeComponent"] },
    {
        path: 'file',
        loadChildren: () => __webpack_require__.e(/*! import() | mod-file-file-module */ "mod-file-file-module").then(__webpack_require__.bind(null, /*! ./mod-file/file.module */ "zT0s")).then(m => m.FileModule)
    },
    {
        path: 'user',
        loadChildren: () => __webpack_require__.e(/*! import() | mod-user-user-module */ "mod-user-user-module").then(__webpack_require__.bind(null, /*! ./mod-user/user.module */ "m70h")).then(m => m.UserModule)
    },
    //   { path: 'user', loadChildren: './mod-user/user.module#UserModule' },
    { path: '404', component: _mod_shared_errors_404_component__WEBPACK_IMPORTED_MODULE_1__["Error404Component"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
    // { path: '',redirectTo: 'user/login', pathMatch: 'full' },
];


/***/ }),

/***/ "lpwa":
/*!****************************************************!*\
  !*** ./src/app/mod-shared/errors/404.component.ts ***!
  \****************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


// <app-navbar > </app-navbar>
class Error404Component {
    constructor() {
    }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(); };
Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["ng-component"]], decls: 2, vars: 0, consts: [[1, "errorMessage"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404'd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".errorMessage[_ngcontent-%COMP%] { \n      margin-top: 0px; \n      font-size: 170px;\n      text-align: center; \n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
    
    <h1 class="errorMessage">404'd</h1>
  `,
                styles: [`
    .errorMessage { 
      margin-top: 0px; 
      font-size: 170px;
      text-align: center; 
    }`]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map