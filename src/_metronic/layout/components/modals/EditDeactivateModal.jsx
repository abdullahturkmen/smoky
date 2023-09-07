import { React } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function EditDeactivateModal() {

  const changeStatus = () => {

    toast.success('Changed status', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  }

  return (
    <>
      <ToastContainer />
      <div class="modal fade" id="EditDeactivateModal" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">Edit Deactivate</h2>
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
            <div class="modal-body">
              <div className="menu-item">
                Are you sure you want to change this status?
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center border-top-0">
              <button class="btn btn-light" data-bs-dismiss="modal">Discard</button>
              <button class="btn btn-primary" onClick={changeStatus}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditDeactivateModal