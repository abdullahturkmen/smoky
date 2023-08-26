import React from "react";

type Props = {};

const ActivePlan: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="card mb-10 h-xl-100 flex-row flex-stack flex-wrap p-6">
        <div className="flex-wrap border-dashed border-primary rounded border  p-6">
          <div className="d-flex flex-column py-2">
            <div className="d-flex align-items-center fs-5 fw-bold mb-5">
              Active plan
            </div>
            <h1 className="h1">Free Trial</h1>
            <div className="d-flex align-items-center">
              <div className="fs-6 me-6 pe-6">
                Free Trial ends in less than one day
              </div>
              <button className="btn btn-primary ms-6">Upgrade</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ActivePlan };
