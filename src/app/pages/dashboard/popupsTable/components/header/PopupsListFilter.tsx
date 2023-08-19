import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../_metronic/assets/ts/components'
import {initialQueryState, KTIcon} from '../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {useListView} from '../../core/ListViewProvider'

const PopupsListFilter = () => {
  const {updateState} = useQueryRequest()
  const {isLoading} = useQueryResponse()
  const [role, setRole] = useState<string | undefined>()
  const [lastLogin, setLastLogin] = useState<string | undefined>()

  const {setItemIdForUpdate} = useListView()
  const openAddPopupModal = () => {
    setItemIdForUpdate(null)
  }

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({filter: undefined, ...initialQueryState})
  }

  const filterData = () => {
    updateState({
      filter: {role, last_login: lastLogin},
      ...initialQueryState,
    })
  }

  return (
    <>
      {/* begin::Filter Button */}
      <button
        disabled={isLoading}
        type='button'
        className='btn btn-light-primary me-3'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        <KTIcon iconName='plus' className='fs-2' />
        Create Campaign
      </button>
      {/* end::Filter Button */}
      {/* begin::SubMenu */}
      <div className='menu menu-sub menu-sub-dropdown w-300px w-md-325px' data-kt-menu='true'>
        {/* begin::Separator */}
        <div className='separator border-gray-200'></div>
        {/* end::Separator */}

        {/* begin::Content */}
        <div className='px-7 py-5' data-kt-user-table-filter='form' onClick={openAddPopupModal}>
          <a href='#' className='btn btn-flex btn-primary px-6 w-100 mb-3'>
          <KTIcon iconName='wrench' className='fs-2' />
            <span className='d-flex flex-column align-items-start ms-2'>
              <span className='fs-3 fw-bolder'>Custom Campaign</span>
              <span className='fs-7'>Some description</span>
            </span>
          </a>

          <a href='#' className='btn btn-flex btn-primary px-6 w-100'>
          <KTIcon iconName='document' className='fs-2' />
            <span className='d-flex flex-column align-items-start ms-2'>
              <span className='fs-3 fw-bolder'>One Click Setup</span>
              <span className='fs-7'>Some description</span>
            </span>
          </a>
        </div>
        {/* end::Content */}
      </div>
      {/* end::SubMenu */}
    </>
  )
}

export {PopupsListFilter}
