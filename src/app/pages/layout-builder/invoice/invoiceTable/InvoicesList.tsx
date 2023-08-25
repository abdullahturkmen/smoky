import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {InvoicesListHeader} from './components/header/InvoicesListHeader'
import {InvoicesTable} from './table/InvoicesTable'
import { KTCard } from '../../../../../_metronic/helpers'

const InvoicesList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <InvoicesListHeader />
        <InvoicesTable />
      </KTCard>
    </>
  )
}

const InvoicesListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <InvoicesList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {InvoicesListWrapper}
