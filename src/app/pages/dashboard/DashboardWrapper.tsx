import { useIntl } from "react-intl";
import { PageTitle } from "../../../_metronic/layout/core";
import { KTIcon } from "../../../_metronic/helpers";
import { Link } from "react-router-dom";
import { PopupsListWrapper } from "./popupsTable/PopupsList";

const DashboardPage = () => (
  <>
    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
      <KTIcon iconName="information-5" className="fs-2tx text-primary me-4" />

      <div className="d-flex flex-stack flex-grow-1">
        <div className="fw-bold">
          <div className="fs-6 text-gray-600">
          Your trial is expiring in 1 day.
          </div>
          <div className="d-block mt-3">
          <button
                id="send_instructions_submit_btn"
                type="submit"
                className="btn btn-sm btn-primary fw-bold"
              >Upgrade</button>
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-10">
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
            Install Snooky to get started
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
            <Link to="/dashboard" className="btn btn-lg btn-primary">
              Install Snooky
            </Link>
          </div>
        </div>
      </div>
    </div>

    <PopupsListWrapper />
  </>
);

const DashboardWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.DASHBOARD" })}
      </PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
