import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LandFileService {
  private cofogen = 'http://localhost:4020/api/v1/generateDoc/CofO';

  constructor(private http: HttpClient) {}

  getFileDatas() {
    return dbfile;
  }

  getFileData(id: number) {
    return dbfile.find(file => file.id === id);
  }

  generateCofO(cofoData) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.cofogen, cofoData, options);
    // .pipe(catchError(this.handleError('generateCofO')))
  }
}

export const dbfile = [
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
      plotLocationDescription:
        'N0. 17 Abubakar Road, Tako area, Paranas, Markudi.'
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
      plotLocationDescription:
        'N0. 08 Abubakar Road, Tako area, Paranas, Markudi.'
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
      plotLocationDescription:
        'N0. 09 Beski street Road, Kachi Abanu, Kachi, Markudi.'
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
