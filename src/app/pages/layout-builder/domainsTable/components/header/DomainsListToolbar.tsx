import {KTIcon} from '../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {DomainsListFilter} from './DomainsListFilter'

const DomainsListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddDomainModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <DomainsListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTIcon iconName='exit-up' className='fs-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      <button type='button' className='btn btn-primary' onClick={openAddDomainModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add Domain
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {DomainsListToolbar}
