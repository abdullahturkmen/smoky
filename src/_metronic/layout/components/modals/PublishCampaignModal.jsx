import { React } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ModalComponent from './ModalComponent'
function PublishCampaignModal() {

  const publishCampaign = () => {
    
  }


  return (
    <>
      <ToastContainer />

      <ModalComponent ids={'publishCampaignModal'} onSubmit={publishCampaign} title={'Publish Campaign'} submitText={'Publish'} submitBg={'btn btn-primary'} discardText={'Cancel'} discardBg={'btn btn-light'}>
        <div className="menu-item">
        Untitled campaign will be live on your website.
        </div>
      </ModalComponent>
    </>
  )
}

export default PublishCampaignModal