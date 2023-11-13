import { useEffect } from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../_metronic/assets/ts/components'
import {KTIcon, QUERIES} from '../../../../../../_metronic/helpers'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteUser, getUserById } from '../../core/_requests'
import { useDispatch } from 'react-redux';
import { setSelectedUser } from '../../../../../../store/reducers/accountSettingsReducer'



const UserActionsCell= ({id}) => {
  const dispatch = useDispatch();
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const openEditModal = async () => {
    try {
      const userData = await getUserById(id);
      if (userData) {
        dispatch(setSelectedUser(userData));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteItem = useMutation(() => deleteUser(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
    },
  })

  return (
    <>
      <a
        href='#'
        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        <KTIcon iconName='dots-horizontal' className='fs-2 m-0' />
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3'   data-bs-toggle="modal"
                      data-bs-target="#EditUserModal" onClick={openEditModal}>
            Edit 
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            onClick={async () => await deleteItem.mutateAsync()}
          >
            Delete
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  )
}

export {UserActionsCell}
