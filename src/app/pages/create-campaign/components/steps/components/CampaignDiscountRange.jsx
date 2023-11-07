import React, { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { KTIcon } from "../../../../../../_metronic/helpers";
import { useDispatch, useSelector } from 'react-redux';
import { setCollapseNum,setDiscountRange } from "../../../../../../store/reducers/createCampaignReducer";


const CampaignDiscountRange = () => {
  const dispatch = useDispatch();
  const storeCollapseNum = useSelector((state) => state.createCampaign.collapseNum)
  const storeDiscountRange = useSelector((state) => state.createCampaign.discountRange)


  useEffect(() => {
    console.log("storeDiscountRange : ", storeDiscountRange)
  }, [storeDiscountRange])


  const minValChange = (event) => {
    dispatch(
      setDiscountRange({
        ...storeDiscountRange,
        minPercentage: event.target.value,

      })
    );
  }
  const maxValChange = (event) => {
    dispatch(
      setDiscountRange({...storeDiscountRange,
        maxPercentage: parseInt(event.target.value),
      })
    );
  }
  const checkMaxValue = (event) => {
    if (parseInt(storeDiscountRange.minPercentage) >= parseInt(storeDiscountRange.maxPercentage)) {

      // if (parseInt(event.target.value) <= parseInt(storeDiscountRange.minPercentage)) {
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
        setDiscountRange({...storeDiscountRange,
          maxPercentage: parseInt(storeDiscountRange.minPercentage) + 1,
        })
      );
    }
  }
  const checkMinValue = (event) => {
    if (parseInt(storeDiscountRange.minPercentage) >= parseInt(storeDiscountRange.maxPercentage)) {

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
        setDiscountRange({...storeDiscountRange,
          minPercentage: parseInt(storeDiscountRange.maxPercentage) - 1,
        })
      );
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="accordion-item mb-8 shadow border-top">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed fs-4 fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            onClick={() => dispatch(setCollapseNum(3))}
          >
            Discount Range
          </button>
        </h2>
        <div
          id="collapseThree"
          className={`accordion-collapse collapse ${storeCollapseNum == "3" ? 'show' : ''}`}
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>
              Choose a discount range for the Prediction Engine
            </strong>
            <div
              className=" alert alert-secondary p-2 mt-5"
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
                    value={storeDiscountRange.minPercentage}
                    onChange={minValChange}
                    onBlur={checkMinValue}
                    min="0"
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
                    value={storeDiscountRange.maxPercentage}
                    onChange={maxValChange}
                    onBlur={checkMaxValue}
                    min={storeDiscountRange.minPercentage + 1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-sm btn-primary m-5" onClick={() => dispatch(setCollapseNum(4))} id="headingTwo">Continue <KTIcon
              iconName="arrow-right"
              className="fs-3 ms-2 me-0"
            /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export { CampaignDiscountRange };
