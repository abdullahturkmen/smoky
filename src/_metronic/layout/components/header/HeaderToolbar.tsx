/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import noUiSlider, { target } from "nouislider";
import { useLayout } from "../../core";
import { KTIcon } from "../../../helpers";
import { DefaultTitle } from "./page-title/DefaultTitle";
import { HeaderUserMenu } from "../../../partials";
import { useAuth } from "../../../../app/modules/auth";
import { toAbsoluteUrl } from "../../../helpers";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { PopupsListFilter } from "../../../../app/pages/campaigns/popupsTable/components/header/PopupsListFilter";
const HeaderToolbar = () => {
  const { classes } = useLayout();
  const [status, setStatus] = useState<string>("1");
  const [propensityScore, setPropensityScore] = useState<number>(25);
  const { currentUser } = useAuth();
  const [notificationList, setNotificationList] = useState<any>([
    { title: "Black Friday Strategy: 11 Ideas & Tips 🏷️", read: false },
    { title: "Notification 2", read: true },
    { title: "Black Friday Strategy: 11 Ideas & Tips 🏷️", read: false },
    { title: "Notification 2", read: true },
    { title: "Black Friday Strategy: 11 Ideas & Tips 🏷️", read: false },
    { title: "Notification 2", read: true },
  ]);
  const [notificationAlert, setNotificationAlert] = useState<boolean>(false);

  useEffect(() => {
    notificationList?.map((e) => {
      if (e.read == true) {
        setNotificationAlert(true);
      }
    });
  }, [notificationList]);

  useEffect(() => {
    const slider: target = document.querySelector(
      "#kt_toolbar_slider"
    ) as target;
    const rangeSliderValueElement: Element | null = document.querySelector(
      "#kt_toolbar_slider_value"
    );

    if (!slider) {
      return;
    }

    slider.innerHTML = "";

    noUiSlider.create(slider, {
      start: [5],
      connect: [true, false],
      step: 1,
      range: {
        min: [1],
        max: [10],
      },
    });

    slider.noUiSlider?.on("update", function (values: any, handle: any) {
      if (!rangeSliderValueElement) {
        return;
      }

      rangeSliderValueElement.innerHTML = parseInt(values[handle]).toFixed(1);
    });
  }, []);

  const readAllNotification = () => {
    setNotificationAlert(false);
  };

  const readNotification = (index) => {
    console.log("bu bildirmi okundu olarak işaretle:", index);
  };

  return (
    <>
      <div className="toolbar d-flex align-items-stretch">
        {/* begin::Toolbar container */}

        <div
          className={`${classes.headerContainer.join(
            " "
          )} py-6 py-lg-0 d-flex flex-column flex-lg-row align-items-lg-stretch justify-content-lg-between`}
        >
          <DefaultTitle />
          <div className="d-flex justify-content-end align-items-center  pt-3 pt-lg-0">
            {/* begin::Action wrapper */}

            <div className="me-4 d-flex align-items-center">
              <div className="d-flex flex-column align-items-center me-2">
                <div
                  className=" float-start position-relative text-center flex-column"
                  style={{ height: "40px" }}
                >
                  <div
                    className="barOverflow position-relative overflow-hidden"
                    style={{
                      width: "80px",
                      height: "40px",
                      marginBottom: "-20px",
                    }}
                  >
                    <div
                      className="bar position-absolute top-0 left-0  border-5 w-100 "
                      style={{
                        borderRadius: "50%",
                        height: "200%",
                        borderBottomColor: "#0bf",
                        borderRightColor: "#0bf",
                        borderTopColor: "#ececec",
                        borderLeftColor: "#ececec",
                        borderStyle: "solid",
                        transform: `rotate(${45 + propensityScore * 1.8}deg)`,
                      }}
                    ></div>
                  </div>
                  <span className="fw-bolder">{propensityScore}%</span>
                </div>
                <span style={{ fontSize: "10px" }}>Propensity Score</span>
              </div>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-user-name">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Tooltip>
                }
              >
                <span className="symbol-label  rounded-circle text-inverse-primary fw-bolder">
                  <i className="bi bi-info-circle-fill"></i>
                </span>
              </OverlayTrigger>
            </div>
            {/* begin::Actions */}
            <div className="d-flex align-items-center">
              {/* begin::Action */}

              <PopupsListFilter />
            </div>
            <div className="d-flex align-items-center">
              <div className="dropdown">
                <button
                  className={`btn p-1 position-relative `}
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {notificationAlert && (
                    <>
                      <div className="position-absolute top-0 end-0 p-1 bg-danger rounded-circle m-1"></div>
                    </>
                  )}
                  <KTIcon
                    iconName="notification"
                    className="fs-1 text-dark pe-0 "
                  />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                  style={{ width: "clamp(300px, 40%, 400px)" }}
                >
                  <div
                    style={{ maxHeight: "320px" }}
                    className="overflow-auto "
                  >
                    {notificationList?.length > 0 ? (
                      <>
                        {notificationList?.map((notification, index) => (
                          <>
                            <div className="card" key={index}>
                              <div className="card-body p-5">
                                <h5 className="card-title">
                                  {notification.title}
                                </h5>
                                <a
                                  onClick={() => readNotification(index)}
                                  className="btn btn-sm px-2 py-1 btn-primary"
                                >
                                  Read
                                </a>
                              </div>
                            </div>
                          </>
                        ))}
                      </>
                    ) : (
                      <>
                        <div className="card">
                          <div className="card-body p-5 text-center">
                            No Notifications
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <li className="d-flex bg-light border border-top-1 justify-content-between">
                    <div className="d-inline-block">
                      <Link to="/notifications" className="dropdown-item text-primary text-underline">
                        All Notifications
                      </Link>
                    </div>
                    <div className="d-inline-block">
                      <a
                        className="dropdown-item cursor-pointer text-primary"
                        onClick={readAllNotification}
                      >
                        Read all
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/*begin::User*/}
              <div className="aside-user d-flex align-items-sm-center justify-content-center py-5 ms-2">
                {/*begin::Symbol*/}
                <div className="symbol symbol-35px">
                  <img
                    className="cursor-pointer"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-start"
                    data-kt-menu-overflow="false"
                    src={toAbsoluteUrl("/media/avatars/300-1.jpg")}
                    alt={currentUser?.first_name}
                  />
                  <HeaderUserMenu />
                </div>
                {/*end::Symbol*/}
              </div>
              {/*end::User*/}
            </div>
            {/* end::Actions */}

            {/* end::Action wrapper */}
          </div>
          {/* end::Toolbar container */}
        </div>
      </div>
    </>
  );
};

export { HeaderToolbar };
