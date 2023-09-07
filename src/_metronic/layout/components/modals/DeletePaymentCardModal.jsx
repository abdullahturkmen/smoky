import { React } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ModalComponent from './ModalComponent'
function DeletePaymentCardModal() {

  const deleteCard = () => {

    toast.success('Deleted card', {
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

      <ModalComponent ids={'DeletePaymentCardModal'} onSubmit={deleteCard} title={'Delete Card'} submitText={'Submit'} submitBg={'btn btn-primary'} discardText={'Discard'} discardBg={'btn btn-light'}>
        <div className="menu-item">
          Are you sure you want to delete the card information?
        </div>
      </ModalComponent>
    </>
  )
}

export default DeletePaymentCardModal