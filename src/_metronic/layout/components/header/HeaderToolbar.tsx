/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react'
import noUiSlider, {target} from 'nouislider'
import {useLayout} from '../../core'
import {KTIcon} from '../../../helpers'
import {DefaultTitle} from './page-title/DefaultTitle'
import {ThemeModeSwitcher, HeaderUserMenu} from '../../../partials'
import {useAuth} from '../../../../app/modules/auth'
import {toAbsoluteUrl} from '../../../helpers'

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
    <div className='toolbar d-flex align-items-stretch'>
      {/* begin::Toolbar container */}
      <div
        className={`${classes.headerContainer.join(
          ' '
        )} py-6 py-lg-0 d-flex flex-column flex-lg-row align-items-lg-stretch justify-content-lg-between`}
      >
        <DefaultTitle />
        <div className='d-flex align-items-stretch overflow-auto pt-3 pt-lg-0'>
          {/* begin::Action wrapper */}
          <div className='d-flex align-items-center'>

            {/* begin::Select */}
            <select
              className='form-select form-select-sm form-select-solid w-100px w-xxl-125px'
              data-control='select2'
              data-placeholder='Latest'
              data-hide-search='true'
              defaultValue={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value='1'>Latest</option>
              <option value='2'>In Progress</option>
              <option value='3'>Done</option>
            </select>
            {/* end::Select  */}
          </div>
          {/* end::Action wrapper */}

          {/* begin::Action wrapper */}
          <div className='d-flex align-items-center'>

            {/* begin::Actions */}
            <div className='d-flex'>
              {/* begin::Action */}
              <a
                href='#'
                className='btn btn-sm btn-icon btn-icon-muted btn-active-icon-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_invite_friends'
              >
                <KTIcon iconName='files' className='fs-1' />
              </a>
              {/* end::Action */}

              {/* begin::Notifications */}
              <div className='d-flex align-items-center'>
                {/* begin::Menu- wrapper */}
                <a href='#' className='btn btn-sm btn-icon btn-icon-muted btn-active-icon-primary'>
                  <KTIcon iconName='add-files' className='fs-1' />
                </a>
                {/* end::Menu wrapper */}
              </div>
              {/* end::Notifications */}

              {/* begin::Quick links */}
              <div className='d-flex align-items-center'>
                {/* begin::Menu wrapper */}
                <a href='#' className='btn btn-sm btn-icon btn-icon-muted btn-active-icon-primary'>
                  <KTIcon iconName='file-up' className='fs-1' />
                </a>
                {/* end::Menu wrapper */}
              </div>
              {/* end::Quick links */}

              

              {/*begin::User*/}
              <div className='aside-user d-flex align-items-sm-center justify-content-center py-5'>
                {/*begin::Symbol*/}
                <div className='symbol symbol-30px'>
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
          </div>
          {/* end::Action wrapper */}
        </div>
        {/* end::Toolbar container */}
      </div>
    </div>
  )
}

export {HeaderToolbar}
