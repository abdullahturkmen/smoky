import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import { NotificationPage } from './notification'


const NotificationPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>All Notifications</PageTitle>
      <NotificationPage />
    </>
  )
}

export default NotificationPageWrapper