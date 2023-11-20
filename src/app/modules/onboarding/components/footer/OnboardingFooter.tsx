import React from 'react'
import { useAuth } from '../../../auth'

function OnboardingFooter() {
  const { currentUser, logout } = useAuth();
  return (
    <>
      <div className='position-absolute pb-5' style={{bottom: '1em'}}>
        You are logged in as <strong>{currentUser?.email}</strong>.{' '}
        <a href='' onClick={logout} className='link-primary fw-bolder'>
          Log out
        </a>
      </div>
    </>
  )
}

export default OnboardingFooter
