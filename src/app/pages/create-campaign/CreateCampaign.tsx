import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Vertical} from './components/Vertical'

const wizardsBreadCrumbs: Array<PageLink> = [
  {
    title: '',
    path: '/create-campaign',
    isSeparator: false,
    isActive: false,
  },
 
]

const CreateCampaign = () => (
  <Routes>
    <Route element={<Vertical />}>
      <Route
        path='/'
        element={
          <>
            <Vertical />
          </>
        }
      />
      <Route index element={<Navigate to='/create-campaign' />} />
    </Route>
  </Routes>
)

export default CreateCampaign
