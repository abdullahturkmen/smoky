/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {ProfileHeader} from './profile/ProfileHeader'
import {DeactivateAccount} from './profile/DeactivateAccount'
import {SignInMethod} from './profile/SignInMethod'
import { Overview } from './profile/Overview'

const ProfileScreen: React.FC = ({}) => {
  return (
    <>
      <ProfileHeader />
      <Overview />
      <SignInMethod />
      <DeactivateAccount />
    </>
  )
}

export {ProfileScreen}
