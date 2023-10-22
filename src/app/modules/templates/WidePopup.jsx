import React, { useState } from 'react'

function WidePopup(props) {

    return (
        <>
            <div className='bd-example bd-example-modal bg-light-primary'>
                <div className="modal position-relative d-block " tabIndex="-1" id="exampleModal">
                    <div className="modal-dialog ">
                        <div className="modal-content overflow-hidden rounded-3">
                            <div className="position-relative">
                                <button type="button" className="btn-close position-absolute end-0 m-2 pb-2 bg-dark text-white d-flex justify-content-center align-items-center font-weight-bold" style={{ zIndex: '9999' }} data-bs-dismiss="modal" aria-label="Close">x</button>
                            </div>
                            <div className="modal-body d-flex p-0">
                                <div className='w-100'>
                                    <div className='m-2 p-2 h-100 d-flex flex-column justify-content-center'>
                                        <div className='d-flex align-items-center'>
                                            <img src={props.logo} alt='' className='w-50 m-auto' />
                                        </div>
                                        <h1 className="modal-title w-100 text-center fs-2x fw-bold">{props.title}</h1>
                                        <span className="modal-title text-center d-block">{props.subTitle}</span>
                                        <div className='d-flex justify-content-center'>
                                            <button className='btn btn-dark  mt-5'>{props.buttonText}</button>
                                        </div>
                                        <p style={{ fontSize: '10px' }} className='text-center text-muted mt-4'>{props.disclaimer}</p>
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <img src={props.image} alt='' className='w-100 h-100 object-fit-cover' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WidePopup