import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import { ChartsPage } from './Charts'
import { PopupsListWrapper } from '../dashboard/popupsTable/PopupsList'

const AnalyticsPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Analytics</PageTitle>
      <ChartsPage />
      <PopupsListWrapper />
    </>
  )
}

export default AnalyticsPageWrapper
