import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function AddPaymentCardModal() {

    // {
    //     id: 2,
    //     name: "Jacob Holder",
    //     cardType: "Mastercard",
    //     cardNumber: "**** 2040",
    //     expiration: "10/22",
    //     primary: false,
    //   },

  const changeAccess = () => {
   
    toast.success('Changed access', {
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
    <ToastContainer/>
      <div class="modal fade" id="AddPaymentCardModal" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">Add Card</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="menu-item">
                test
              </div>
            </div>
            <div class="modal-footer justify-content-center text-center pt-15">
              <button class="btn btn-light" data-bs-dismiss="modal">Discard</button>
              <button class="btn btn-primary" onClick={changeAccess}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPaymentCardModal