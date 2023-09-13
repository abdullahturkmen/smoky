import React,{useState} from 'react'

function ThinPopup(props) {
    
    return (
        <>
        <div className='bd-example bd-example-modal bg-light-primary'>
            <div className="modal position-relative d-block" tabindex="-1" id="exampleModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="position-relative">
                            
                            <button type="button" className="btn-close position-absolute end-0 m-2 bg-dark text-white d-flex justify-content-center align-items-center font-weight-bold" data-bs-dismiss="modal" aria-label="Close">x</button>
                        </div>
                        <div className="modal-body">
                            <div className='m-5 p-5'>
                            <div className='d-flex align-items-center mb-7'>
                                <img src={props.image} alt='' className='w-50 m-auto' />
                            </div>
                            <h1 className="modal-title w-100 text-center fs-3x fw-bold">{props.title}</h1>
                            <sub className="modal-title d-none">{props.subTitle}</sub>
                            <p className='w-100 text-center fs-5 fw-bold mt-3 mb-7'>{props.description}</p>
                            <button className='btn btn-dark w-100 mt-5'> {props.buttonText} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ThinPopup