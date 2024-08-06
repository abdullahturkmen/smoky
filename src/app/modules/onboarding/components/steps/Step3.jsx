import React, { FC, useState } from 'react'
import { Field, ErrorMessage } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { setWebsite } from '../../../../../store/reducers/onboardingReducer';

const Step3 = () => {
  const dispatch = useDispatch();
  const storeWebsite = useSelector((state) => state.onboarding.website)
  const [websiteUrl, setWebsiteUrl] = useState(storeWebsite)
  const [isWebsiteValid, setIsWebsiteValid] = useState(false)

  const websiteChange = (e) => {
    var url = e.target.value.trim()

    setWebsiteUrl(url)

    console.log("geçerli mi?: ", gecerliAdresYap(url))

    if (isValidURL(gecerliAdresYap(url))) {
      setIsWebsiteValid(true);
      dispatch(setWebsite(gecerliAdresYap(url)))
    }
    else {
      setIsWebsiteValid(false);
    }

    //(e) => dispatch(setWebsite(gecerliAdresYap(e.target.value)))
  }


  function isValidURL(url) {
    const pattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\S*)$/;
    return pattern.test(url);
  }


  function gecerliAdresYap(adres) {
    // Eğer adres boşsa veya null/undefined ise geçersiz kabul edin
    if (!adres) {
      return false;
    }

    // Eğer başında "http://" veya "https://" yoksa, bu kısmı ekle
    if (!adres.startsWith('http://') && !adres.startsWith('https://')) {
      adres = 'https://' + adres;
    }

    // Sonucu döndür
    return adres;
  }



  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark onboarding-main-title'>
          What is the url of your website?
        </h2>

        <div className='text-gray-400 fw-bold onboarding-second-title'>
          We’ll guide you how to activate Smoky.com on your site.
        </div>
      </div>

      <div className='fv-row'>
        <div className='mb-10 fv-row'>
          <label className='form-label mb-3'>Website URL</label>

          <input
            type='text'
            className='form-control form-control-lg form-control-solid border'
            name='websiteUrl'
            autoFocus='autofocus'
            placeholder='example.com'
            value={websiteUrl}
            onChange={websiteChange}
          />

          {!isWebsiteValid && websiteUrl.length > 0 && (<>

            <div className='text-danger mt-2'>
              Website url not valid!
            </div>
          </>)}
        </div>
      </div>
    </div>
  )
}

export { Step3 }
