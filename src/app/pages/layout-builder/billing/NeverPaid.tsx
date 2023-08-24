import React from 'react'

type Props = {}

const NeverPaid: React.FC<Props> = ({}) => {
  return (
    <>
      <div className='card-body'>
        <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed mb-12 p-6'>
          <i className='ki-duotone ki-information fs-2tx text-warning me-4'>
            <span className='path1'></span>
            <span className='path2'></span>
            <span className='path3'></span>
          </i>

          <div className='d-flex flex-stack flex-grow-1 '>
            <div className=' fw-semibold'>
              <h4 className='text-gray-900 fw-bold'>We need your attention!</h4>

              <div className='fs-6 text-gray-700 '>
                Your payment was declined. To start using tools, please{' '}
                <a
                  href='#'
                  className='fw-bold'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_new_card'
                >
                  Add Payment Method
                </a>
                .
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-7'>
            <h3 className='mb-2'>Active until Dec 09, 2023</h3>
            <p className='fs-6 text-gray-600 fw-semibold mb-6 mb-lg-15'>
              We will send you a notification upon Subscription expiration{' '}
            </p>

            <div className='fs-5 mb-2'>
              <span className='text-gray-800 fw-bold me-1'>$24.99</span>
              <span className='text-gray-600 fw-semibold'>Per Month</span>
            </div>

            <div className='fs-6 text-gray-600 fw-semibold'>
              Extended Pro Package. Up to 100 Agents &amp; 25 Projects
            </div>
          </div>

          <div className='col-lg-5'>
            <div className='d-flex text-muted fw-bold fs-5 mb-3'>
              <span className='flex-grow-1 text-gray-800'>Users</span>
              <span className='text-gray-800'>86 of 100 Used</span>
            </div>

            <div className='progress h-8px bg-light-primary mb-2'>
             
            </div>

            <div className='fs-6 text-gray-600 fw-semibold mb-10'>
              14 Users remaining until your plan requires update
            </div>

            <div className='d-flex justify-content-end pb-0 px-0'>
              <a
                href='#'
                className='btn btn-light btn-active-light-primary me-2'
                id='kt_account_billing_cancel_subscription_btn'
              >
                Cancel Subscription
              </a>
              <button
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_upgrade_plan'
              >
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {NeverPaid}
