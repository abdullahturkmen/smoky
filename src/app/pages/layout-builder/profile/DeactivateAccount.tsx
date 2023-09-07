/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { KTIcon } from "../../../../_metronic/helpers";
import { deactivateAccount, IDeactivateAccount } from "./SettingsModel";
import * as Yup from "yup";
import { useFormik } from "formik";

const deactivateAccountSchema = Yup.object().shape({
  confirm: Yup.boolean().oneOf(
    [true],
    "Please check the box to deactivate your account"
  ),
});

const DeactivateAccount: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const formik = useFormik<IDeactivateAccount>({
    initialValues: {
      ...deactivateAccount,
    },
    validationSchema: deactivateAccountSchema,
    onSubmit: () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      alert("Account has been successfully deleted!");
    },
  });

  return (
    <>
      <div className="card">
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_deactivate"
          aria-expanded="true"
          aria-controls="kt_account_deactivate"
        >
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Deactivate Account</h3>
          </div>
        </div>

        <div id="kt_account_deactivate" className="collapse show">
          <div className="card-body border-top p-9">
            <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
              <KTIcon
                iconName="information-5"
                className="fs-2tx text-warning me-4"
              />

              <div className="d-flex flex-stack flex-grow-1">
                <div className="fw-bold">
                  <h4 className="text-gray-800 fw-bolder">
                    You Are Deactivating Your Account
                  </h4>
                  <div className="fs-6 text-gray-600">
                    For extra security, this requires you to confirm your email
                    or phone number when you reset yousignr password.
                  </div>
                </div>
              </div>
            </div>

            <div className="form-check form-check-solid fv-row">
              <input
                className="form-check-input"
                type="checkbox"
                {...formik.getFieldProps("confirm")}
                defaultChecked={checked}
                onChange={() => setChecked((state) => !state)}
              />
              <label
                className="form-check-label fw-bold ps-2 fs-6"
                htmlFor="deactivate"
              >
                I confirm my account deactivation
              </label>
            </div>
          </div>

          <div className="card-footer d-flex justify-content-end py-6 px-9">
            <button
              id="kt_account_deactivate_account_submit_form"
              type="button"
              className="btn btn-danger fw-bold"
              disabled={!checked}
              data-bs-toggle="modal" data-bs-target="#EditDeactivateAccount"
            >
              {!loading && "Deactivate Account"}
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
        </div>
      </div>

    </>
  );
};

export { DeactivateAccount };
