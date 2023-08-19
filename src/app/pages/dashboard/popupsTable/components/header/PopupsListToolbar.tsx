import {KTIcon} from '../../../../../../_metronic/helpers'
import {PopupsListFilter} from './PopupsListFilter'

const PopupsListToolbar = () => {
 

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTIcon iconName='exit-up' className='fs-2' />
        Export
      </button>
      {/* end::Export */}

     

      <PopupsListFilter />
    </div>
  )
}

export {PopupsListToolbar}
