import { React } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ModalComponent from './ModalComponent'
function DeleteBillingAddressModal() {

  const deleteAddress = () => {

    toast.success('Deleted address', {
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
      <ModalComponent ids={'DeleteBillingAddressModal'} onSubmit={deleteAddress} title={'Delete Address'} submitText={'Submit'} submitBg={'btn btn-primary'} discardText={'Discard'} discardBg={'btn btn-light'}>
        <div className="menu-item">
          Are you sure you want to delete the address?
        </div>
      </ModalComponent>
    </>
  )
}

export default DeleteBillingAddressModal