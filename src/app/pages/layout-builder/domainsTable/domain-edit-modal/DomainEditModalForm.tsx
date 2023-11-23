import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {initialDomain, Domain} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {DomainsListLoading} from '../components/loading/DomainsListLoading'
import {createDomain, updateDomain} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL;

type Props = {
  isDomainLoading: boolean
  user: Domain
}

const editDomainSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('URL is required'),
})

const DomainEditModalForm: FC<Props> = ({user, isDomainLoading}) => {
  const [domainUrl, setDomainUrl] = useState('')
  const [isWebsiteValid, setIsWebsiteValid] = useState(false)
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [userForEdit] = useState<Domain>({
    ...user,
    avatar: user.avatar || initialDomain.avatar,
    role: user.role || initialDomain.role,
    position: user.position || initialDomain.position,
    name: user.name || initialDomain.name,
    email: user.email || initialDomain.email,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
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

  const editDomainURL =()=>{
    // backende formik.values.name değeri gönderilmeli

    if (isWebsiteValid) {
     
      console.log('fonk çalıştı', domainUrl)
      axios.post(`${API_URL}/domain/create`, {
        name: domainUrl,
        url: gecerliAdresYap(domainUrl),
      }).then(() => {
      toast.success('Domain created', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setDomainUrl("")
      setIsWebsiteValid(false)
      window.location.href = `${window.location.protocol}//${window.location.host}/settings?type=Websites`;
    })
    }
    else {
      //hatalı
     
    }

   
  }

  const domainUrlChange = (e) => {
    if (isValidURL(gecerliAdresYap(e.target.value))) {
      setIsWebsiteValid(true);
     
    }
    else {
      setIsWebsiteValid(false);
     
    }
    setDomainUrl(e.target.value)
  }

  const formik = useFormik({
    initialValues: userForEdit,
    validationSchema: editDomainSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateDomain(values)
        } else {
          await createDomain(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
    <ToastContainer />
      <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_user_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_user_header'
          data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
          data-kt-scroll-offset='300px'
        >
        

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Domain URL</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
            value={domainUrl}
            onChange={domainUrlChange}
              placeholder='Domain URL'
              type='text'
              name='name'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid':  !isWebsiteValid},
                {
                  'is-valid':  isWebsiteValid,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isDomainLoading}
            />
            {domainUrl.length == 0 && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.name}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

        
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isDomainLoading}
          >
            Discard
          </button>

          <button
            type='button'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={!isWebsiteValid}
            onClick={editDomainURL}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isDomainLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isDomainLoading) && <DomainsListLoading />}
    </>
  )
}

export {DomainEditModalForm}
