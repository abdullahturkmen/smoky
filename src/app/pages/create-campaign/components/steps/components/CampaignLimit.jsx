import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const CampaignLimit = () => {

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

    return (
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
                        <div className="col-12 alert alert-secondary">
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
                        <div className="col-12 alert alert-secondary">
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
                        {selectedOption === 'productCount' && (
                            <div className="alert alert-info">
                                <div className="row mb-5">
                                    <div className="col-12 col-lg-5 mt-5">
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
                                    <div className="col-12 col-lg-5 mt-5">
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
                                </div>
                                {selectedOptionDetail === "radioButtonOne" && (
                                    <div className="col-12 ">
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
                            </div>
                        )}
                        <div className="col-12 alert alert-secondary">
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

                        {selectedOption === 'cartValue' && (
                            <div className="alert alert-info">
                                <div className="row mb-5">
                                    <div className="col-12 col-lg-5 mt-5">
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
                                    <div className="col-12 col-lg-5 mt-5">
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
                                </div>
                                {selectedOptionDetail === "radioButtonOne" && (
                                    <div className="col-12 ">
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
                            </div>
                        )}
                        {/* <div className="col-sm-12 col-md-6">
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
              </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CampaignLimit };
