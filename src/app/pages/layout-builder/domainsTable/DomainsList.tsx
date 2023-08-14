import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {DomainsListHeader} from './components/header/DomainsListHeader'
import {DomainsTable} from './table/DomainsTable'
import {DomainEditModal} from './domain-edit-modal/DomainEditModal'
import { KTCard } from '../../../../_metronic/helpers'

const DomainsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <DomainsListHeader />
        <DomainsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <DomainEditModal />}
    </>
  )
}

const DomainsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <DomainsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {DomainsListWrapper}
