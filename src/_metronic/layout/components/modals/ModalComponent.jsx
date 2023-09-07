import React from 'react';

function ModalComponent({ ids, children, onSubmit, title, modalClass, submitText, submitBg, discardText,discardBg }) {
    const modalClasses = `modal fade ${modalClass}`

  return (
    <div className={modalClasses} id={ids} aria-hidden="true" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title"> {title} </h2>
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
            {children}
          </div>
          <div className="modal-footer d-flex justify-content-center border-top-0">
            <button className={discardBg} data-bs-dismiss="modal"> {discardText} </button>
            <button className={submitBg} onClick={onSubmit}>{submitText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
