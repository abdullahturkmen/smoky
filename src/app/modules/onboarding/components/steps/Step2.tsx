import React, {FC} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'

const Step2: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark onboarding-main-title'>
          What is your company name?
        </h2>

        <div className='text-gray-400 fw-bold  onboarding-second-title'>
          It will be the name of the Snooky.io account.
        </div>
      </div>

      <div className='fv-row'>
        <div className='mb-10 fv-row'>
          <label className='form-label mb-3'>Company Name</label>

          <Field
            type='text'
            className='form-control form-control-lg form-control-solid border'
            name='companyName'
            autoFocus='autofocus'
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='companyName' />
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step2}
