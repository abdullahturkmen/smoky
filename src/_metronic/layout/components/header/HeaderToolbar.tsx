/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react'
import noUiSlider, {target} from 'nouislider'
import {useLayout} from '../../core'
import {KTIcon} from '../../../helpers'
import {DefaultTitle} from './page-title/DefaultTitle'
import {HeaderUserMenu} from '../../../partials'
import {useAuth} from '../../../../app/modules/auth'
import {toAbsoluteUrl} from '../../../helpers'
import { Link } from 'react-router-dom'
const HeaderToolbar = () => {
  const {classes} = useLayout()
  const [status, setStatus] = useState<string>('1')
  const {currentUser} = useAuth()

  useEffect(() => {
    const slider: target = document.querySelector('#kt_toolbar_slider') as target
    const rangeSliderValueElement: Element | null = document.querySelector(
      '#kt_toolbar_slider_value'
    )

    if (!slider) {
      return
    }

    slider.innerHTML = ''

    noUiSlider.create(slider, {
      start: [5],
      connect: [true, false],
      step: 1,
      range: {
        min: [1],
        max: [10],
      },
    })

    slider.noUiSlider?.on('update', function (values: any, handle: any) {
      if (!rangeSliderValueElement) {
        return
      }

      rangeSliderValueElement.innerHTML = parseInt(values[handle]).toFixed(1)
    })
  }, [])

  return (
    <>
    <div className='toolbar d-flex align-items-stretch'>
      {/* begin::Toolbar container */}
      <div
        className={`${classes.headerContainer.join(
          ' '
        )} py-6 py-lg-0 d-flex flex-column flex-lg-row align-items-lg-stretch justify-content-lg-between`}
      >
        <DefaultTitle />
        <div className='d-flex justify-content-end align-items-stretch overflow-auto pt-3 pt-lg-0'>
      

          {/* begin::Action wrapper */}
         

            {/* begin::Actions */}
            <div className='d-flex align-items-center'>
              {/* begin::Action */}
              <a
                href='#'
                className='btn btn-sm btn-icon btn-icon-muted btn-active-icon-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_invite_friends'
              >
                <KTIcon iconName='files' className='fs-1' />
              </a>
              
                 
              <Link to='/create-campaign'
        type="button"
        className="btn btn-primary me-3 btn-sm"
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-end"
      >
        <KTIcon iconName="plus" className="fs-4" />
        Create Campaign
      </Link>

              

              {/*begin::User*/}
              <div className='aside-user d-flex align-items-sm-center justify-content-center py-5 ms-2'>
                {/*begin::Symbol*/}
                <div className='symbol symbol-35px'>
                  <img
                  className='cursor-pointer'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-start'
                    data-kt-menu-overflow='false'
                    src={toAbsoluteUrl('/media/avatars/300-1.jpg')}
                    alt={currentUser?.first_name}
                  />
                  <HeaderUserMenu />
                </div>
                {/*end::Symbol*/}
              </div>
              {/*end::User*/}
            </div>
            {/* end::Actions */}
          
          {/* end::Action wrapper */}
        </div>
        {/* end::Toolbar container */}
      </div>
    </div>
    </>
  )
}

export {HeaderToolbar}
