import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Onboarding} from './components/Onboarding'
import {Welcome} from './components/Welcome'
import { Congrats } from './components/Congrats'

const onboardingBreadCrumbs: Array<PageLink> = [
  {
    title: 'Welcome',
    path: '/onboarding/welcome',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Onboarding',
    path: '/onboarding/steps',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Congrats',
    path: '/onboarding/congrats',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const OnboardingPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='/welcome'
        element={
          <>
            <PageTitle breadcrumbs={onboardingBreadCrumbs}>Welcome</PageTitle>
            <Welcome />
          </>
        }
      />
       <Route
        path='/steps'
        element={
          <>
            <PageTitle breadcrumbs={onboardingBreadCrumbs}>Onboarding</PageTitle>
            <Onboarding />
          </>
        }
      />
      <Route
        path='/congrats'
        element={
          <>
            <PageTitle breadcrumbs={onboardingBreadCrumbs}>Congrats</PageTitle>
            <Congrats />
          </>
        }
      />
      <Route index element={<Navigate to='/onboarding/welcome' />} />
    </Route>
  </Routes>
)

export default OnboardingPage
