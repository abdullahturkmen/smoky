import {KTIcon} from '../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {PopupsListFilter} from './PopupsListFilter'

const PopupsListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddPopupModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <PopupsListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTIcon iconName='exit-up' className='fs-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      <button type='button' className='btn btn-primary' onClick={openAddPopupModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add Popup
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {PopupsListToolbar}
