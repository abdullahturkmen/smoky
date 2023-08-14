import {useQuery} from 'react-query'
import {PopupEditModalForm} from './PopupEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getPopupById} from '../core/_requests'

const PopupEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getPopupById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  if (!itemIdForUpdate) {
    return <PopupEditModalForm isPopupLoading={isLoading} user={{id: undefined}} />
  }

  if (!isLoading && !error && user) {
    return <PopupEditModalForm isPopupLoading={isLoading} user={user} />
  }

  return null
}

export {PopupEditModalFormWrapper}
