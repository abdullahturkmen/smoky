import React from 'react'

function OnboardingFooter() {
  return (
    <>
      <div className='position-absolute pb-5' style={{bottom: '1em'}}>
        You are logged in as <strong>yigitertem@gmail.com</strong>.{' '}
        <a href='' className='link-primary fw-bolder'>
          Log out
        </a>
      </div>
    </>
  )
}

export default OnboardingFooter
