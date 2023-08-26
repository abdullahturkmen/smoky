import React from "react";

type Props = {};

const CreditCards: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="card  mb-10 mb-xl-10">
        <div className="card-header card-header-stretch pb-0">
          <div className="card-title">
            <h3 className="m-0">Payment Methods</h3>
          </div>

        </div>

        <div
          id="kt_billing_payment_tab_content"
          className="card-body tab-content"
        >
          <div
            id="kt_billing_creditcard"
            className="tab-pane fade active show"
            role="tabpanel"
            aria-labelledby="kt_billing_creditcard_tab"
          >
            <h3 className="mb-5">My Cards</h3>

            <div className="row gx-9 gy-6">
              <div className="col-xl-6" data-kt-billing-element="card">
                <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                  <div className="d-flex flex-column py-2">
                    <div className="d-flex align-items-center fs-4 fw-bold mb-5">
                      Marcus Morris
                      <span className="badge badge-light-success fs-7 ms-2">
                        Primary
                      </span>
                    </div>

                    <div className="d-flex align-items-center">
                      <img
                        src="/metronic8/demo1/assets/media/svg/card-logos/visa.svg"
                        alt=""
                        className="me-4"
                      />

                      <div>
                        <div className="fs-4 fw-bold">Visa **** 1679</div>
                        <div className="fs-6 fw-semibold text-gray-400">
                          Card expires at 09/24
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center py-2">
                    <button
                      className="btn btn-sm btn-light btn-active-light-primary me-3"
                      data-kt-billing-action="card-delete"
                    >
                      <span className="indicator-label">Delete</span>

                      <span className="indicator-progress">
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                    <button
                      className="btn btn-sm btn-light btn-active-light-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_new_card"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-xl-6" data-kt-billing-element="card">
                <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                  <div className="d-flex flex-column py-2">
                    <div className="d-flex align-items-center fs-4 fw-bold mb-5">
                      Jacob Holder
                    </div>

                    <div className="d-flex align-items-center">
                      <img
                        src="/metronic8/demo1/assets/media/svg/card-logos/american-express.svg"
                        alt=""
                        className="me-4"
                      />

                      <div>
                        <div className="fs-4 fw-bold">Mastercard **** 2040</div>
                        <div className="fs-6 fw-semibold text-gray-400">
                          Card expires at 10/22
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center py-2">
                    <button
                      className="btn btn-sm btn-light btn-active-light-primary me-3"
                      data-kt-billing-action="card-delete"
                    >
                      <span className="indicator-label">Delete</span>

                      <span className="indicator-progress">
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                    <button
                      className="btn btn-sm btn-light btn-active-light-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_new_card"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-xl-6" data-kt-billing-element="card">
                <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                  <div className="d-flex flex-column py-2">
                    <div className="d-flex align-items-center fs-4 fw-bold mb-5">
                      Jhon Larson
                    </div>

                    <div className="d-flex align-items-center">
                      <img
                        src="/metronic8/demo1/assets/media/svg/card-logos/mastercard.svg"
                        alt=""
                        className="me-4"
                      />

                      <div>
                        <div className="fs-4 fw-bold">Mastercard **** 1290</div>
                        <div className="fs-6 fw-semibold text-gray-400">
                          Card expires at 03/23
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center py-2">
                    <button
                      className="btn btn-sm btn-light btn-active-light-primary me-3"
                      data-kt-billing-action="card-delete"
                    >
                      <span className="indicator-label">Delete</span>

                      <span className="indicator-progress">
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                    <button
                      className="btn btn-sm btn-light btn-active-light-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_new_card"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed h-lg-100 p-6">
                  <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                    <div className="mb-3 mb-md-0 fw-semibold">
                      <h4 className="text-gray-900 fw-bold">Important Note!</h4>

                      <div className="fs-6 text-gray-700 pe-7">
                        Please carefully read{" "}
                        <a href="#" className="fw-bold me-1">
                          Product Terms
                        </a>{" "}
                        adding <br /> your new payment card
                      </div>
                    </div>

                    <a
                      href="#"
                      className="btn btn-primary px-6 align-self-center text-nowrap"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_new_card"
                    >
                      Add Card{" "}
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

export { CreditCards };
