/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { KTIcon } from "../../../../_metronic/helpers";

export function Overview() {
  const [editModeVisible, setEditModeVisible] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('Abdullah Türkmen');
  const [company, setCompany] = useState<string>('Türkmenx');
  const [phone, setPhone] = useState<string>('0537 299 70 45');
  const [mail, setMail] = useState<string>('abdullahtrkmn13@gmail.com');
  const [country, setCountry] = useState<string>('Turkey');

  const cancelProfile = () => {
    setUserName('Abdullah Türkmen');
    setCompany('Türkmenx');
    setPhone('0537 299 70 45');
    setMail('abdullahtrkmn13@gmail.com');
    setCountry('Turkey');
    setEditModeVisible(false);
  };

  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
  ];

  useEffect(() => {
    if(!editModeVisible){
      saveProfile()
    }
   
  }, [editModeVisible])
  
  

  const saveProfile = () => {
    console.log("değişik")
  }
  return (
    <>
      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Profile Details</h3>
          </div>

          <div
            onClick={() =>
              setEditModeVisible((editModeVisible) => !editModeVisible)
            }
            className="btn btn-primary align-self-center"
          >
            Edit Profile
          </div>
        </div>

        <div className="card-body p-9">
          <div className="row mb-7">
            <label className="col-lg-2 fw-bold d-flex align-items-center">Full Name</label>

            <div className="col-lg-8">
              {editModeVisible ? (
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={userName}
                  placeholder="Full name"
                  onChange={
                    e => setUserName(e.target.value)
                }
                />
              ) : (
                <span className="fw-bold fs-6 text-muted">{userName}</span>
              )}
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-2 fw-bold d-flex align-items-center">Company</label>

            <div className="col-lg-8 fv-row">
            {editModeVisible ? (
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={company}
                  placeholder="Company"
                  onChange={
                    e => setCompany(e.target.value)
                }
                />
              ) : (
                <span className="fw-bold fs-6 text-muted">{company}</span>
              )}
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-2 fw-bold d-flex align-items-center">Contact Phone</label>

            <div className="col-lg-8 d-flex align-items-center">
            {editModeVisible ? (
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={phone}
                  placeholder="Phone"
                  onChange={
                    e => setPhone(e.target.value)
                }
                />
              ) : (
                <span className="fw-bold fs-6 text-muted">{phone}</span>
              )}
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-2 fw-bold d-flex align-items-center">Email Address</label>

            <div className="col-lg-8">
            {editModeVisible ? (
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={mail}
                  placeholder="Email Address"
                  onChange={
                    e => setMail(e.target.value)
                }
                />
              ) : (
                <span className="fw-bold fs-6 text-muted">{mail}</span>
              )}
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-2 fw-bold d-flex align-items-center">Country</label>

            <div className="col-lg-8">
            {editModeVisible ? (
              <select id="country" name="country" className="form-select form-select-solid form-select-lg" onChange={(e) => setCountry(e.target.value)}>

                {countryList?.map(e => (
                  <option value={e} selected={e === country}>{e}</option>
                ))}
              
              
          
          </select>
                // <input
                //   type="text"
                //   className="form-control form-control-lg form-control-solid"
                //   value={country}
                //   placeholder="Country"
                //   onChange={
                //     e => setCountry(e.target.value)
                // }
                // />
              ) : (
                <span className="fw-bold fs-6 text-muted">{country}</span>
              )}
            </div>
          </div>
        <div className="d-flex justify-content-end">
        {editModeVisible && <div onClick={cancelProfile} className="btn btn-danger align-self-end me-3">Cancel</div>}
        {editModeVisible && <div onClick={() => setEditModeVisible(false)} className="btn btn-success align-self-end">Save</div>}
        </div></div>
      </div>
    </>
  );
}
