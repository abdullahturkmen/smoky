import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {PopupsListHeader} from './components/header/PopupsListHeader'
import {PopupsTable} from './table/PopupsTable'
import {PopupEditModal} from './popup-edit-modal/PopupEditModal'
import { KTCard } from '../../../../_metronic/helpers'

const PopupsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <PopupsListHeader />
        <PopupsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <PopupEditModal />}
    </>
  )
}

const PopupsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <PopupsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {PopupsListWrapper}
