import React, { FC, useState } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../../../_metronic/helpers";
import { ErrorMessage, Field } from "formik";

import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Step3: FC = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  });

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
  }

   const today = new Date();
  today.setHours(0, 0, 0, 0); // Bugünün saatini sıfırla

  // Geçmişe dönük tarihleri devre dışı bırakmak için bir dizi oluştur
  const disabledDates = [{ before: today }];


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
                <label className='form-check form-check-inline form-check-solid me-5'>
                  <input
                    className='form-check-input'
                    name='communication[]'
                    type='radio'
                  />
                  <span className='fw-bold ps-2 fs-6'>Hemen başla</span>
                </label>
                <label className='form-check form-check-inline form-check-solid me-5'>
                  <input
                    className='form-check-input'
                    name='communication[]'
                    type='radio'
                  />
                  <span className='fw-bold ps-2 fs-6'>Tarih aralığı seç</span>
                </label>

                <div>
                <Calendar
                ranges={[dateRange]}
                onChange={handleSelect}
                disabledDates={disabledDates}
              />
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
                  Discount Range - This is the third item's accordion body.
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
