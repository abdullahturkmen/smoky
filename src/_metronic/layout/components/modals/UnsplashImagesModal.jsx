import { React } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ModalComponent from './ModalComponent'
function UnsplashImagesModal() {

  return (
    <>
      <ToastContainer />

      <ModalComponent ids={'UnsplashImagesModal'} title={'Unsplash Images'} discardText={'Cancel'} discardBg={'btn btn-light'}>
        <div className="menu-item">
          resimler eklenecek
        </div>
      </ModalComponent>
    </>
  )
}

export default UnsplashImagesModal