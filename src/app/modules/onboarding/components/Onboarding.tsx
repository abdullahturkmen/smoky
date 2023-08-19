import React, {FC, useEffect, useRef, useState} from 'react'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {KTIcon, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Form, Formik, FormikValues} from 'formik'
import {createAccountSchemas, ICreateAccount, inits} from './CreateAccountOnboardingHelper'
import {Link, useNavigate} from 'react-router-dom'
import OnboardingFooter from './footer/OnboardingFooter'
import OnboardingHeader from './header/OnboardingHeader'

const Onboarding: FC = () => {
  const navigate = useNavigate()
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
      navigate('/onboarding/congrats')
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>
      <div className='d-flex flex-center flex-column flex-row-fluid onboarding-w-60 p-10 order-2 order-lg-1'>
        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-15 w-100'
          id='kt_create_account_stepper'
        >
          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
              <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
                <div className='current' data-kt-stepper-element='content'>
                  <Step1 />
                </div>

                <div data-kt-stepper-element='content'>
                  <Step2 />
                </div>

                <div data-kt-stepper-element='content'>
                  <Step3 />
                </div>

                <div className='d-flex flex-stack pt-15'>
                  <div className='mr-2'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='btn btn-lg btn-light-primary me-3 onboarding-second-title'
                      data-kt-stepper-action='previous'
                    >
                      <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                      Back
                    </button>
                  </div>

                  <div>
                    <button type='submit' className='btn btn-lg btn-primary ms-3 onboarding-second-title'>
                     
                        {!isSubmitButton && 'Continue'}
                        {isSubmitButton && 'Submit'}
                        <KTIcon iconName='arrow-right' className='fs-4 ms-2 me-0' />
                      
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

          <div className='d-flex mx-auto mw-600px w-100 pt-5'>
            <div className='stepwizard-tablist'>
              <ul className='stepwizard-tablist-list'>
                <li
                  className='stepwizard-tablist-list-item current'
                  data-kt-stepper-element='nav'
                ></li>
                <li className='stepwizard-tablist-list-item' data-kt-stepper-element='nav'></li>
                <li className='stepwizard-tablist-list-item' data-kt-stepper-element='nav'></li>
              </ul>
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
              src={toAbsoluteUrl('/media/logos/Snooky-Logo.png')}
              alt='Snooky'
            />
          </h1>
        </div>
      </div>
      <OnboardingHeader/>
    </div>
  )
}

export {Onboarding}
