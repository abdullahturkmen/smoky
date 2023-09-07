import React from 'react'
import EditAccessModal from './EditAccessModal'
import EditDeactivateModal from './EditDeactivateModal'
import AddPaymentCardModal from './AddPaymentCardModal'
import EditDeactivateAccount from './EditDeactivateAccount'
import DeletePaymentCardModal from './DeletePaymentCardModal'
import DeleteBillingAddressModal from './DeleteBillingAddressModal'
import AddBillingAddressModal from './AddBillingAddressModal'
function Modals() {
  return (
    <>
    <EditAccessModal/>
    <EditDeactivateModal/>
    <AddPaymentCardModal/>
    <EditDeactivateAccount/>
    <DeletePaymentCardModal/>
    <DeleteBillingAddressModal/>
    <AddBillingAddressModal/>
    </>
  )
}

export default Modals