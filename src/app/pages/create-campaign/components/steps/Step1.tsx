/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { KTIcon } from "../../../../../_metronic/helpers";
import { ErrorMessage, Field } from "formik";

const Step1: FC = () => {
  return (
    <div className="w-100  w-xl-1000px m-auto">
      <div className="pb-10 pb-lg-15">
        <h2 className="fw-bolder d-flex align-items-center text-dark">
          Choose Goal
        </h2>
      </div>

      <div className="fv-row">
        <div className="row">
          <div className="col-lg-4 d-flex">
            <Field
              type="radio"
              className="btn-check"
              name="goalType"
              value="conversion"
              id="increase_conversion"
            />
            <label
              className="w-100 btn btn-outline btn-outline-primary btn-outline-default p-7 d-flex flex-column align-items-center mb-10 mb-lg-0"
              htmlFor="increase_conversion"
            >
              <div className="d-flex align-items-center w-100 mb-auto">
                <KTIcon iconName="graph-up" className="fs-3x me-5" />

                <span className="d-block fw-bold text-start">
                  <span className="text-dark fw-bolder d-block fs-4 mb-2">
                    Increase Conversion
                  </span>
                  <span className="text-gray-400 fw-bold fs-6">
                    If you need more info, please check it out
                  </span>
                </span>
              </div>

              <div className="notice d-flex align-items-center bg-light-success rounded border-primary border border-solid mt-4 p-1 w-100">
                <KTIcon
                  iconName="information-5"
                  className="fs-1 text-dark me-4"
                />

                <div className="d-block d-sm-flex flex-stack flex-grow-1">
                  <div className="fs-8 text-dark text-start">
                    For this discount, we recommend setting a discount range of
                    10% - 30%
                  </div>
                </div>
              </div>
            </label>
          </div>

          <div className="col-lg-4 d-flex">
            <Field
              type="radio"
              className="btn-check"
              name="goalType"
              value="order"
              id="increase_order_value"
            />
            <label
              className="w-100 btn btn-outline btn-outline-primary btn-outline-default p-7 d-flex flex-column align-items-center mb-10 mb-lg-0"
              htmlFor="increase_order_value"
            >
              <div className="d-flex align-items-center w-100 mb-auto">
                <KTIcon iconName="handcart" className="fs-3x me-5" />

                <span className="d-block fw-bold text-start">
                  <span className="text-dark fw-bolder d-block fs-4 mb-2">
                    Increase Order Value
                  </span>
                  <span className="text-gray-400 fw-bold fs-6">
                    Create corporate account to mane users
                  </span>
                </span>
              </div>

              <div className="notice d-flex align-items-center bg-light-success rounded border-primary border border-solid mt-4 p-1 w-100">
                <KTIcon
                  iconName="information-5"
                  className="fs-1 text-dark me-4"
                />

                <div className="d-block d-sm-flex flex-stack flex-grow-1">
                  <div className="fs-8 text-dark text-start">
                    For this discount, we recommend setting a discount range of
                    10% - 20%
                  </div>
                </div>
              </div>
            </label>
          </div>

          <div className="col-lg-4 d-flex">
            <Field
              type="radio"
              className="btn-check"
              name="goalType"
              value="revenue"
              id="revenue_per_visit"
            />
            <label
              className="w-100 btn btn-outline btn-outline-primary btn-outline-default p-7 d-flex flex-column align-items-center"
              htmlFor="revenue_per_visit"
            >
              <div className="d-flex align-items-center w-100 mb-auto">
                <KTIcon iconName="dollar" className="fs-3x me-5" />

                <span className="d-block fw-bold text-start">
                  <span className="text-dark fw-bolder d-block fs-4 mb-2">
                    Revenue Per Visit
                  </span>
                  <span className="text-gray-400 fw-bold fs-6">
                    Create corporate account to mane users
                  </span>
                </span>
              </div>

              <div className="notice d-flex align-items-center bg-light-success rounded border-primary border border-solid mt-4 p-1 w-100">
                <KTIcon
                  iconName="information-5"
                  className="fs-1 text-dark me-4"
                />

                <div className="d-block d-sm-flex flex-stack flex-grow-1">
                  <div className="fs-8 text-dark text-start">
                    For this discount, we recommend setting a discount range of
                    5% - 15%
                  </div>
                </div>
              </div>
            </label>
          </div>

          <div className="text-danger mt-2">
            <ErrorMessage name="goalType" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Step1 };
