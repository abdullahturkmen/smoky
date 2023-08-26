import React, {FC, useEffect, useRef, useState} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Form, Formik, FormikValues} from 'formik'
import {createAccountSchemas, ICreateAccount, inits} from './CreateAccountOnboardingHelper'
import {Link} from 'react-router-dom'
import OnboardingHeader from './header/OnboardingHeader'

const Congrats: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>
      <div className='d-flex flex-center flex-column flex-row-fluid'>
        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-15 w-100'
          id='kt_create_account_stepper'
        >
          <div className='d-flex flex-center flex-column'>
            <h2 className='fw-bolder d-flex align-items-center text-dark mb-3 onboarding-main-title'>
            Congrats!
            </h2>
            <div className='text-gray-400 fw-bold mb-4 onboarding-second-title'>
            Welcome to the start of a beautiful business adventure
            </div>
            <div className='d-block m-auto mt-5'>
              <Link to='/campaigns' className='btn btn-lg btn-primary onboarding-second-title'>
              Let’s jump in
                
              </Link>
            </div>
          </div>
        </div>
      </div>
      <OnboardingHeader/>
    </div>
  )
}

export {Congrats}
