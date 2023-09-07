import ModalComponent from './ModalComponent';
function EditDeactivateAccount() {
    return (
        <>
            <ModalComponent ids={'EditDeactivateAccount'}  title={'Are you sure?'} submitText={'Yes, Deactivate My Account'} submitBg={'btn btn-primary'} discardText={'Discard'} discardBg={'btn btn-light'}>
                <div className="menu-item">
                    Your profile will remain closed until you activate it again!
                </div>
            </ModalComponent>
        </>
    )
}

export default EditDeactivateAccount