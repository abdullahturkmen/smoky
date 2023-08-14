import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {SettingsPage} from './SettingsPage'

const BuilderPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Settings</PageTitle>
      <SettingsPage />
    </>
  )
}

export default BuilderPageWrapper
