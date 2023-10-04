
const CampaignDiscountRange = () => {
    return (
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
    );
};

export { CampaignDiscountRange };
