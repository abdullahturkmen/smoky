import React,{useState} from 'react'

function WidePopup(props) {
    
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
                            <h1 className="modal-title w-100 text-center">{props.title}</h1>
                            <div className='d-flex align-items-center'>
                                <img src={props.image} alt='' className='w-75 m-auto' />
                            </div>
                            <sub className="modal-title">{props.subTitle}</sub>
                            <p>{props.description}</p>
                            <button className='btn btn-primary'> {props.buttonText} </button>
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