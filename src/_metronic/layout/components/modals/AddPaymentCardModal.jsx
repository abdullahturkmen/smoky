import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import InputMask from 'react-input-mask';
function AddPaymentCardModal() {
    const maskGenerator = createDefaultMaskGenerator('9999 9999 9999 9999');
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

    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
        isCardFlipped: false,
    });

    const inputChange = (evt) => {
        const { name, value } = evt.target;

        if (name === 'number' && value.length > 16) {
            return;
        }

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const inputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    const cvvFocus = () => {
        setState({
            ...state,
            isCardFlipped: true,
            focus: 'cvc',
        });
    };

    const cvvBlur = () => {
        setState({
            ...state,
            isCardFlipped: false,
            focus: '',
        });
    };

    const expiryFocus = () => {
        setState({
            ...state,
            isCardFlipped: false,
            focus: 'expiry',
        });
    };
    const setCardNumber = (value) => {
        setState((prev) => ({ ...prev, ['number']: value }));
    }
    return (
        <>
            <ToastContainer />
            <div class="modal modal-lg fade" id="AddPaymentCardModal" aria-hidden="true" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title">Add Card</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="menu-item">
                                <div className='d-flex flex-column flex-lg-row align-items-center'>
                                    
                                    <div className='col-12 col-lg-6'>
                                        <Cards
                                            number={state.number}
                                            expiry={state.expiry}
                                            cvc={state.cvc}
                                            name={state.name}
                                            focused={state.focus}
                                            isCardFlipped={state.isCardFlipped}
                                        />
                                    </div>
                                    <form className='col-12 col-lg-6'>

                                        <label className='required fw-bold fs-6 mb-2 mt-10 mt-lg-0'>Card Number</label>


                                        <MaskedInput
                                            maskGenerator={maskGenerator}
                                            name='number'
                                            placeholder="Card Number"
                                            value={state.number}
                                            onChange={setCardNumber}
                                            onFocus={inputFocus}
                                            className={'form-control form-control-solid mb-3 mb-lg-0'}
                                        />
                                        {/* <input
                                            type='tel'
                                            name='number'
                                            placeholder="Card Number"
                                            value={state.number}
                                            onChange={inputChange}
                                            onFocus={inputFocus}
                                            className={'form-control form-control-solid mb-3 mb-lg-0'}
                                        /> */}

                                        <label className='required fw-bold fs-6 mb-2 mt-4'>Name</label>
                                        <input
                                            placeholder='Name'
                                            type='text'
                                            name='name'
                                            className={'form-control form-control-solid mb-3 mb-lg-0'}
                                            autoComplete='off'
                                            value={state.name}
                                            onChange={inputChange}
                                        />

                                        <label className='required fw-bold fs-6 mb-2 mt-4'>CVV</label>

                                        <InputMask
                                            mask="999"
                                            maskChar=" "
                                            type="text"
                                            name="cvc"
                                            placeholder="CVV/CVC"
                                            value={state.cvc}
                                            onChange={inputChange}
                                            onFocus={cvvFocus}
                                            onBlur={cvvBlur}
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
                                            value={state.expiry}
                                            onChange={inputChange}
                                            onFocus={expiryFocus}
                                            className={'form-control form-control-solid mb-3 mb-lg-0'}
                                            autoComplete="off"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
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