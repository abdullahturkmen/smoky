import React, { useState, useEffect } from 'react'

function WidePopup(props) {

    const [coverImg, setCoverImg] = useState("https://picsum.photos/id/563/700/700")
    const [logo, setLogo] = useState("data:image/svg+xml;base64,PHN2ZyBpZD0ibG9nby03OSIgY2xhc3M9ImdyYWRpZW50IiB3aWR0aD0iMTI1IiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTI1IDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiAgPHBhdGggY2xhc3M9ImNjdXN0b20iIGQ9Ik04OC44NjEgMzcuMjI1Yy43NTkgMCAxLjIwOC0uNTc1IDEuMjA4LTEuNDc0IDAtLjkzMi0uNDgyLTEuNDc0LTEuMTkyLTEuNDc0LS40MDYgMC0uNjg4LjE4LS44OTkuNDY2aC0uMDFWMzMuMjdoLS40NHYzLjg3M2guNDR2LS4zNjhoLjAxYy4yMjguMzE0LjUwNC40NS44ODMuNDVabS0uMDMyLS4zNjljLS41OTYgMC0uODg5LS40NzEtLjg4OS0xLjEgMC0uNjA2LjI4Mi0xLjEwNS44OTQtMS4xMDUuNTMxIDAgLjc4Ni40NzcuNzg2IDEuMTA1IDAgLjYzNC0uMjU1IDEuMS0uNzkxIDEuMVptMS45ODMgMS4yMTRjLjM0MSAwIC41NTgtLjEyLjc4NS0uN2wxLjE5OC0zLjAyOGgtLjQ2NmwtLjY0IDEuNzQ1Yy0uMDg2LjIzMy0uMTg0LjU0Ny0uMTg0LjU0N2gtLjAxcy0uMTA0LS4zMTQtLjE5LS41NDdsLS42NjEtMS43NDVoLS40NzdsMS4wOTQgMi43Mi0uMTA4LjI3NmMtLjEwOC4yNzEtLjIzMy4zNDItLjQxNy4zNDJhLjYxNi42MTYgMCAwIDEtLjI5OC0uMDZoLS4wMjJ2LjM5Yy4xMi4wNDkuMjI4LjA2LjM5Ni4wNlptMy4xMDYtLjkyN2guNzM3VjMzLjI3aC0uNzM3djMuODczWm0yLjUzOS4wODJjLjg2MSAwIDEuNDUyLS42NCAxLjQ1Mi0xLjQ2OSAwLS44MjktLjU5LTEuNDY4LTEuNDUyLTEuNDY4LS44NjEgMC0xLjQ1Mi42NC0xLjQ1MiAxLjQ2OCAwIC44My41OSAxLjQ2OSAxLjQ1MiAxLjQ2OVptMC0uNTY0Yy0uNDU1IDAtLjcwNC0uMzYzLS43MDQtLjkwNSAwLS41NDEuMjQ5LS45MS43MDQtLjkxLjQ1IDAgLjcwNC4zNjkuNzA0LjkxIDAgLjU0Mi0uMjU0LjkwNS0uNzA0LjkwNVptMy4wMTkgMS40M2MuNDEyIDAgLjc2OS0uMDk3IDEuMDAyLS4zMTQuMjA2LS4xOS4zMzEtLjQ1NS4zMzEtLjg0NXYtMi41NjhoLS43MXYuMjkzaC0uMDExYy0uMTY4LS4yMzMtLjQyMi0uMzY5LS43Ny0uMzY5LS43MDMgMC0xLjIwMi41MzEtMS4yMDIgMS4zNiAwIC44NC42MDcgMS4zMjcgMS4yMjUgMS4zMjcuMzUyIDAgLjU2My0uMTQuNzI1LS4zMjVoLjAxN3YuMzA0YzAgLjM3OS0uMi41OC0uNjE4LjU4LS4zNDEgMC0uNDk4LS4xMzYtLjU1OC0uMzFoLS43MzFjLjA3NS41NDIuNTQxLjg2NyAxLjMuODY3Wm0tLjAxLTEuNzA2Yy0uMzggMC0uNjMtLjI3Ni0uNjMtLjc0OCAwLS40NjYuMjUtLjc1OC42MjQtLjc1OC40NDQgMCAuNjYxLjM0Ni42NjEuNzUzIDAgLjQxMi0uMTkuNzUzLS42NTYuNzUzWm0zLjEzNC44NGMuODYxIDAgMS40NTItLjY0IDEuNDUyLTEuNDY5IDAtLjgyOS0uNTkxLTEuNDY4LTEuNDUyLTEuNDY4LS44NjIgMC0xLjQ1Mi42NC0xLjQ1MiAxLjQ2OCAwIC44My41OSAxLjQ2OSAxLjQ1MiAxLjQ2OVptMC0uNTY0Yy0uNDU1IDAtLjcwNS0uMzYzLS43MDUtLjkwNSAwLS41NDEuMjUtLjkxLjcwNS0uOTEuNDQ5IDAgLjcwNC4zNjkuNzA0LjkxIDAgLjU0Mi0uMjU1LjkwNS0uNzA0LjkwNVptMS43OTQuNDgyaC43Mzd2LTIuNzc5aC0uNzM3djIuNzhabTAtMy4yMTJoLjczN3YtLjY2MWgtLjczN3YuNjZabTEuMjEyIDQuMTIyaC43MzdWMzYuODNoLjAxYy4xNTguMjM5LjQxMi4zOTYuODAyLjM5Ni43MTUgMCAxLjIwMy0uNTcgMS4yMDMtMS40NjkgMC0uODY3LS40NzEtMS40NjgtMS4yMDgtMS40NjhhLjk3Mi45NzIgMCAwIDAtLjgxOC40MjNoLS4wMTZ2LS4zNDdoLS43MXYzLjY5Wm0xLjM5Mi0xLjQ0Yy0uNDM5IDAtLjY3Mi0uMzMxLS42NzItLjgzNSAwLS40OTguMTg1LS44OTQuNjQ1LS44OTQuNDU1IDAgLjYzOS4zNjguNjM5Ljg5NHMtLjIzOC44MzQtLjYxMi44MzRabTIuODMuNjEyYy42OTMgMCAxLjE3LS4zMzYgMS4xNy0uODk0IDAtLjY1LS41MTUtLjc4LS45ODEtLjg3OC0uMzk1LS4wODEtLjc2My0uMTAzLS43NjMtLjM0MSAwLS4yLjE4OS0uMzEuNDc2LS4zMS4zMTUgMCAuNTA0LjExLjUzNy40MDdoLjY2NmMtLjA1NC0uNTU4LS40Ni0uOTItMS4xOTItLjkyLS42MzQgMC0xLjEzMi4yODYtMS4xMzIuODg4IDAgLjYwNi40ODcuNzQyLjk4Ni44NC4zNzkuMDc1LjczMS4xMDIuNzMxLjM2OCAwIC4xOTUtLjE4NC4zMi0uNTA5LjMyLS4zMyAwLS41NTgtLjE0MS0uNjA3LS40NjFoLS42ODJjLjA0My41OS40OTMuOTggMS4zLjk4Wm0zLjk2OC0uMDgydi0yLjc3OWgtLjczN3YxLjYwNGMwIC4zNjgtLjIxMi42MjgtLjU1OC42MjgtLjMxNCAwLS40NjEtLjE3OS0uNDYxLS41MDR2LTEuNzI4aC0uNzMxdjEuODUzYzAgLjYwNy4zNDcgMS4wMDIuOTY0IDEuMDAyLjM5IDAgLjYwNy0uMTQ2Ljc5Ny0uNGguMDE2di4zMjRoLjcxWm0uNDc2IDBoLjczN1YzNS41M2MwLS4zNjkuMi0uNjA3LjQ5OC0uNjA3LjI3MSAwIC40MjguMTYzLjQyOC40Nzd2MS43NDRoLjczN1YzNS41M2MwLS4zNjkuMTktLjYwNy40OTktLjYwNy4yNzEgMCAuNDI4LjE2My40MjguNDc3djEuNzQ0aC43Mzd2LTEuODY5YzAtLjYwNy0uMzMxLS45ODYtLjkxNi0uOTg2LS4zNTIgMC0uNjQ1LjE4NC0uODM0LjQ4OGgtLjAxMWEuODMuODMgMCAwIDAtLjc3LS40ODguOTA4LjkwOCAwIDAgMC0uODA3LjQ1aC0uMDE2di0uMzc0aC0uNzF2Mi43OFoiIGZpbGw9IiNFNTcwOEMiPjwvcGF0aD4gIDxwYXRoIGQ9Ik0xMTguNDgxIDIuMTQ5YzAtMS4xODMuOTU5LTIuMTQzIDIuMTQyLTIuMTQzaDEuNDI5YTIuMTQyIDIuMTQyIDAgMCAxIDAgNC4yODZoLTEuNDI5YTIuMTQyIDIuMTQyIDAgMCAxLTIuMTQyLTIuMTQzWk01OC40OSAxNC4yOWMwIDcuODg4LTYuMzk0IDE0LjI4My0xNC4yODMgMTQuMjgzLTcuODg4IDAtMTQuMjgzLTYuMzk1LTE0LjI4My0xNC4yODNDMjkuOTI0IDYuNCAzNi4zMTkuMDA3IDQ0LjIwNy4wMDcgNTIuMDk2LjAwNyA1OC40OSA2LjQgNTguNDkgMTQuMjlabS0zMS4zNTItLjA3MWMuNzkgMCAxLjQzNi42NCAxLjM1NyAxLjQyNkExNC4yODMgMTQuMjgzIDAgMSAxIDEyLjg1Ny4wMDdjLjc4NS0uMDggMS40MjYuNTY4IDEuNDI2IDEuMzU2VjEyLjc5YzAgLjc5LjY0IDEuNDI5IDEuNDI5IDEuNDI5aDExLjQyNlpNNzguNDg3IDMxLjQzYTQuMjg1IDQuMjg1IDAgMSAxIDAgOC41N2gtNy4xNDFhNC4yODUgNC4yODUgMCAwIDEgMC04LjU3aDcuMTQxWm0tNC4yODUtMi44NTdjNy44ODkgMCAxNC4yODQtNi4zOTUgMTQuMjg0LTE0LjI4M2ExNC4yMiAxNC4yMiAwIDAgMC0xLjc4OS02LjkyNWwyLjM2LTIuMzZhMi45MjggMi45MjggMCAxIDAtNC4xNDItNC4xNGwtMi4wNiAyLjA2QTE0LjIyIDE0LjIyIDAgMCAwIDc0LjIwMS4wMDZDNjYuMzE0LjAwNyA1OS45MiA2LjQgNTkuOTIgMTQuMjljMCA3Ljg4OCA2LjM5NSAxNC4yODMgMTQuMjgzIDE0LjI4M1ptNDQuMjc5LTE0LjI4M2MwIDcuODg4LTYuMzk1IDE0LjI4My0xNC4yODQgMTQuMjgzLTcuODg4IDAtMTQuMjgzLTYuMzk1LTE0LjI4My0xNC4yODMgMC03Ljg5IDYuMzk1LTE0LjI4MyAxNC4yODMtMTQuMjgzIDcuODg5IDAgMTQuMjg0IDYuMzk0IDE0LjI4NCAxNC4yODNaIiBmaWxsPSJ1cmwoI2dyYWRpZW50X2ExMjM0KSI+PC9wYXRoPiAgPGRlZnM+ICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnRfYTEyMzQiIHgxPSIwIiB5MT0iMTYiIHgyPSIxMTkiIHkyPSIxNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPiAgICAgIDxzdG9wIGNsYXNzPSJjY29tcGxpMSIgc3RvcC1jb2xvcj0iIzY0QzJEQiI+PC9zdG9wPiAgICAgIDxzdG9wIGNsYXNzPSJjY29tcGxpMiIgb2Zmc2V0PSIuMzA3IiBzdG9wLWNvbG9yPSIjNzQ3NkVEIj48L3N0b3A+ICAgICAgPHN0b3AgY2xhc3M9ImNjdXN0b20iIG9mZnNldD0iLjYwNCIgc3RvcC1jb2xvcj0iI0M5OTRERiI+PC9zdG9wPiAgICAgIDxzdG9wIGNsYXNzPSJjY29tcGxpMSIgb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTU2RjhDIj48L3N0b3A+ICAgIDwvbGluZWFyR3JhZGllbnQ+ICA8L2RlZnM+PC9zdmc+")

    useEffect(() => {
        if (props.image.length > 0) {
            setCoverImg(props.image)
        }
    }, [props])

    useEffect(() => {
        if (props.logo.length > 0) {
            setLogo(props.logo)
        }
    }, [props])

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
                                    <div className='m-2 px-2 py-5 h-100 d-flex flex-column justify-content-center'>
                                        <div className='d-flex align-items-center'>
                                            <img src={logo} alt='' className='w-50 m-auto' />
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
                                    <img src={coverImg} alt='' className='w-100 h-100 object-fit-cover' />
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