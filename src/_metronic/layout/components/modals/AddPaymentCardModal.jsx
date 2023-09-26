import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import InputMask from 'react-input-mask';
import ModalComponent from './ModalComponent';
function AddPaymentCardModal() {
    const maskGenerator = createDefaultMaskGenerator('9999 9999 9999 9999');

    const [cardInfo, setCardInfo] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focused: '',
        isCardFlipped: false,
    });


    const inputChange = (evt) => {
        const { name, value } = evt.target;

        if (name === 'number' && value.length > 16) {
            return;
        }
        setCardInfo((prev) => ({ ...prev, [name]: value }));
    }

    const inputFocus = (evt) => {
        setCardInfo((prev) => ({ ...prev, focused: evt.target.name }));
    }

    const cvcFocus = () => {

        setCardInfo({
            ...cardInfo,
            isCardFlipped: true,
            focused: 'cvc',
        });
    };

    const cvcBlur = () => {

        setCardInfo({
            ...cardInfo,
            isCardFlipped: false,
            focused: '',
        });
    };

    const expiryFocus = () => {

        setCardInfo({
            ...cardInfo,
            isCardFlipped: false,
            focused: 'expiry',
        });
    };
    const setnumber = (value) => {
        setCardInfo((prev) => ({ ...prev, ['number']: value }));
    }
    const addCard = () => {

        toast.success('Added card', {
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
            <ModalComponent modalClass={'modal-lg'} ids={'AddPaymentCardModal'} onSubmit={addCard} title={'Add Card'} submitText={'Submit'} submitBg={'btn btn-primary'} discardText={'Discard'} discardBg={'btn btn-light'}>
                <div className="menu-item">
                    <div className='d-flex flex-column flex-lg-row align-items-center'>

                        <div className='col-12 col-lg-6'>

                            <Cards
                                number={cardInfo.number}
                                expiry={cardInfo.expiry}
                                cvc={cardInfo.cvc}
                                name={cardInfo.name}
                                focused={cardInfo.focused}
                                isCardFlipped={cardInfo.isCardFlipped}
                            />
                        </div>
                        <form className='col-12 col-lg-6'>

                            <label className='required fw-bold fs-6 mb-2 mt-10 mt-lg-0'>Card Number</label>


                            <MaskedInput
                                maskGenerator={maskGenerator}
                                name='number'
                                placeholder="Card Number"
                                value={cardInfo.number}
                                onChange={setnumber}
                                onFocus={inputFocus}
                                className={'form-control form-control-solid mb-3 mb-lg-0'}
                            />


                            <label className='required fw-bold fs-6 mb-2 mt-4'>Name</label>
                            <input
                                placeholder='Name'
                                type='text'
                                name='name'
                                className={'form-control form-control-solid mb-3 mb-lg-0'}
                                autoComplete='off'
                                value={cardInfo.name}
                                onChange={inputChange}
                            />

                            <label className='required fw-bold fs-6 mb-2 mt-4'>cvc</label>

                            <InputMask
                                mask="999"
                                maskChar=" "
                                type="text"
                                name="cvc"
                                placeholder="CVV/CVC"
                                value={cardInfo.cvc}
                                onChange={inputChange}
                                onFocus={cvcFocus}
                                onBlur={cvcBlur}
                                className={'form-control form-control-solid mb-3 mb-lg-0'}
                                autoComplete="off"
                            />
                            <label className="required fw-bold fs-6 mb-2 mt-4">Expiry</label>
                            <InputMask
                                mask="99/99"
                                maskChar=" "
                                type="text"
                                name="expiry"
                                placeholder="MM/YY"
                                value={cardInfo.expiry}
                                onChange={inputChange}
                                onFocus={expiryFocus}
                                className={'form-control form-control-solid mb-3 mb-lg-0'}
                                autoComplete="off"
                            />
                        </form>
                    </div>
                </div>
            </ModalComponent>

        </>
    )
}

export default AddPaymentCardModal