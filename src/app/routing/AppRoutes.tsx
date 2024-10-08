/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import OnboardingPage from '../modules/onboarding/OnboardingPage'
import {Logout, AuthPage, useAuth} from '../modules/auth'
import {App} from '../App'
import CreateCampaign from '../pages/create-campaign/CreateCampaign'
import { PricingScreen } from '../pages/pricing/PricingScreen'


/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
  const {currentUser} = useAuth()
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          <Route path='pricing-table' element={<PricingScreen />} />

          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route path='onboarding/*' element={<OnboardingPage />} />
              <Route path='create-campaign/*' element={<CreateCampaign />} />
              
              <Route index element={<Navigate to='/campaigns' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}
