/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {ErrorMessage, Field} from 'formik'
import { useDispatch,useSelector } from 'react-redux';
import { setFullName } from '../../../../../store/reducers/onboardingReducer';

const Step1 = () => {
  const dispatch = useDispatch();
  const storeFullName = useSelector((state) => state.onboarding.fullName)
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark onboarding-main-title'>
          What’s your first and last name?
        </h2>

        <div className='text-gray-400 fw-bold onboarding-second-title'>We're excited to have you on board.</div>
      </div>

      <div className='fv-row'>
        <div className='mb-10 fv-row'>
          <label className='form-label mb-3'>Full Name</label>

          <input
            type='text'
            className='form-control form-control-lg form-control-solid border'
            autoFocus='autofocus'
            value={storeFullName}
            onChange={(e) => dispatch(setFullName(e.target.value))}
          />
         
        </div>
      </div>
    </div>
  )
}

export {Step1}
