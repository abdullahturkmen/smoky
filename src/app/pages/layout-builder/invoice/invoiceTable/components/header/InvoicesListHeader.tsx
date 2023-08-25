import {useListView} from '../../core/ListViewProvider'
import {InvoicesListToolbar} from './InvoicesListToolbar'
import {InvoicesListGrouping} from './InvoicesListGrouping'
import {InvoicesListSearchComponent} from './InvoicesListSearchComponent'

const InvoicesListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <InvoicesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <InvoicesListGrouping /> : <InvoicesListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {InvoicesListHeader}
