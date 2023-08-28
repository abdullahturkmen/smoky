/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import {KTIcon} from '../../../_metronic/helpers'
import {getLayout, ILayout, LayoutSetup, useLayout} from '../../../_metronic/layout/core'
import {UsersListWrapper} from './usersTable/UsersList'
import {DomainsListWrapper} from './domainsTable/DomainsList'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {LogsList} from './LogsList'
import {InvoiceScreen} from './invoice/InvoiceScreen'
import {BillingScreen} from './billing/BillingScreen'
import AdvancedSettingsScreen from './AdvancedSettingsScreen'
import InstallScreen from './InstallScreen'
import { ProfileScreen } from './ProfileScreen'

const SettingsPage: React.FC = () => {
  const {setLayout} = useLayout()
  const [tab, setTab] = useState('Profile')
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
      <div className=' card-custom'>
        <div className='card-header card-header-stretch overflow-auto'>
          <ul
            className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap overflow-y-hidden'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap `, {'text-dark': tab !== 'Profile'},{'active text-primary': tab === 'Profile'})}
                onClick={() => setTab('Profile')}
                role='tab'
              >
                Settings
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap`, {'text-dark': tab !== 'Users'},{'active text-primary': tab === 'Users'})}
                onClick={() => setTab('Users')}
                role='tab'
              >
                Users
              </a>
            </li>

            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap `, {'text-dark': tab !== 'Websites'},{'active text-primary': tab === 'Websites'})}
                onClick={() => setTab('Websites')}
                role='tab'
              >
                Websites
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap `, {'text-dark': tab !== 'Install'},{'active text-primary': tab === 'Install'})}
                onClick={() => setTab('Install')}
                role='tab'
              >
                Install
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap `, {'text-dark': tab !== 'Advanced-Settings'},{'active text-primary': tab === 'Advanced-Settings'})}
                onClick={() => setTab('Advanced-Settings')}
                role='tab'
              >
                Advanced Settings
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap`, {'text-dark': tab !== 'Billing'},{'active text-primary':tab === 'Billing'})}
                onClick={() => setTab('Billing')}
                role='tab'
              >
                Billing
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap`, {'text-dark': tab !== 'Invoice'},{'active text-primary': tab === 'Invoice'})}
                onClick={() => setTab('Invoice')}
                role='tab'
              >
                Invoice
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap`, {'text-dark': tab !== 'Logs'},{'active text-primary': tab === 'Logs'})}
                onClick={() => setTab('Logs')}
                role='tab'
              >
                Logs
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
              <div className={clsx('tab-pane', {active: tab === 'Profile'})}>
               <ProfileScreen/>
              </div>
              <div className={clsx('tab-pane', {active: tab === 'Users'})}>
                <UsersListWrapper />
              </div>
              <div className={clsx('tab-pane', {active: tab === 'Websites'})}>
                <DomainsListWrapper />
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Install'})}>
                <InstallScreen />
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Advanced-Settings'})}>
                <AdvancedSettingsScreen />
              </div>
              <div className={clsx('tab-pane', {active: tab === 'Billing'})}>
                <BillingScreen />
              </div>
              <div className={clsx('tab-pane', {active: tab === 'Invoice'})}>
                <InvoiceScreen/>
              </div>
              <div className={clsx('tab-pane', {active: tab === 'Logs'})}>
                <LogsList className='' />
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
