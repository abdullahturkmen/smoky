import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';



const CampaignLimit = () => {

  const [singleValue, setSingleValue] = useState();
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

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
  


  const minValChange = (event) => {
    // //console.log("min : ", event.target.value);
    // if (parseInt(event.target.value) >= parseInt(maxValue)) {


    //   toast.warning('The minimum value cannot be equal to or greater than the maximum value', {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });


    //   return false
    // }
    setMinValue(parseInt(event.target.value))
  }
  const maxValChange = (event) => {
    ////console.log("max : ", event.target.value);
    // if (parseInt(event.target.value) <= parseInt(minValue)) {
    //   toast.warning('The maximum value cannot be equal to or less than the minimum value', {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   return false
    // }
    setMaxValue(parseInt(event.target.value))
  }
  const checkMaxValue = (event) => {
    if(parseInt(minValue) >= parseInt(maxValue)){

          // if (parseInt(event.target.value) <= parseInt(minValue)) {
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

      setMaxValue(parseInt(minValue) + 1)
    }
  }
  const checkMinValue = (event) => {
    if(parseInt(minValue) >= parseInt(maxValue)){

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

      setMinValue(parseInt(maxValue) - 1)
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
                checked={selectedOptionDetail === "radioButtonOne"}
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
                checked={selectedOptionDetail === "radioButtonTwo"}
                onChange={optionChangeDetail}
                id="optionTwo"
              />
              <label className="form-label fs-7 fw-bolder" htmlFor="optionTwo">
                Option 2
              </label>
            </div>
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
              min="0"
              value={singleValue}
              onChange={(e) => setSingleValue(e.target.value)}
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
                Min Value
              </label>
              <input
                id="minInput"
                type="number"
                value={minValue}
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
                value={maxValue}
                onChange={maxValChange}
                onBlur={checkMaxValue}
                min={minValue + 1}
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
          <strong className="d-block">Minimum requirements (applies to all products)</strong>{" "}
         <div className="d-inline-block">
         <div className=" d-flex flex-column  mt-5">
            <div className="d-inline-block">
              <div className=" alert alert-secondary">
                <input
                  className="form-check-input  me-5"
                  type="radio"
                  checked={selectedOption === "none"}
                  onChange={optionChange}
                  value="none"
                  id="productNone"
                />
                <label className="form-label fs-7 fw-bolder" htmlFor="productNone">None</label>
              </div>
            </div>
            <div className="d-inline-block">
              <div className="alert alert-secondary" style={selectedOption === 'productCount' ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : null}>
                <input
                  className="form-check-input  me-5"
                  type="radio"
                  value="productCount"
                  checked={selectedOption === "productCount"}
                  onChange={optionChange}
                  id="productInCard"
                />
                <label className="form-label fs-7 fw-bolder" htmlFor="productInCard">
                  Number of Products in Cart
                </label>
              </div>
            </div>
            {selectedOption === 'productCount' && (<>
              <LimitDetailsContent />

            </>
            )}
            <div className="d-inline-block">
              <div className="alert alert-secondary" style={selectedOption === 'cartValue' ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : null}>
                <input
                  className="form-check-input  me-5"
                  type="radio"
                  value="cartValue"
                  checked={selectedOption === "cartValue"}
                  onChange={optionChange}
                  id="productCardValue"
                />
                <label className="form-label fs-7 fw-bolder" htmlFor="productCardValue">
                  Cart Value
                </label>


              </div>
            </div>
            {selectedOption === 'cartValue' && (<>
              <LimitDetailsContent />
            </>
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
                           min="0"
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
      </div>
    </div>
  );
};

export { CampaignLimit };
