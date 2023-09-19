import React, { FC, useState, useEffect } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../../../_metronic/helpers";
import DatePicker from "react-datepicker";

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
      setIsStartDateDisabled(true);
    } else {
      setIsStartDateDisabled(false);
    }
  };
  //Finish Campaign Schedule function

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
          <div className="accordion-item">
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
              <div className="accordion-body">
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
                  <div className="col-12 col-lg-6 mb-4">
                    <label
                      htmlFor="campaignname2"
                      className="form-label fs-7 fw-bolder mb-1"
                    >
                      Campaign name (silinebilir)
                    </label>
                    <input
                      id="campaignname2"
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      // value={phone}
                      placeholder="Campaign name"
                      //   onChange={
                      //     e => setPhone(e.target.value)
                      // }
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label
                      htmlFor="campaignname3"
                      className="form-label fs-7 fw-bolder mb-1"
                    >
                      Campaign name (silinebilir)
                    </label>
                    <input
                      id="campaignname3"
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
          <div className="accordion-item">
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
                        <label
                          className="form-label fs-7 fw-bolder me-5"
                        >
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
                        <label
                          className="form-label fs-7 fw-bolder me-5"
                        >
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
                    {isStartDateDisabled ? (
                    null
                  ) : (
                    <div className="col-12 mb-4">
                    <label
                      htmlFor="campaignname"
                      className="form-label fs-7 fw-bolder mb-1 me-5"
                    >
                      Select start date
                    </label>
                    <DatePicker
                        className="form-control form-control-lg form-control-solid w-100"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                      />
                  </div>
                  )}
                  <div className="col-12">
                    <label
                      htmlFor="campaignname"
                      className="form-label fs-7 fw-bolder mb-1 me-5"
                    >
                      Select end date
                    </label>
                    <DatePicker
                        className="form-control form-control-lg form-control-solid"
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
          <div className="accordion-item">
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
                <div className="row alert alert-primary">
                <div className="col-1 mt-4">
                    <label
                      htmlFor="min"
                      className="form-label fs-7 fw-bolder mb-1"
                    >
                      Min
                    </label>
                    <input
                      id="min"
                      type="number"
                      className="form-control form-control-lg form-control-solid"
                    />
                  </div>
                  <div className="col-1 mt-4">
                    <label
                      htmlFor="min"
                      className="form-label fs-7 fw-bolder mb-1"
                    >
                      Max
                    </label>
                    <input
                      id="max"
                      type="number"
                      className="form-control form-control-lg form-control-solid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
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
                <strong>
                  Campaign Limits - This is the third item's accordion body.
                </strong>{" "}
                <div className="row ">
                <div className="col-sm-12 col-lg-4 alert alert-secondary">
                  <input
                    className="form-check-input  me-5"
                    type="radio"
                    defaultChecked
                  />
                  <label
                    className="form-label fs-7 fw-bolder"
                  >
                    None
                  </label>
                  
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
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
                <strong>
                  Campaign Audience - This is the third item's accordion body.
                </strong>{" "}
                It is hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
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
                <strong>
                  Display Pages - This is the third item's accordion body.
                </strong>{" "}
                It is hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
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
                <strong>
                  Upload Coupons - This is the third item's accordion body.
                </strong>{" "}
                It is hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Step3 };
