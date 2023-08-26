/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { useLayout } from "../core";
import { KTIcon } from "../../helpers";

const Footer: FC = () => {
  const { classes } = useLayout();
  return (
    <>
      {/* begin::modalCustomCampaign */}
      <div className="modal modal-lg fade" id="customCampaign">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Custom Campaign</h3>

              <div
                className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
            </div>

            <div className="modal-body">
              <div className="d-block fs-5 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus nulla quisquam placeat ex reprehenderit
              </div>
              <div className="d-flex">
                <button className="d-flex flex-column align-items-center p-6 m-2 border border-dark rounded bg-white">
                  <KTIcon
                    iconName="entrance-left"
                    className="fs-1 text-dark"
                  />
                  <h2 className="h2 my-4 text-primary">Title One</h2>
                  <div className="fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </div>
                </button>
                <button className="d-flex flex-column align-items-center p-6 m-2 border border-dark rounded bg-white">
                  <KTIcon
                    iconName="entrance-left"
                    className="fs-1 text-dark"
                  />
                  <h2 className="h2 my-4 text-primary">Title Two</h2>
                  <div className="fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </div>
                </button>
                <button className="d-flex flex-column align-items-center p-6 m-2 border border-dark rounded bg-white">
                  <KTIcon
                    iconName="entrance-left"
                    className="fs-1 text-dark"
                  />
                  <h2 className="h2 my-4 text-primary">Title Three</h2>
                  <div className="fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end::modalCustomCampaign */}

      {/* begin::modalOneClickSetup */}
      <div className="modal modal-lg fade" id="oneClickSetup">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">One Click Setup</h3>

              <div
                className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
            </div>

            <div className="modal-body">
              <div className="d-block fs-5 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus nulla quisquam placeat ex reprehenderit
              </div>
              <div className="d-flex">
                <button className="d-flex flex-column align-items-center p-6 m-2 border border-dark rounded bg-white">
                  <KTIcon
                    iconName="entrance-left"
                    className="fs-1 text-dark"
                  />
                  <h2 className="h2 my-4 text-primary">Title One</h2>
                  <div className="fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </div>
                </button>
                <button className="d-flex flex-column align-items-center p-6 m-2 border border-dark rounded bg-white">
                  <KTIcon
                    iconName="entrance-left"
                    className="fs-1 text-dark"
                  />
                  <h2 className="h2 my-4 text-primary">Title Two</h2>
                  <div className="fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </div>
                </button>
                <button className="d-flex flex-column align-items-center p-6 m-2 border border-dark rounded bg-white">
                  <KTIcon
                    iconName="entrance-left"
                    className="fs-1 text-dark"
                  />
                  <h2 className="h2 my-4 text-primary">Title Three</h2>
                  <div className="fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end::modalOneClickSetup */}
    </>
    // <div className='footer py-4 d-flex flex-lg-column' id='kt_footer'>
    //   {/* begin::Container */}
    //   <div
    //     className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
    //   >
    //     {/* begin::Copyright */}
    //     <div className='text-dark order-2 order-md-1'>
    //       <span className='text-muted fw-bold me-2'>{new Date().getFullYear()} &copy;</span>
    //       <a href='#' className='text-gray-800 text-hover-primary'>
    //         Snooky.io
    //       </a>
    //     </div>
    //     {/* end::Copyright */}

    //     {/* begin::Nav */}
    //     <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1'>
    //       <li className='menu-item'>
    //         <a href='#' className='menu-link ps-0 pe-2'>
    //           About
    //         </a>
    //       </li>
    //       <li className='menu-item'>
    //         <a href='#' className='menu-link pe-0 pe-2'>
    //           Contact
    //         </a>
    //       </li>
    //       <li className='menu-item'>
    //         <a href='#' className='menu-link pe-0'>
    //           Purchase
    //         </a>
    //       </li>
    //     </ul>
    //     {/* end::Nav */}
    //   </div>
    //   {/* end::Container */}
    // </div>
  );
};

export { Footer };
