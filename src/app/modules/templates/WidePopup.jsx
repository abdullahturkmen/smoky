import React,{useState} from 'react'

function WidePopup(props) {
    
    return (
        <>
        <div className='bd-example bd-example-modal bg-light-primary'>
            <div className="modal position-relative d-block" tabindex="-1" id="exampleModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default WidePopup