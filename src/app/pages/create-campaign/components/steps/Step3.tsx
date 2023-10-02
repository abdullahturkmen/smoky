import React, { FC, useState, useEffect } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../../../_metronic/helpers";
import DatePicker from "react-datepicker";
import Select from "react-select";
import countries from "../../../../../_metronic/helpers/AllCountry";
import { ErrorMessage, Field } from "formik";
import "react-datepicker/dist/react-datepicker.css";

const Step3: FC = () => {
  //Start Campaign Schedule function
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isStartDateDisabled, setIsStartDateDisabled] = useState(true);
  useEffect(() => {
    if (endDate < startDate) {
      setEndDate(startDate);
    }
  }, [startDate, endDate]);
  const changeRadioButton = (e) => {
    const value = e.target.value;
    if (value === "startImmediately") {
      setStartDate(new Date());
      setIsStartDateDisabled(true);
    } else {
      setIsStartDateDisabled(false);
    }
  };
  //Finish Campaign Schedule function

  // Start Campaign Limit function

  const [selectedOption, setSelectedOption] = useState("none");
  const [selectedOptionDetail, setSelectedOptionDetail] =
    useState("radioButtonOne");

  const optionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOptionDetail("radioButtonOne");
  };
  const optionChangeDetail = (event) => {
    setSelectedOptionDetail(event.target.value);
  };
  // Finish Campaign Limit function

  // Start Campaign Audience function
  const [selectedVisitorTypes, setSelectedVisitorTypes] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedDevices, setSelectedDevices] = useState(null);
  const [selectedChannels, setSelectedChanneles] = useState(null);
  const [selectedShareVisitor, setSelectedShareVisitor] = useState(null);
  const shareVisitorOptions = [
    { value: "allVisitors", label: "All visitors" },
    { value: "newVisitors", label: "New visitors" },
    { value: "returningVisitors", label: "Returning visitors" },
  ];
  const visitorTypesOptions = [
    { value: "a", label: "Visitor 1" },
    { value: "b", label: "Visitor 2" },
  ];
  const channelsOptions = [
    { value: "allChannel", label: "All channel" },
    { value: "trafficChannel", label: "Traffic channel" },
    { value: "trafficSource", label: "Traffic source" },
    { value: "UTM", label: "UTM" },
  ];
  const devicesOptions = [
    { value: "allDevices", label: "All devices" },
    { value: "displayDesktops", label: "Display on desktops" },
    { value: "displayTablets", label: "Display on tablets" },
    { value: "displayMobile", label: "Display on mobile" },
  ];

  const shareVisitorChange = (event) => {
    setSelectedShareVisitor(event);
  };
  const visitorTypesChange = (selectedOption) => {
    setSelectedVisitorTypes(selectedOption);
  };

  const channelsChange = (event) => {
    setSelectedChanneles(event);
  };
  const devicesChange = (event) => {
    setSelectedDevices(event);
  };

  const countryChange = (event) => {
    setSelectedCountry(event);
  };
  // Finish Campaign Audience function

  // start Pages function

  const [selectedPagesOption, setSelectedPagesOption] =
    useState("selectedPages");
  const URLOptions = [
    { value: "url0", label: "Simple match" },
    { value: "url1", label: "Does not simply match" },
    { value: "url2", label: "Returning visitors" },
    { value: "url3", label: "Is equal to" },
    { value: "url4", label: "Is not equal to" },
    { value: "url5", label: "Contains" },
    { value: "url6", label: "Does not contain" },
    { value: "url7", label: "Starts with" },
    { value: "url8", label: "Ends with" },
    { value: "url9", label: "Does not end with" },
    { value: "url10", label: "Matches the RegEx" },
    { value: "url11", label: "Does not matche the RegEx" },
  ];

  const changePagesOption = (event) => {
    setSelectedPagesOption(event.target.value);
  };

  const [urlList, setUrlList] = useState([{ URLType: null, url: "" }]);

  const addUrl = () => {
    setUrlList([...urlList, { URLType: null, url: "" }]);
  };

  const removeUrl = (index) => {
    const updatedList = [...urlList];
    updatedList.splice(index, 1);
    setUrlList(updatedList);
  };

  const updateUrl = (index, field, value) => {
    const updatedList = [...urlList];
    updatedList[index][field] = value;
    setUrlList(updatedList);
  };

  // Finish pages function

  // start upload couppons function

  const [cupponsType, setCupponsType] = useState("generateCuppons");
  const passwordType = [
    { value: "alphanumeric", label: "Alphanumeric" },
    //{ value: "memorablePass", label: "Memorable Password" },
    { value: "pin", label: "Pin" },
    { value: "letters", label: "Letters" },
  ];
  const [codeSuffix, setCodeSuffix] = useState("SUF");
  const [codePrefix, setCodePrefix] = useState("PRE");
  const [selectedPasswordType, setselectedPasswordType] = useState(
    passwordType[0]
  );

  const [codeLength, setCodeLength] = useState(5);
  const [password, setPassword] = useState("");

  const changePasswordType = (event) => {
    console.log("event : ", event);
    setselectedPasswordType(event);
    const newPassword = generatePassword(codeLength, event);
    setPassword(newPassword);
  };

  const generatePassword = (length, event) => {
    console.log("generatePassword length : ", length);
    console.log("generatePassword event : ", event);
    if (length <= 0) return "";

    var charset = "";

    if (event.value === "pin") {
      charset = "0123456789";
    }

    else if (event.value === "alphanumeric") {
      charset =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }

    else if (event.value === "letters") {
      charset =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  };

  const changeCodeSuffix = (e) => {
    setCodeSuffix(e.target.value);
  };

  const changeCodePrefix = (event) => {
    setCodePrefix(event.target.value);
  };
  const changeCouppons = (event) => {
    setCupponsType(event.target.value);
  };

  const handleCodeLengthChange = (event) => {
    const newLength = parseInt(event.target.value, 10);
    setCodeLength(newLength);
    const newPassword = generatePassword(newLength, selectedPasswordType);
    setPassword(newPassword);
  };

  //Finish upload couppons function
  return (
    <div className="w-100">
      <div className="pb-10 pb-lg-15">
        <h2 className="fw-bolder text-dark">Campaign Settings</h2>

        <div className="text-gray-400 fw-bold fs-6 d-none">
          If you need more info, please check out
          <a href="/dashboard" className="text-primary fw-bolder">
            {" "}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className="row">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item mb-8 shadow">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fs-4 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Campaign Name
                <KTIcon
                  iconName="check-square"
                  className="fs-1 ms-4 text-success"
                />
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body ">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-4">
                    <label
                      htmlFor="campaignname"
                      className="form-label fs-7 fw-bolder mb-1"
                    >
                      Campaign name
                    </label>
                    <input
                      id="campaignname"
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      // value={phone}
                      placeholder="Campaign name"
                      //   onChange={
                      //     e => setPhone(e.target.value)
                      // }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-8 shadow border-top">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed fs-4 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Campaign Schedule
                <KTIcon
                  iconName="information-5"
                  className="fs-1 ms-4 text-danger"
                />
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="row">
                      <div className="col-12 mb-4">
                        <label className="form-label fs-7 fw-bolder me-5">
                          Start immediately
                        </label>
                        <input
                          className="form-check-input"
                          name="communication[]"
                          type="radio"
                          value="startImmediately"
                          onChange={changeRadioButton}
                          defaultChecked
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fs-7 fw-bolder me-5">
                          Choose start date
                        </label>
                        <input
                          className="form-check-input"
                          name="communication[]"
                          type="radio"
                          value="chooseStartDate"
                          onChange={changeRadioButton}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6 mb-4">
                    <div className="row">
                      {isStartDateDisabled ? null : (
                        <div className="col-12 mb-4 d-flex align-items-center">
                          <label
                            htmlFor="campaignname"
                            className="form-label fs-7 fw-bolder mb-1 me-5"
                          >
                            Select start date
                          </label>
                          <div className="ms-auto">
                            <DatePicker
                              className="form-control form-control-lg form-control-solid w-100"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              minDate={new Date()}
                              dateFormat="dd/MM/yyyy"
                            />
                          </div>
                        </div>
                      )}
                      <div className="col-12 d-flex align-items-center">
                        <label
                          htmlFor="campaignname"
                          className="form-label fs-7 fw-bolder mb-1 me-5"
                        >
                          Select end date
                        </label>
                        <div className="ms-auto">
                          <DatePicker
                            className="form-control form-control-lg form-control-solid "
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            minDate={startDate}
                            dateFormat="dd/MM/yyyy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-8 shadow border-top">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed fs-4 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Discount Range
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Choose a discount range for the Prediction Engine
                </strong>
                <div
                  className=" alert alert-secondary p-2"
                  style={{ width: "fit-content" }}
                >
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-0 mb-lg-4">
                      <label
                        htmlFor="min"
                        className="form-label fs-7 fw-bolder mb-1"
                      >
                        Min (%)
                      </label>
                      <input
                        id="min"
                        type="number"
                        className="form-control form-control-lg form-control-solid bg-white"
                      />
                    </div>
                    <div className="col-12 col-lg-6 mb-0 mb-lg-4">
                      <label
                        htmlFor="max"
                        className="form-label fs-7 fw-bolder mb-1"
                      >
                        Max (%)
                      </label>
                      <input
                        id="max"
                        type="number"
                        className="form-control form-control-lg form-control-solid bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-8 shadow border-top">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed fs-4 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Campaign Limits
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Minimum requirements (applies to all products)</strong>{" "}
                <div className="row d-flex  mt-5">
                  <div className="col-sm-12 col-md-6">
                    <div className="col-10 alert alert-secondary">
                      <input
                        className="form-check-input  me-5"
                        type="radio"
                        defaultChecked
                        checked={selectedOption === "none"}
                        onChange={optionChange}
                        value="none"
                      />
                      <label className="form-label fs-7 fw-bolder">None</label>
                    </div>
                    <div className="col-10 alert alert-secondary">
                      <input
                        className="form-check-input  me-5"
                        type="radio"
                        value="productCount"
                        checked={selectedOption === "productCount"}
                        onChange={optionChange}
                      />
                      <label className="form-label fs-7 fw-bolder">
                        Number of Products in Cart
                      </label>
                    </div>
                    <div className="col-10 alert alert-secondary">
                      <input
                        className="form-check-input  me-5"
                        type="radio"
                        value="cartValue"
                        checked={selectedOption === "cartValue"}
                        onChange={optionChange}
                      />
                      <label className="form-label fs-7 fw-bolder">
                        Cart Value
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    {selectedOption !== "none" && (
                      <>
                        <div className="col-10 alert alert-secondary">
                          <input
                            className="form-check-input me-5"
                            type="radio"
                            value="radioButtonOne"
                            defaultChecked
                            checked={selectedOptionDetail === "radioButtonOne"}
                            onChange={optionChangeDetail}
                          />

                          <label className="form-label fs-7 fw-bolder">
                            Radiobutton 1
                          </label>
                        </div>
                        <div className="col-10 alert alert-secondary">
                          <input
                            className="form-check-input me-5"
                            type="radio"
                            value="radioButtonTwo"
                            checked={selectedOptionDetail === "radioButtonTwo"}
                            onChange={optionChangeDetail}
                          />
                          <label className="form-label fs-7 fw-bolder">
                            Radiobutton 2
                          </label>
                        </div>
                        {selectedOptionDetail === "radioButtonOne" && (
                          <div className="col-10 ">
                            <label className="form-label fs-7 fw-bolder">
                              Number
                            </label>
                            <input
                              className="form-control form-control-lg form-control-solid"
                              type="number"
                            />
                          </div>
                        )}

                        {selectedOptionDetail === "radioButtonTwo" && (
                          <div className="row">
                            <div className="col-5">
                              <label
                                htmlFor="min"
                                className="form-label fs-7 fw-bolder mb-1"
                              >
                                Min
                              </label>
                              <input
                                id="minInput"
                                type="number"
                                className="form-control form-control-lg form-control-solid"
                              />
                            </div>
                            <div className="col-5">
                              <label
                                htmlFor="min"
                                className="form-label fs-7 fw-bolder mb-1"
                              >
                                Max
                              </label>
                              <input
                                id="maxInput"
                                type="number"
                                className="form-control form-control-lg form-control-solid"
                              />
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-8 shadow border-top">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed fs-4 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Campaign Audience
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="row mt-5">
                  <div className="col-12 col-lg-6 mb-4">
                    <label
                      htmlFor="campaignname"
                      className="form-label fs-7 fw-bolder mb-1"
                    >
                      Share of Visitors
                    </label>
                    <Select
                      options={shareVisitorOptions}
                      placeholder="Share of Visitors"
                      className="form-control form-control-solid p-0"
                      onChange={shareVisitorChange}
                      value={selectedShareVisitor}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label
                      htmlFor="campaignname"
                      className="form-label fs-7 fw-bolder mb-1"
                    >
                      Visitor Types
                    </label>
                    <Select
                      options={visitorTypesOptions}
                      placeholder="Visitor Types"
                      className="form-control form-control-solid p-0"
                      onChange={visitorTypesChange}
                      value={selectedVisitorTypes}
                      isMulti={true}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label
                      htmlFor="campaignname"
                      className="form-label fs-7 fw-bolder mb-1"
                    >
                      Channels
                    </label>
                    <Select
                      options={channelsOptions}
                      placeholder="All Channels"
                      className="form-control form-control-solid p-0"
                      onChange={channelsChange}
                      value={selectedChannels}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label
                      htmlFor="campaignname"
                      className="form-label fs-7 fw-bolder mb-1"
                    >
                      Devices
                    </label>
                    <Select
                      options={devicesOptions}
                      placeholder="All Devices"
                      className="form-control form-control-solid p-0"
                      onChange={devicesChange}
                      value={selectedDevices}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label
                      htmlFor="campaignname"
                      className="form-label fs-7 fw-bolder mb-1"
                    >
                      Countries
                    </label>
                    <Select
                      options={countries}
                      placeholder="Countries"
                      className="form-control form-control-solid p-0"
                      onChange={countryChange}
                      isMulti={true}
                      value={selectedCountry}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-8 shadow border-top">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed fs-4 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Display Pages
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Frequency</strong>{" "}
                <label className="form-check form-switch form-check-custom form-check-solid align-items-start mt-5">
                  <input className="form-check-input me-5" type="checkbox" />
                  <div className="d-flex flex-column">
                    <span className="form-label fw-bolder">Display Limit</span>
                    <span className="form-label">
                      Don't display yhe promotion above times per session
                    </span>
                  </div>
                </label>
                <hr />
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <input
                      className="form-check-input  me-5"
                      type="radio"
                      defaultChecked
                      checked={selectedPagesOption === "selectedPages"}
                      onChange={changePagesOption}
                      value="selectedPages"
                    />
                    <label className="form-label fs-7 fw-bolder">
                      Display on all pages
                    </label>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-2">
                    <input
                      className="form-check-input  me-5"
                      type="radio"
                      defaultChecked
                      checked={selectedPagesOption === "selectedURL"}
                      onChange={changePagesOption}
                      value="selectedURL"
                    />
                    <label className="form-label fs-7 fw-bolder">
                      Select URLs
                    </label>
                  </div>
                </div>
                {selectedPagesOption === "selectedURL" ? (
                  <div className="mt-5">
                    {urlList.map((item, index) => (
                      <div key={index} className="mb-2">
                        <div className="row d-flex align-items-center mb-2">
                          <div className="col-1">
                            {" "}
                            <span>URL</span>
                          </div>
                          <div className="col-5">
                            <Select
                              options={URLOptions}
                              placeholder="URL"
                              className="form-control form-control-solid p-0"
                              onChange={(selectedOption) =>
                                updateUrl(index, "URLType", selectedOption)
                              }
                              value={item.URLType}
                            />
                          </div>
                          <div className="col-5">
                            <input
                              id="url"
                              type="text"
                              className="form-control form-control-md form-control-solid"
                              placeholder="https://www.example.com"
                              value={item.url}
                              onChange={(e) =>
                                updateUrl(index, "url", e.target.value)
                              }
                            />
                          </div>
                          <div className="col-1">
                            {urlList.length > 1 && (
                              <button
                                type="button"
                                className="btn btn-light btn-sm"
                                onClick={() => removeUrl(index)}
                              >
                                <KTIcon iconName="trash" className="fs-3 text-danger" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-primary mt-5"
                      onClick={addUrl}
                    >
                      Add rule
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
          <div className="accordion-item mb-8 shadow border-top">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed fs-4 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Upload Coupons
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="row mt-5">
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <input
                      className="form-check-input  me-5"
                      type="radio"
                      defaultChecked
                      checked={cupponsType === "generateCuppons"}
                      onChange={changeCouppons}
                      value="generateCuppons"
                    />
                    <label className="form-label fs-7 fw-bolder">
                      Generate coupons
                    </label>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <input
                      className="form-check-input  me-5"
                      type="radio"
                      defaultChecked
                      checked={cupponsType === "uploadCuppons"}
                      onChange={changeCouppons}
                      value="uploadCuppons"
                    />
                    <label className="form-label fs-7 fw-bolder">
                      Upload coupons
                    </label>
                  </div>
                </div>
                {cupponsType === "generateCuppons" ? (
                  <div className="row">
                    <div className="col-sm-12 col-md-5  mt-5">
                      <label
                        htmlFor="campaignname"
                        className="form-label fs-7 fw-bolder mb-1"
                      >
                        Charset
                      </label>
                      <Select
                        value={selectedPasswordType}
                        options={passwordType}
                        placeholder="Charset"
                        className="form-control form-control-solid p-0"
                        onChange={changePasswordType}
                      />
                    </div>
                    <div className="col-sm-12 col-md-5  mt-5">
                      <label
                        htmlFor="campaignname"
                        className="form-label fs-7 fw-bolder mb-1"
                      >
                        Code length
                      </label>
                      <input
                        className="form-control form-control-solid"
                        type="number"
                        placeholder="Code length"
                        min={1}
                        value={codeLength}
                        onChange={handleCodeLengthChange}
                      />
                    </div>
                    <div className="col-sm-12 col-md-5  mt-5">
                      <label
                        htmlFor="campaignname"
                        className="form-label fs-7 fw-bolder mb-1"
                      >
                        Code prefix
                      </label>
                      <input
                        className="form-control form-control-solid"
                        type="text"
                        placeholder="Code prefix"
                        value={codePrefix}
                        onChange={changeCodePrefix}
                      />
                    </div>
                    <div className="col-sm-12 col-md-5  mt-5">
                      <label
                        htmlFor="campaignname"
                        className="form-label fs-7 fw-bolder mb-1"
                      >
                        Code suffix
                      </label>
                      <input
                        className="form-control form-control-solid"
                        type="text"
                        placeholder="Code suffix"
                        value={codeSuffix}
                        onChange={changeCodeSuffix}
                      />
                    </div>

                    {password && (
                      <div className="col-12 mt-5">
                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                          <strong className="text-center w-100">
                            {" "}
                            {codePrefix} - {password} - {codeSuffix}{" "}
                          </strong>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>Güncellme gelecek</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Step3 };
