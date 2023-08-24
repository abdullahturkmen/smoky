import React from "react";

type Props = {};

const RePayment: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="card-body">
        <h3 className="fw-bold text-dark mb-8">Billing Summary</h3>
        <div className="fs-4 fw-semibold mb-3 text-muted">
          Your subscription has expired, you will not be charged unless you
          reactivate your subscription.
        </div>
        <div className="fs-4 fw-bold mb-6">
        Please re-activate your subscription to continue using Flick.
        </div>
        <hr className="border-bottom"/>
        <div className="d-flex justify-content-between align-items-start">
          <h3 className="fw-bold text-dark mb-8">Payment Details</h3>
          <button className="btn btn-sm text-primary py-0">Edit</button>
        </div>
        <div className="fs-4 fw-semibold mb-3 text-muted">
        MASTERCARD ** ** ** 9017 9/2023
        </div>
        <hr className="border-bottom"/>
        <div className="d-flex justify-content-between align-items-start">
          <h3 className="fw-bold text-dark mb-8">Additional Billing Details</h3>
          <button className="btn btn-sm text-primary py-0">Edit</button>
        </div>
        <div className="fs-4 fw-semibold mb-3 text-muted">
        Country - US
        </div>
        <div className="fs-4 fw-semibold mb-3 text-muted">
        VAT Number - Not Specified
        </div>
      </div>
    </>
  );
};

export { RePayment };
