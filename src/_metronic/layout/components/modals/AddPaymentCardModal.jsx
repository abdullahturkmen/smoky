import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import InputMask from 'react-input-mask';
import ModalComponent from './ModalComponent';
function AddPaymentCardModal({ selectedCard, onClose }) {
    const maskGenerator = createDefaultMaskGenerator('9999 9999 9999 9999');

    var obj = {
        number: selectedCard ? selectedCard?.number : '',
        expiry: selectedCard ? selectedCard?.expiry : '',
        cvc: selectedCard ? selectedCard?.cvc : '',
        name: selectedCard ? selectedCard?.name : '',
        focus: '',
        isCardFlipped: false,
    }
    // const [state, setState] = useState({
    //     number: selectedCard ? selectedCard?.number : '12345',
    //     expiry: '',
    //     cvc: '',
    //     name: '',
    //     focus: '',
    //     isCardFlipped: false,
    // });

    useEffect(() => {
        console.log('selectedCard--', selectedCard)        
    }, [selectedCard]);

    const inputChange = (evt) => {
        const { name, value } = evt.target;

        if (name === 'number' && value.length > 16) {
            return;
        }
        obj[name] = value
        // setState((prev) => ({ ...prev, [name]: value }));
    }

    const inputFocus = (evt) => {
        obj['focus'] = evt.target.name
        // setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    const cvvFocus = () => {
        obj['isCardFlipped'] = true
        obj['focus'] = 'cvc'
        // setState({
        //     ...state,
        //     isCardFlipped: true,
        //     focus: 'cvc',
        // });
    };

    const cvvBlur = () => {
        obj['isCardFlipped'] = false
        obj['focus'] = ''
        // setState({
        //     ...state,
        //     isCardFlipped: false,
        //     focus: '',
        // });
    };

    const expiryFocus = () => {
        obj['isCardFlipped'] = false
        obj['focus'] = 'expiry'
        // setState({
        //     ...state,
        //     isCardFlipped: false,
        //     focus: 'expiry',
        // });
    };
    const setCardNumber = (value) => {
        obj['number'] = value
        // setState((prev) => ({ ...prev, ['number']: value }));
    }
    const addCard = () => {
        console.log('number', obj)
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
    // useEffect(() => {
    //     console.log('selectedCard', selectedCard)
    //     if (selectedCard) {
    //         setState({
    //             number: selectedCard.cardNumber,
    //             expiry: selectedCard.expiration,
    //             cvc: selectedCard.cvc,
    //             name: selectedCard.name,
    //             focus: '',
    //             isCardFlipped: false,
    //         });

    //     }
    // }, [selectedCard]);

    return (
        <>
            <ToastContainer />
            <ModalComponent modalClass={'modal-lg'} ids={'AddPaymentCardModal'} onSubmit={addCard} title={'Add Card'} submitText={'Submit'} submitBg={'btn btn-primary'} discardText={'Discard'} discardBg={'btn btn-light'}>
                <div className="menu-item">
                    <div className='d-flex flex-column flex-lg-row align-items-center'>

                        <div className='col-12 col-lg-6'>
                            <Cards
                                number={obj.number}
                                expiry={obj.expiry}
                                cvc={obj.cvc}
                                name={obj.name}
                                focused={obj.focus}
                                isCardFlipped={obj.isCardFlipped}
                            />
                        </div>
                        <form className='col-12 col-lg-6'>

                            <label className='required fw-bold fs-6 mb-2 mt-10 mt-lg-0'>Card Number</label>


                            <MaskedInput
                                maskGenerator={maskGenerator}
                                name='number'
                                placeholder="Card Number"
                                value={obj.number}
                                onChange={setCardNumber}
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
                                value={obj.name}
                                onChange={inputChange}
                            />

                            <label className='required fw-bold fs-6 mb-2 mt-4'>CVV</label>

                            <InputMask
                                mask="999"
                                maskChar=" "
                                type="text"
                                name="cvc"
                                placeholder="CVV/CVC"
                                value={obj.cvc}
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
                                value={obj.expiry}
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