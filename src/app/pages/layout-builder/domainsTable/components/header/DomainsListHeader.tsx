import {useListView} from '../../core/ListViewProvider'
import {DomainsListToolbar} from './DomainsListToolbar'
import {DomainsListGrouping} from './DomainsListGrouping'
import {DomainsListSearchComponent} from './DomainsListSearchComponent'

const DomainsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <DomainsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <DomainsListGrouping /> : <DomainsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {DomainsListHeader}
