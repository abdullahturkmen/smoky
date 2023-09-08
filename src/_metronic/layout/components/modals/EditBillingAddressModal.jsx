import { React, useState,useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ModalComponent from './ModalComponent'
import countries from '../../../helpers/AllCountry';
import Select from "react-select";
function EditBillingAddressModal({editedAddressProp}) {
    const [editedAddress, setEditedAddress] = useState({
        country: '',
        city: '',
        zip: '',
        address: '',
        id:'',
        state:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedAddress({
            ...editedAddress,
            [name]: value,
        });
    };

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

    useEffect(() => {
        console.log('editedAddressProp',editedAddressProp)
        console.log('editedAddress', editedAddress)
        // Herhangi bir ek efekt gerekiyorsa burada kullanabilirsiniz.
        if(editedAddressProp){
            setEditedAddress(editedAddressProp)
        }
        
      }, [editedAddressProp]);

    return (
        <>
            <ToastContainer />
            <ModalComponent ids={'EditBillingAddressModal'} onSubmit={addAddress} title={'Edit Address'} submitText={'Submit'} submitBg={'btn btn-primary'} discardText={'Discard'} discardBg={'btn btn-light'}>
                <div className="menu-item">
                    <label className='fw-bold fs-6 mb-2'>Country</label>
                    <Select
                        options={countries}
                        placeholder="Country"
                        className="form-control form-control-solid p-0"
                        name="country"
                        value={editedAddress.country}
                        onChange={(value) => setEditedAddress({ ...editedAddress, country: value })}
                    />

                    <label className='fw-bold fs-6 mb-2 mt-2'>City</label>
                    <input
                        placeholder='City'
                        type='text'
                        name='city'
                        className={'form-control form-control-solid mb-3 mb-lg-0'}
                        autoComplete='off'
                        value={editedAddress.city}
                        onChange={handleChange}
                    />
                    <label className='fw-bold fs-6 mb-2 mt-2'>Zip Code</label>
                    <input
                        placeholder='Zip Code'
                        type='text'
                        name='name'
                        className={'form-control form-control-solid mb-3 mb-lg-0'}
                        autoComplete='off'
                        value={editedAddress.zip}
                        onChange={handleChange}
                    />
                    <label className='fw-bold fs-6 mb-2 mt-2'>Address</label>
                    <input
                        placeholder='Address'
                        type='text'
                        name='name'
                        className={'form-control form-control-solid mb-3 mb-lg-0'}
                        autoComplete='off'
                        value={editedAddress.address}
                        onChange={handleChange}

                    />
                </div>
            </ModalComponent>
        </>
    )
}

export default EditBillingAddressModal