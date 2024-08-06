import React from 'react'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'

function OnboardingHeader() {
  return (
    <>
      <img
        style={{width: '40px', top: '10px', left: '10px'}}
        className='rounded position-absolute'
        src={toAbsoluteUrl('/media/logos/Smoky-Logo-square.png')}
        alt='Smoky'
      />
    </>
  )
}

export default OnboardingHeader
