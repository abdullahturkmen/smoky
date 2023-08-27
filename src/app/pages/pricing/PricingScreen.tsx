import React from "react";

type Props = {};

const PricingScreen: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="card" id="kt_pricing">
        <div className="card-body p-lg-17">
          <div className="d-flex flex-column">
            <div className="mb-13 text-center">
              <h1 className="fs-2hx fw-bold mb-5">Choose Your Plan</h1>

              <div className="text-gray-600 fw-semibold fs-5">
                If you need more info about our pricing, please check{" "}
                <a href="#" className="link-primary fw-bold">
                  Pricing Guidelines
                </a>
                .
              </div>
            </div>

            <div
              className="nav-group nav-group-outline mx-auto mb-15"
              data-kt-buttons="true"
              data-kt-initialized="1"
            >
              <button
                className="btn btn-color-gray-600 btn-active btn-active-secondary px-6 py-3 me-2 active"
                data-kt-plan="month"
              >
                Monthly
              </button>

              <button
                className="btn btn-color-gray-600 btn-active btn-active-secondary px-6 py-3"
                data-kt-plan="annual"
              >
                Annual
              </button>
            </div>

            <div className="row g-10">
              <div className="col-xl-4">
                <div className="d-flex h-100 align-items-center">
                  <div className="w-100 d-flex flex-column flex-center rounded-3 bg-light bg-opacity-75 py-15 px-10">
                    <div className="mb-7 text-center">
                      <h1 className="text-dark mb-5 fw-bolder">Startup</h1>

                      <div className="text-gray-600 fw-semibold mb-5">
                        Optimal for 10+ team size
                        <br /> and new startup
                      </div>

                      <div className="text-center">
                        <span className="mb-2 text-primary">$</span>

                        <span
                          className="fs-3x fw-bold text-primary"
                          data-kt-plan-price-month="39"
                          data-kt-plan-price-annual="399"
                        >
                          39{" "}
                        </span>

                        <span className="fs-7 fw-semibold opacity-50">
                          /<span data-kt-element="period">Mon</span>
                        </span>
                      </div>
                    </div>

                    <div className="w-100 mb-10">
                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Up to 10 Active Users{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Up to 30 Project Integrations{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Analytics Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-600 flex-grow-1">
                          Finance Module{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-600 flex-grow-1">
                          Accounting Module{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-600 flex-grow-1">
                          Network Platform{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center ">
                        <span className="fw-semibold fs-6 text-gray-600 flex-grow-1">
                          Unlimited Cloud Space{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>
                    </div>

                    <a href="#" className="btn btn-sm btn-primary">
                      Select
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="d-flex h-100 align-items-center">
                  <div className="w-100 d-flex flex-column flex-center rounded-3 bg-light bg-opacity-75 py-20 px-10">
                    <div className="mb-7 text-center">
                      <h1 className="text-dark mb-5 fw-bolder">Advanced</h1>

                      <div className="text-gray-600 fw-semibold mb-5">
                        Optimal for 100+ team siz
                        <br />e and grown company
                      </div>

                      <div className="text-center">
                        <span className="mb-2 text-primary">$</span>

                        <span
                          className="fs-3x fw-bold text-primary"
                          data-kt-plan-price-month="339"
                          data-kt-plan-price-annual="3399"
                        >
                          339{" "}
                        </span>

                        <span className="fs-7 fw-semibold opacity-50">
                          /<span data-kt-element="period">Mon</span>
                        </span>
                      </div>
                    </div>

                    <div className="w-100 mb-10">
                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Up to 10 Active Users{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>
                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Up to 30 Project Integrations{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Analytics Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Finance Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Accounting Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-600 flex-grow-1">
                          Network Platform{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center ">
                        <span className="fw-semibold fs-6 text-gray-600 flex-grow-1">
                          Unlimited Cloud Space{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>
                    </div>

                    <a href="#" className="btn btn-sm btn-primary">
                      Select
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="d-flex h-100 align-items-center">
                  <div className="w-100 d-flex flex-column flex-center rounded-3 bg-light bg-opacity-75 py-15 px-10">
                    <div className="mb-7 text-center">
                      <h1 className="text-dark mb-5 fw-bolder">Enterprise</h1>

                      <div className="text-gray-600 fw-semibold mb-5">
                        Optimal for 1000+ team
                        <br /> and enterpise
                      </div>

                      <div className="text-center">
                        <span className="mb-2 text-primary">$</span>

                        <span
                          className="fs-3x fw-bold text-primary"
                          data-kt-plan-price-month="999"
                          data-kt-plan-price-annual="9999"
                        >
                          999{" "}
                        </span>

                        <span className="fs-7 fw-semibold opacity-50">
                          /<span data-kt-element="period">Mon</span>
                        </span>
                      </div>
                    </div>

                    <div className="w-100 mb-10">
                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Up to 10 Active Users{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Up to 30 Project Integrations{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Analytics Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Finance Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Accounting Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center mb-5">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Network Platform{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>

                      <div className="d-flex align-items-center ">
                        <span className="fw-semibold fs-6 text-gray-800 flex-grow-1 pe-3">
                          Unlimited Cloud Space{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>
                    </div>

                    <a href="#" className="btn btn-sm btn-primary">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PricingScreen };
