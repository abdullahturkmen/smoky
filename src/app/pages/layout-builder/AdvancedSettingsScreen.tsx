import React, { useState } from "react";
import { KTIcon } from "../../../_metronic/helpers";

type Props = {};

const AdvancedSettingsScreen: React.FC<Props> = ({}) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#google_analytics_tab"
          >
            Google Analytics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#goals_tab">
            Goals
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContentAdvancedSettings">
        <div
          className="tab-pane fade show active"
          id="google_analytics_tab"
          role="tabpanel"
        >
          <div className="card mt-5">
            <div
              id="kt_account_deactivate_google_analytics"
              className="collapse show"
            >
              <form
                id="kt_account_deactivate_form_google_analytics"
                className="form"
              >
                <div className="card-body p-9">
                  <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                    <KTIcon
                      iconName="information-5"
                      className="fs-2tx text-primary me-4"
                    />

                    <div className="d-flex flex-stack flex-grow-1">
                      <div className="fw-bold">
                        <div className="fs-6">
                          Your popups will generate events on display, click and
                          signup.
                        </div>
                        <div className="text-gray-600">
                          Google Analytics must already be installed on your
                          website.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-0">
                    <label className="col-lg-4 col-form-label text-muted fs-6">
                      Activate
                    </label>

                    <div className="col-lg-8 d-flex align-items-center">
                      <div className="form-check form-check-solid form-switch fv-row">
                        <input
                          className="form-check-input w-45px h-30px"
                          type="checkbox"
                          id="allowmarketing"
                          // defaultChecked={}
                          // onChange={}
                        />
                        <label className="form-check-label"></label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer d-flex justify-content-end py-6 px-9">
                  <button
                    id="kt_account_deactivate_account_submit_google_analytics"
                    type="submit"
                    className="btn btn-primary fw-bold"
                  >
                    {!loading && "Save Changes"}
                    {loading && (
                      <span
                        className="indicator-progress"
                        style={{ display: "block" }}
                      >
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="goals_tab" role="tabpanel">
          <div className="card mt-5">
            <div id="kt_account_deactivate_goals" className="collapse show">
              <form id="kt_account_deactivate_form_goals" className="form">
                <div className="card-body p-9">
                  <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                    <KTIcon
                      iconName="information-5"
                      className="fs-2tx text-primary me-4"
                    />

                    <div className="d-flex flex-stack flex-grow-1">
                      <div className="fw-bold">
                        <div className="fs-6">
                          Goal tracking allows you to associate conversions with
                          the popups your visitors have seen or clicked.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label text-muted fs-6">
                      Attribution period
                    </label>

                    <div className="col-lg-8 d-flex align-items-center">
                      <input
                        className="form-control form-control-solid w-90px "
                        type="number"
                        min="0"
                        value="25"
                        // defaultChecked={}
                        // onChange={}
                      />
                    </div>
                  </div>

                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label text-muted fs-6">
                      Attribution model
                    </label>

                    <div className="col-lg-8 fv-row">
                      <select className="form-select form-select-solid form-select-lg">
                        <option value="click" selected>
                          Click
                        </option>
                        <option value="display">Display</option>
                       
                      </select>
                    </div>
                  </div>

                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label text-muted fs-6">
                      Currency
                    </label>

                    <div className="col-lg-8 fv-row">
                      <select className="form-select form-select-solid form-select-lg">
                        <option value="">Select a currency..</option>
                        <option value="USD" selected>
                          USD - USA dollar
                        </option>
                        <option value="GBP">GBP - British pound</option>
                        <option value="AUD">AUD - Australian dollar</option>
                        <option value="JPY">JPY - Japanese yen</option>
                        <option value="SEK">SEK - Swedish krona</option>
                        <option value="CAD">CAD - Canadian dollar</option>
                        <option value="CHF">CHF - Swiss franc</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="card-footer d-flex justify-content-end py-6 px-9">
                  <button
                    id="kt_account_deactivate_account_submit_goals"
                    type="submit"
                    className="btn btn-primary fw-bold"
                  >
                    {!loading && "Save Changes"}
                    {loading && (
                      <span
                        className="indicator-progress"
                        style={{ display: "block" }}
                      >
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedSettingsScreen;
