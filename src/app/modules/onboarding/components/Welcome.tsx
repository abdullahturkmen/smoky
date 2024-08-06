import React, {FC, useEffect, useRef, useState} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Form, Formik, FormikValues} from 'formik'
import {createAccountSchemas, ICreateAccount, inits} from './CreateAccountOnboardingHelper'
import {Link} from 'react-router-dom'
import OnboardingFooter from './footer/OnboardingFooter'
import OnboardingHeader from './header/OnboardingHeader'

const Welcome: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>
      <div className='d-flex flex-center flex-column flex-row-fluid onboarding-w-60 p-10 order-2 order-lg-1'>
        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-15 w-100'
          id='kt_create_account_stepper'
        >
          <div className='d-flex flex-center flex-column'>
            <h2 className='fw-bolder d-flex align-items-center text-dark mb-3 onboarding-main-title'>
              Welcome to Smoky.com!
            </h2>
            <div className='text-gray-400 fw-bold mb-4 onboarding-second-title'>
              Let’s find out how we can help you in less than a minute.
            </div>
            <div className='d-block m-auto mt-5'>
              <Link to='/onboarding/steps' className='btn btn-lg btn-primary onboarding-second-title'>
                Get Started
                <KTIcon iconName='arrow-right' className='fs-4 me-1' />
              </Link>
            </div>
          </div>
        </div>
       <OnboardingFooter/>
      </div>
      <div className='d-none d-lg-flex flex-lg-row-fluid w-lg-25 bgi-size-cover bgi-position-center order-1 order-lg-2 bg-secondary'>
        <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
          <h1 className='text-white'>
            <img
              className='w-100 rounded'
              src={toAbsoluteUrl('/media/logos/Smoky-Logo.png')}
              alt='Smoky'
            />
          </h1>
        </div>
      </div>
      <OnboardingHeader/>
    </div>
  )
}

export {Welcome}
