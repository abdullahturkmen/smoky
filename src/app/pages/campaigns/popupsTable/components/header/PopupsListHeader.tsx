import {useListView} from '../../core/ListViewProvider'
import {PopupsListToolbar} from './PopupsListToolbar'
import {PopupsListGrouping} from './PopupsListGrouping'
import {PopupsListSearchComponent} from './PopupsListSearchComponent'

const PopupsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <PopupsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <PopupsListGrouping /> : <PopupsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {PopupsListHeader}
