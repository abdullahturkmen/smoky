/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import {KTIcon} from '../../../_metronic/helpers'
import {getLayout, ILayout, LayoutSetup, useLayout} from '../../../_metronic/layout/core'
import {UsersListWrapper} from './usersTable/UsersList'
import {DomainsListWrapper} from './domainsTable/DomainsList'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {LogsList} from './LogsList'
import {InvoiceList} from './InvoiceList'
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
      <div className='card card-custom'>
        <div className='card-header card-header-stretch overflow-auto'>
          <ul
            className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap text-dark`, {active: tab === 'Profile'})}
                onClick={() => setTab('Profile')}
                role='tab'
              >
                Profile (Settings)
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap text-dark`, {active: tab === 'Users'})}
                onClick={() => setTab('Users')}
                role='tab'
              >
                Users
              </a>
            </li>

            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap text-dark`, {active: tab === 'Websites'})}
                onClick={() => setTab('Websites')}
                role='tab'
              >
                Websites
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap text-dark`, {active: tab === 'Install'})}
                onClick={() => setTab('Install')}
                role='tab'
              >
                Install
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap text-dark`, {active: tab === 'Advanced-Settings'})}
                onClick={() => setTab('Advanced-Settings')}
                role='tab'
              >
                Advanced Settings
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap text-dark`, {active: tab === 'Billing'})}
                onClick={() => setTab('Billing')}
                role='tab'
              >
                Billing
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap text-dark`, {active: tab === 'Invoice'})}
                onClick={() => setTab('Invoice')}
                role='tab'
              >
                Invoice
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer text-nowrap text-dark`, {active: tab === 'Logs'})}
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
                <InvoiceList className='' />
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
