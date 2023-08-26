import { useEffect, useState } from "react";
import { KTIcon } from "../../../../../../_metronic/helpers";


const PopupsListFilter = () => {


  return (
    <>
      {/* begin::Filter Button */}

      <button
        type="button"
        className="btn btn-primary me-3 btn-sm"
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-end"
      >
        <KTIcon iconName="plus" className="fs-4" />
        Create Campaign
      </button>

      {/* end::Filter Button */}
      {/* begin::SubMenu */}
      <div
        className="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
        data-kt-menu="true"
      >
        {/* begin::Separator */}
        <div className="separator border-gray-200"></div>
        {/* end::Separator */}

        {/* begin::Content */}
        <div className="px-7 py-5" >
          <a className="btn btn-flex btn-primary px-6 w-100 mb-3 cursor-pointer"  data-bs-toggle="modal" data-bs-target="#customCampaign">
            <KTIcon iconName="wrench" className="fs-2" />
            <span className="d-flex flex-column align-items-start ms-2">
              <span className="fs-5 fw-bolder">Custom Campaign</span>
              <span className="fs-7">Some description</span>
            </span>
          </a>

          <a className="btn btn-flex btn-primary px-6 w-100" data-bs-toggle="modal" data-bs-target="#oneClickSetup">
            <KTIcon iconName="document" className="fs-2" />
            <span className="d-flex flex-column align-items-start ms-2">
              <span className="fs-5 fw-bolder">One Click Setup</span>
              <span className="fs-7">Some description</span>
            </span>
          </a>
        </div>
        {/* end::Content */}
      </div>
      {/* end::SubMenu */}

    </>
  );
};

export { PopupsListFilter };
