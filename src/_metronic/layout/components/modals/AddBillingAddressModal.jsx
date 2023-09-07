import { React } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ModalComponent from './ModalComponent'
import countries from '../../../helpers/AllCountry';
import Select from "react-select";
function AddBillingAddressModal() {

    const addAddress = () => {

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
            <ModalComponent ids={'AddBillingAddressModal'} onSubmit={addAddress} title={'Add New Address'} submitText={'Submit'} submitBg={'btn btn-primary'} discardText={'Discard'} discardBg={'btn btn-light'}>
                <div className="menu-item">
                    <label className='fw-bold fs-6 mb-2'>Country</label>
                    <Select
                        options={countries}
                        placeholder="Country"
                        className="form-control form-control-solid p-0"
                    />

                    <label className='fw-bold fs-6 mb-2 mt-2'>City</label>
                    <input
                        placeholder='City'
                        type='text'
                        name='name'
                        className={'form-control form-control-solid mb-3 mb-lg-0'}
                        autoComplete='off'

                    />
                    <label className='fw-bold fs-6 mb-2 mt-2'>Zip Code</label>
                    <input
                        placeholder='Zip Code'
                        type='text'
                        name='name'
                        className={'form-control form-control-solid mb-3 mb-lg-0'}
                        autoComplete='off'
                    />
                    <label className='fw-bold fs-6 mb-2 mt-2'>Address</label>
                    <input
                        placeholder='Address'
                        type='text'
                        name='name'
                        className={'form-control form-control-solid mb-3 mb-lg-0'}
                        autoComplete='off'

                    />
                </div>
            </ModalComponent>
        </>
    )
}

export default AddBillingAddressModal