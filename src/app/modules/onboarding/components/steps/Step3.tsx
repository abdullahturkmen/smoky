import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step3: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark onboarding-main-title'>
          What is the url of your website?
        </h2>

        <div className='text-gray-400 fw-bold onboarding-second-title'>
          We’ll guide you how to activate Snooky.io on your site.
        </div>
      </div>

      <div className='fv-row'>
        <div className='mb-10 fv-row'>
          <label className='form-label mb-3'>Website URL</label>

          <Field
            type='text'
            className='form-control form-control-lg form-control-solid border'
            name='websiteUrl'
            autoFocus='autofocus'
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='websiteUrl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step3}
