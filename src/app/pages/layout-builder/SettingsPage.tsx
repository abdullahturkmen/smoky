/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import {KTIcon} from '../../../_metronic/helpers'
import {getLayout, ILayout, LayoutSetup, useLayout} from '../../../_metronic/layout/core'
import {UsersListWrapper} from './usersTable/UsersList'
import {DomainsListWrapper} from './domainsTable/DomainsList'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'

const SettingsPage: React.FC = () => {
  const {setLayout} = useLayout()
  const [tab, setTab] = useState('Users')
  const [config, setConfig] = useState<ILayout>(getLayout())
  const [configLoading, setConfigLoading] = useState<boolean>(false)
  const [resetLoading, setResetLoading] = useState<boolean>(false)

  const updateData = (fieldsToUpdate: Partial<ILayout>) => {
    const updatedData = {...config, ...fieldsToUpdate}
    setConfig(updatedData)
  }

  const updateConfig = () => {
    setConfigLoading(true)
    try {
      LayoutSetup.setConfig(config)
    } catch (error) {
      setConfig(getLayout())
    }
    setTimeout(() => {
      setLayout(config)
      setConfigLoading(false)
    }, 1000)
  }

  const reset = () => {
    setResetLoading(true)
    setTimeout(() => {
      setConfig(getLayout())
      setResetLoading(false)
    }, 1000)
  }

  return (
    <>
      <div className='card card-custom'>
        <div className='card-header card-header-stretch overflow-auto'>
          <ul
            className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'Users'})}
                onClick={() => setTab('Users')}
                role='tab'
              >
                Users
              </a>
            </li>

            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'Websites'})}
                onClick={() => setTab('Websites')}
                role='tab'
              >
                Websites
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'Install'})}
                onClick={() => setTab('Install')}
                role='tab'
              >
                Install
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'Advanced-Settings'})}
                onClick={() => setTab('Advanced-Settings')}
                role='tab'
              >
                Advanced Settings
              </a>
            </li>
          </ul>
        </div>
        {/* end::Users */}

        {/* begin::Form */}
        <form className='form'>
          {/* begin::Body */}
          <div className='card-body'>
            <div className='tab-content pt-3'>
              <div className={clsx('tab-pane', {active: tab === 'Users'})}>
                <UsersListWrapper />
              </div>
              <div className={clsx('tab-pane', {active: tab === 'Websites'})}>
                <DomainsListWrapper />
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Install'})}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Minimize:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][minimize]'
                          checked={config.aside.minimize}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                minimize: !config.aside.minimize,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>Enable aside minimization</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Minimized:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][minimized]'
                          checked={config.aside.minimized}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                minimized: !config.aside.minimized,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>Default minimized aside</div>
                  </div>
                </div>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Advanced-Settings'})}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Width:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][footer][width]'
                      value={config.footer.width}
                      onChange={(e) =>
                        updateData({
                          footer: {
                            ...config.footer,
                            width: e.target.value as 'fixed' | 'fluid',
                          },
                        })
                      }
                    >
                      <option value='fluid'>Fluid</option>
                      <option value='fixed'>Fixed</option>
                    </select>
                    <div className='form-text text-muted'>Select layout width type.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end::Body */}
        </form>
        {/* end::Form */}
      </div>
    </>
  )
}

export {SettingsPage}
