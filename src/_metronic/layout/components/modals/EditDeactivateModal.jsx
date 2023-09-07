import { React } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ModalComponent from './ModalComponent'
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

      <ModalComponent ids={'EditDeactivateModal'} onSubmit={changeStatus} title={'Edit Deactivate'} submitText={'Submit'} submitBg={'btn btn-primary'} discardText={'Discard'} discardBg={'btn btn-light'}>
        <div className="menu-item">
          Are you sure you want to change this status?
        </div>
      </ModalComponent>
    </>
  )
}

export default EditDeactivateModal