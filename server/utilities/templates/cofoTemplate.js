// module.exports = (fileNumber, applicantName, applicantAddress, term, commencementDate, groundRent, landUse, regNum, page, volume, passportUrl, agency_logoUrl, bengisLogoUrl)
module.exports = cofoData => {
  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- <link rel="stylesheet" href="index.css"> -->

    <style>
        .signature{
    margin-top: 15px;
}

.justify{
    text-align: justify;
}

.center{
    text-align: center;
}

.bold{
    font-weight: bolder;
}

#cofo{
    position: relative;
    font-size: 7pt;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    border: solid 2px;
    height: 24.8cm;
    width: 16cm;
    padding: 4mm;
    margin: 0 auto;
}

    #cofo_header{
        height: 120px;
    }

        #logo_state{
            float: left;
        }


        .cofo_hd_info_lines{
            font-weight: bolder !important;
            display: block;
            text-align: center;
            font-size: 8pt;
            line-height: 15px;
        }

        #passport_photo{
            float: right;
        }






#cofo_info{
    position: relative;
    float: none;
}

    #holder_info{
        position: relative;
    }

        .holder_info_list{
            position: relative;
            list-style: none;
            margin-top: 1.5mm;
        }

    #term_info{
        position: relative;
    }

    .terms_intro{
        text-align: justify;
        line-height: 12px;
    }

    .list{
        padding-left: 0;
        margin-left: 0;
    }

        .term_lists{
            position: relative;
            list-style: none;
            margin-top: 1mm;
            line-height: 12px;
        }

            .list_numbering{
                position: absolute;
                display: inline-block;
                width: 5mm;
                top: 0;
            }

            .list_term{
                display: inline-block;
                padding-left: 5mm;
                text-align: justify;
            }

                .sublist_term{
                    display: inline-block;
                    padding-left: 6mm;
                    text-align: justify;
                }

                    .term_sublists{
                        position: relative;
                        list-style: none;
                        padding-left: 5mm;
                        margin-top: 1.5mm;
                        line-height: 12px;
                    }

/* F */
#cofo_footer{
    position: absolute;
    bottom: 4mm;
    left: 4mm;
    min-height: 100px;
    width: 16cm;
}

    #deed_reg{
        position: absolute;
        left: 0;
        top: 0;
        width: 7.5cm;
        
    }

        .deed_reg_line{
            display: block;
        }

    #commissioner_signature{
        position: absolute;
        right: 0;
        bottom: 50px;
        width: 7cm;
    }

        .commissioner_signature_lines{
            display: block;
            text-align: center;
        }

    #logo_agency{
        position: absolute;
        right: 0;
        bottom: 0;
    }
    </style>
</head>

<body>
    <section id="cofo">
        <!-- C of O Head -->
        <header id="cofo_header">
            <img src="resources/img/state_logo.jpg" width="120px" height="120px" id="logo_state">
            <img src="${cofoData.passportUrl}" width="100px" height="120px" id="passport_photo">
            <section id="cofo_hd_info">
                <span class="cofo_hd_info_lines">BENUE STATE OF NIGERIA</span>
                <span class="cofo_hd_info_lines">Land Use Act, CAP L5 Laws of the Federation Nigeria 2004</span>
                <span class="cofo_hd_info_lines">CERTIFICATE OF OCCUPANCY NO:</span>
                <span class="cofo_hd_info_lines">03011-v0d55-ne820-u0d55-ne229-rw923</span>
                <span class="cofo_hd_info_lines">FILE NO:${cofoData.fileNumber}</span>
            </section>

        </header>


        <!--Start C of O main body -->
        <article id="cofo_info">

            <!-- Holder Info -->
            <section id="holder_info">
                <!-- <span class="bold"></span> -->
                <ul class="list">
                    <li class="holder_info_list">THIS IS TO CERTIFY THAT <span class="bold">${cofoData.applicantName}</span></li>
                    <li class="holder_info_list">whose address is <span class="bold">${cofoData.applicantAddress}</span></li>
                </ul>

            </section>

            <!-- C of O Terms -->
            <section id="term_info">
                <p class="terms_intro">(herein after called the holder(s), which term shall include any person(s) listed
                    in title), is hereby granted a right of occupancy in and over the land described in Schedule A
                    printed hereto, for a term of <span class="bold">${cofoData.term} </span> years commencing from the day of <span
                        class="bold">${cofoData.commencementDate}</span> according to the true intent and meaning of the Land Use Act
                    2004
                    and subject to the provisions thereof and to the
                    following special terms and conditions:
                </p>
                <!-- <li class="term_lists">
                    <span class="list_numbering">6</span>
                    <span class="list_term"></span>
                </li> -->
                <ul class="list">
                    <li class="term_lists">
                        <span class="list_numbering">1</span>
                        <span class="list_term">To pay in advance
                            without demand to the Governor of Benue State (herein after referred to as the Governor) or
                            any
                            other officer appointed by the Governor:
                        </span>
                        <ul class="list">
                            <li class="term_sublists">
                                <span class="list_numbering">1.1</span>
                                <span class="sublist_term">he annual ground rent of <span class="bold">${cofoData.groundRent}</span>
                                    from the first day of
                                    January of
                                    each
                                    year; or</span>
                            </li>
                            <li class="term_sublists">
                                <span class="list_numbering">1.2</span>
                                <span class="sublist_term">such revised ground rent as the Governor may from time to time
                                    prescribe;
                                    and</span>
                            </li>
                            <li class="term_sublists">
                                <span class="list_numbering">1.3</span>
                                <span class="sublist_term">such penal rent as the Governor may from time to time
                                    impose.</span>
                            </li>
                        </ul>
                    </li>


                    <li class="term_lists">
                        <span class="list_numbering">2</span>
                        <span class="list_term">To pay and discharge all land use charges, rates (including utilities),
                            assessments and impositions, whatsoever which shall at any time be charged or imposed on the
                            said land or any part thereof or any building thereon, or upon the occupier or occupiers
                            thereof.</span>
                    </li>

                    <li class="term_lists">
                        <span class="list_numbering">3</span>
                        <span class="list_term">In the case of a vacant plot of land, within 36 months from the date of
                            the commencement of the right of occupancy to erect and complete on the said land
                            building(s) or other works specified in related plans approved or to be approved by the Benue
                            State Bureau Of Physical Planning or any other Agency empowered to do so.</span>
                    </li>

                    <li class="term_lists">
                        <span class="list_numbering">4</span>
                        <span class="list_term">In the case of a plot of land with existing structures please note that
                            the right of occupancy does not convey building plan approval. It is the responsibility of
                            the holder of the right of occupancy to obtain building plan approval for existing
                            structures from structures from Bureau Of Physical Planning or any other agency empowered to
                            do so.</span>
                    </li>

                    <li class="term_lists">
                        <span class="list_numbering">5</span>
                        <span class="list_term">To maintain in good and substantial repair to the satisfaction of the
                            Bureau Of Physical Planning or any other officer appointed by the Governor all buildings on
                            the said land and appurtenances thereto, and to do other works, properly maintained in clean
                            and sanitary condition all of the land and surroundings of the building.</span>
                    </li>

                    <li class="term_lists">
                        <span class="list_numbering">6</span>
                        <span class="list_term">Not to erect or
                            build or permit to be erected or built on the land, buildings
                            other than those permitted to be erected by virtue of this Certificate of Occupancy and
                            Building
                            Plan Approval by Bureau Of Physical Planning nor to make or permit to be made any addition
                            or
                            alteration to the said buildings already erected on the land except in accordance with the
                            plans
                            and
                            specifications approved by the Governor and or Bureau Of Physical Planning or any officer
                            authorised
                            by him on his behalf.
                        </span>
                    </li>

                    <li class="term_lists">
                        <span class="list_numbering">7</span>
                        <span class="list_term">The Governor or any public officer duly authorised by the Governor on
                            his behalf shall have the power to enter upon and inspect the land comprised in any
                            Statutory Right of Occupancy or any improvements effected thereon at any reasonable hour
                            during the day, and the occupier shall permit and give free access to the Governor or any
                            such officer to enter and so inspect.</span>
                    </li>

                    <li class="term_lists">
                        <span class="list_numbering">8</span>
                        <span class="list_term">Not to alienate the right of occupancy hereby granted or any part
                            thereof by sale, assignment, mortgage, transfer of possession, sub-lease or bequest, or
                            otherwise howsoever without the prior consent of the Governor.</span>
                    </li>

                    <li class="term_lists">
                        <span class="list_numbering">9</span>
                        <span class="list_term">To use the said land only for <span class="bold">${cofoData.landUse}</span></span>
                    </li>

                    <li class="term_lists">
                        <span class="list_numbering">10</span>
                        <span class="list_term">Not to contravene any of the provisions of the Land Use Act, CAP L5 Laws
                            of the Federation Nigeria 2004, and to conform and comply with all rules and regulations
                            issued by the Governor and/or published from time to time by the Benue State Geographic
                            Information Service (BENGIS).</span>
                    </li>

                    <li class="term_lists">
                        <span class="list_numbering">11</span>
                        <span class="list_term">Upon the expiration of the said term to deliver up to the Governor in
                            good and tenable state to the satisfaction of the Bureau Of Physical Planning the said land
                            and the building(s) thereon.</span>
                    </li>

                    <li class="term_lists">
                        <span class="list_numbering">12</span>
                        <span class="list_term">For the purpose of the rent to be paid under this Certificate of
                            Occupancy:</span>
                        <ul class="list">
                            <li class="term_sublists">
                                <span class="list_numbering">12.1</span>
                                <span class="sublist_term">The Governor may, at his discretion, revise the rent and fix the
                                    sum which shall be payable. If the Governor shall so revise the rent, he shall cause
                                    a notice to be sent to the holder/holders and the rent so fixed or revised shall
                                    commence to be payable one calendar month from the date of the publication of such
                                    notice in the Gazette;</span>
                            </li>
                            <li class="term_sublists">
                                <span class="list_numbering">12.2</span>
                                <span class="sublist_term">If any rent for the time being payable in respect of the land or
                                    any part thereof shall be in arrears for the period of three months whether the same
                                    shall or shall not have been legally demanded or if the holder/holders become
                                    bankrupt or make a composition with creditors or enter into liquidation, whether
                                    compulsorily or voluntarily, or if there shall be any breach or non-observance of
                                    any of the occupier's covenants or agreements herein contained, then, and in any of
                                    the said cases, it shall be lawful for the Governor at any time thereafter to hold
                                    and enjoy the same as if the right of occupancy had not been granted but without
                                    prejudice to any Right of Action or remedy of the Governor for any antecedent breach
                                    of covenant by the holder/holders.</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </article>
        <!--Close C of O main body -->

        <!-- C of O Footer infomation -->
        <footer id="cofo_footer">
            <!-- Deed registration and registral signation -->
            <section id="deed_reg">
                <span class="deed_reg_line justify">This instrument is registered</span>
                <span class="deed_reg_line justify">as No. <span class="bold">${cofoData.regNum}</span> at Page <span
                        class="bold">${cofoData.page}</span> in Volume <span class="bold">${cofoData.volume}</span> of the Certificate of Occupancy
                    Digital Register in the BENGIS Registry Office of Benue State at ten o'clock in the morning of this
                    ____ day of _____________ _________________ </span>

                <span class="deed_reg_line center signature">________________________________________ </span>
                <span class="deed_reg_line center bold">Deed Registrar</span>
            </section>

            <!-- Commisioners signature -->
            <section id="commissioner_signature">
                <span class="commissioner_signature_lines">Dated this ____day of __________________ </span>
                <span class="commissioner_signature_lines">Given under my hand the day, month and year above
                    written</span>
                <span class="commissioner_signature_lines signature">________________________________________</span>
                <span class="commissioner_signature_lines bold">HON. CHINEDU AYODELE MOHAMMED</span>
                <span class="commissioner_signature_lines bold">Honourable Commissioner for Lands, Housing and
                    Survey,</span>
                <span class="commissioner_signature_lines bold">Benue State of Nigeria</span>
            </section>

            <!-- Agency Logo -->
            <img src="resources/img/agency_logo.png" width="120px" height="40px" id="logo_agency" />
        </footer>
    </section>

</body>

</html>
    `;
};
