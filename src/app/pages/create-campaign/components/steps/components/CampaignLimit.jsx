import React, { useState,useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import { KTIcon } from "../../../../../../_metronic/helpers";
import { useDispatch, useSelector } from 'react-redux';
import { setCollapseNum,setCampaignLimit } from "../../../../../../store/reducers/createCampaignReducer";



const CampaignLimit = () => {
  const dispatch = useDispatch();
  const storeCollapseNum = useSelector((state) => state.createCampaign.collapseNum)
  const storeCampaignLimit = useSelector((state) => state.createCampaign.campaignLimit)


  const optionChange = (event) => {
    dispatch(
      setCampaignLimit({
        ...storeCampaignLimit,
        selectedOption: event.target.value,
        selectedOptionDetail: "radioButtonOne"
      })
    );
  };
  const optionChangeDetail = (event) => {
    dispatch(
      setCampaignLimit({
        ...storeCampaignLimit,
        selectedOptionDetail: event.target.value,
      })
    );
  };

  const singleValChange = (event) => {

    if (parseInt(event.target.value) >= 0) {
      dispatch(
        setCampaignLimit({
          ...storeCampaignLimit,
          singleValue: parseInt(event.target.value),
  
        })
      );
    }
    else {
      dispatch(
        setCampaignLimit({
          ...storeCampaignLimit,
          singleValue: 0,
  
        })
      );
    }

  }

  const minValChange = (event) => {

    if (parseInt(event.target.value) >= 0) {

      dispatch(
        setCampaignLimit({
          ...storeCampaignLimit,
          minValue: parseInt(event.target.value),
  
        })
      );
    }
    else {
      dispatch(
        setCampaignLimit({
          ...storeCampaignLimit,
          minValue: 0,
  
        })
      );
    }

  }

  const maxValChange = (event) => {

    if (parseInt(event.target.value) > 0) {
      dispatch(
        setCampaignLimit({
          ...storeCampaignLimit,
          maxValue: parseInt(event.target.value),
  
        })
      );
    }
    else {
      dispatch(
        setCampaignLimit({
          ...storeCampaignLimit,
          maxValue: 1,
  
        })
      );
    }
  }

  const checkMaxValue = (event) => {
    if (parseInt(storeCampaignLimit.minValue) >= parseInt(storeCampaignLimit.maxValue)) {

      // if (parseInt(event.target.value) <= parseInt(storeCampaignLimit.minValue)) {
      toast.warning('The maximum value cannot be equal to or less than the minimum value', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      //   return false
      // }

      dispatch(
        setCampaignLimit({
          ...storeCampaignLimit,
          maxValue: parseInt(storeCampaignLimit.minValue) + 1,
  
        })
      );
    }
  }
  const checkMinValue = (event) => {
    if (parseInt(storeCampaignLimit.minValue) >= parseInt(storeCampaignLimit.maxValue)) {

      toast.warning('The minimum value cannot be equal to or greater than the maximum value', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      dispatch(
        setCampaignLimit({
          ...storeCampaignLimit,
          minValue: parseInt(storeCampaignLimit.maxValue) - 1,
  
        })
      );
    }
  }


  const LimitDetailsContent = () => {

    return (<>
      <ToastContainer />
      <div className="alert rounded-bottom" style={{ marginTop: '-14px', borderRadius: 0, border: '1px solid #dbdfe9' }}>
        <div className="row mb-5 ">
          <div className="d-flex">
            <div className="me-5">
              <input
                className="form-check-input me-1"
                style={{ transform: 'scale(.75)' }}
                type="radio"
                value="radioButtonOne"
                checked={storeCampaignLimit.selectedOptionDetail === "radioButtonOne"}
                onChange={optionChangeDetail}
                id="optionOne"
              />

              <label className="form-label fs-7 fw-bolder" htmlFor="optionOne">
                Option 1
              </label>
            </div>
            <div className="ms-5">
              <input
                className="form-check-input me-1"
                style={{ transform: 'scale(.75)' }}
                type="radio"
                value="radioButtonTwo"
                checked={storeCampaignLimit.selectedOptionDetail === "radioButtonTwo"}
                onChange={optionChangeDetail}
                id="optionTwo"
              />
              <label className="form-label fs-7 fw-bolder" htmlFor="optionTwo">
                Option 2
              </label>
            </div>
          </div>
        </div>
        {storeCampaignLimit.selectedOptionDetail === "radioButtonOne" && (
          <div className="col-12 ">
            <label className="form-label fs-7 fw-bolder">
              Number
            </label>
            <input
              className="form-control form-control-lg form-control-solid"
              type="number"
              min="0"
              value={storeCampaignLimit.singleValue}
              onChange={singleValChange}
            />
          </div>
        )}

        {storeCampaignLimit.selectedOptionDetail === "radioButtonTwo" && (
          <div className="row">
            <div className="col-5">
              <label
                htmlFor="min"
                className="form-label fs-7 fw-bolder mb-1"
              >
                Min Value
              </label>
              <input
                id="minInput"
                type="number"
                value={storeCampaignLimit.minValue}
                onChange={minValChange}
                onBlur={checkMinValue}
                min="0"
                className="form-control form-control-lg form-control-solid"
              />
            </div>
            <div className="col-5">
              <label
                htmlFor="min"
                className="form-label fs-7 fw-bolder mb-1"
              >
                Max Value
              </label>
              <input
                id="maxInput"
                type="number"
                className="form-control form-control-lg form-control-solid"
                value={storeCampaignLimit.maxValue}
                onChange={maxValChange}
                onBlur={checkMaxValue}
                min={storeCampaignLimit.minValue + 1}
              />
            </div>
          </div>
        )}
      </div>


    </>)
  }

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
          onClick={() => dispatch(setCollapseNum(4))}
        >
          Campaign Limits
        </button>
      </h2>
      <div
        id="collapseFour"
        className={`accordion-collapse collapse ${storeCollapseNum == "4"  ? 'show' : ''}`}
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <strong className="d-block">Minimum requirements (applies to all products)</strong>{" "}
          <div className="d-inline-block">
            <div className=" d-flex flex-column  mt-5">
              <div className="d-inline-block">
                <div className=" alert alert-secondary">
                  <input
                    className="form-check-input  me-5"
                    type="radio"
                    checked={storeCampaignLimit.selectedOption === "None"}
                    onChange={optionChange}
                    value="None"
                    id="productNone"
                  />
                  <label className="form-label fs-7 fw-bolder" htmlFor="productNone">None</label>
                </div>
              </div>
              <div className="d-inline-block">
                <div className="alert alert-secondary" style={storeCampaignLimit.selectedOption === 'Number of Products in Cart' ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : null}>
                  <input
                    className="form-check-input  me-5"
                    type="radio"
                    value="Number of Products in Cart"
                    checked={storeCampaignLimit.selectedOption === "Number of Products in Cart"}
                    onChange={optionChange}
                    id="productInCard"
                  />
                  <label className="form-label fs-7 fw-bolder" htmlFor="productInCard">
                    Number of Products in Cart
                  </label>
                </div>
              </div>
              {storeCampaignLimit.selectedOption === 'Number of Products in Cart' && (<>
                <LimitDetailsContent />

              </>
              )}
              <div className="d-inline-block">
                <div className="alert alert-secondary" style={storeCampaignLimit.selectedOption === 'Cart Value' ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : null}>
                  <input
                    className="form-check-input  me-5"
                    type="radio"
                    value="Cart Value"
                    checked={storeCampaignLimit.selectedOption === "Cart Value"}
                    onChange={optionChange}
                    id="productCardValue"
                  />
                  <label className="form-label fs-7 fw-bolder" htmlFor="productCardValue">
                    Cart Value
                  </label>


                </div>
              </div>
              {storeCampaignLimit.selectedOption === 'Cart Value' && (<>
                <LimitDetailsContent />
              </>
              )}
              {/* <div className="col-sm-12 col-md-6">
                {storeCampaignLimit.selectedOption !== "none" && (
                  <>
                    <div className="col-10 alert alert-secondary">
                      <input
                        className="form-check-input me-5"
                        type="radio"
                        value="radioButtonOne"
                        defaultChecked
                        checked={storeCampaignLimit.selectedOptionDetail === "radioButtonOne"}
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
                        checked={storeCampaignLimit.selectedOptionDetail === "radioButtonTwo"}
                        onChange={optionChangeDetail}
                      />
                      <label className="form-label fs-7 fw-bolder">
                        Radiobutton 2
                      </label>
                    </div>
                    {storeCampaignLimit.selectedOptionDetail === "radioButtonOne" && (
                      <div className="col-10 ">
                        <label className="form-label fs-7 fw-bolder">
                          Number
                        </label>
                        <input
                          className="form-control form-control-lg form-control-solid"
                          type="number"
                           min="0"
                        />
                      </div>
                    )}

                    {storeCampaignLimit.selectedOptionDetail === "radioButtonTwo" && (
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
                             min="0"
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
                             min="0"
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
        <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-sm btn-primary m-5" onClick={() => dispatch(setCollapseNum(5))} id="headingTwo">Continue <KTIcon
                        iconName="arrow-right"
                        className="fs-3 ms-2 me-0"
                    /></button>
                </div>
      </div>
    </div>
  );
};

export { CampaignLimit };
