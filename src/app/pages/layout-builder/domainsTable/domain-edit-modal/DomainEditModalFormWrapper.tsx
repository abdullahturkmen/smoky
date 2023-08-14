import {useQuery} from 'react-query'
import {DomainEditModalForm} from './DomainEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getDomainById} from '../core/_requests'

const DomainEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getDomainById(itemIdForUpdate)
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
    return <DomainEditModalForm isDomainLoading={isLoading} user={{id: undefined}} />
  }

  if (!isLoading && !error && user) {
    return <DomainEditModalForm isDomainLoading={isLoading} user={user} />
  }

  return null
}

export {DomainEditModalFormWrapper}
