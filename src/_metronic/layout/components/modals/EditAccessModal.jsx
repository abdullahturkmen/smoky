import React from 'react'
import { KTIcon } from '../../../helpers'

function EditAccessModal() {
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
    </>
  )
}

export default EditAccessModal