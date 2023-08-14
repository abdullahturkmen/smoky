import React from 'react'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'

function OnboardingHeader() {
  return (
    <>
      <img
        style={{width: '40px', top: '10px', left: '10px'}}
        className='rounded position-absolute'
        src={toAbsoluteUrl('/media/logos/Snooky-Logo-square.png')}
        alt='Snooky'
      />
    </>
  )
}

export default OnboardingHeader
