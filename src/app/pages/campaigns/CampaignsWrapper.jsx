import { useIntl } from "react-intl";
import React, { useState, useEffect } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { KTIcon } from "../../../_metronic/helpers";
import { Link } from "react-router-dom";
import { PopupsListWrapper } from "./popupsTable/PopupsList";


const DashboardPage = () => (

  <>
    <div className="card mb-10 d-none">
      <div className="card-body d-flex align-items-center py-8">
        <div className="d-flex h-80px w-80px flex-shrink-0 flex-center position-relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="text-primary h-75px w-75px h-lg-100px w-lg-100px position-absolute opacity-5"
          >
            <path
              fill="currentColor"
              d="M10.2,21.23,4.91,18.17a3.58,3.58,0,0,1-1.8-3.11V8.94a3.58,3.58,0,0,1,1.8-3.11L10.2,2.77a3.62,3.62,0,0,1,3.6,0l5.29,3.06a3.58,3.58,0,0,1,1.8,3.11v6.12a3.58,3.58,0,0,1-1.8,3.11L13.8,21.23A3.62,3.62,0,0,1,10.2,21.23Z"
            ></path>
          </svg>
          <KTIcon
            iconName="cloud-download"
            className="fs-2x fs-lg-3x text-primary position-absolute"
          />
        </div>

        <div className="ms-6">
          <h2 className="fw-bolder d-flex align-items-center text-dark">
            Install Smoky to get started
          </h2>

          <p className="list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0">
            The layout builder is to assist your set and configure your
            preferred project layout specifications and preview it in real-time.
          </p>
          <p className="list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0">
            Also, you can configurate the Layout in the code Don't forget clear
            your local storage when you are changing.
          </p>
          <div className="d-block mt-5">
            <Link to="/campaigns" className="btn btn-lg btn-primary">
              Install Smoky
            </Link>
          </div>
        </div>
      </div>
    </div>

    <PopupsListWrapper />
  </>
);

const CampaignsWrapper = () => {
  const intl = useIntl();
  const [isVisibleExpAlert, setIsVisibleExpAlert] = useState(false);

  useEffect(() => {






    const storedExp = localStorage.getItem('closeExpAlert');
    if (storedExp) {

      var yirmiDortSaatSonra = new Date();
      yirmiDortSaatSonra.setHours(yirmiDortSaatSonra.getHours() - 24);

      if (yirmiDortSaatSonra > new Date(storedExp)) {
        setIsVisibleExpAlert(true)
      }

    }
    else {
      setIsVisibleExpAlert(true)
    }
  }, []);

  const closeExpAlert = () => {
    localStorage.setItem('closeExpAlert', new Date())
    setIsVisibleExpAlert(false)
  }


  return (
    <>
      <PageTitle breadcrumbs={[]}>Campaigns</PageTitle>
      {isVisibleExpAlert && (<>
        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6 position-relative">
          <div className="position-absolute end-0 top-0 cursor-pointer  text-white bg-dark px-2 py-0 rounded" style={{marginRight: '-5px',marginTop: '-5px'}} onClick={closeExpAlert}>
            x
          </div>
          <KTIcon iconName="information-5" className="fs-2tx text-primary me-4" />

          <div className="d-block d-sm-flex flex-stack flex-grow-1">
            <div className="fw-bold">
              <div className="fs-6 text-gray-600">
                Your trial is expiring in 1 day.
              </div>
            </div>
            <button
              id="send_instructions_submit_btn"
              type="submit"
              className="btn btn-sm btn-primary fw-bold"
            >Upgrade</button>

          </div>
        </div>
      </>)}
      <DashboardPage />
    </>
  );
};

export { CampaignsWrapper };
