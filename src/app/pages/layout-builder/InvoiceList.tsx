/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../_metronic/helpers'

type Props = {
  className: string
}

const InvoiceList: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Invoice Details</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr>
                <th className='p-0 w-50px'></th>
                <th className='p-0 min-w-150px'></th>
                <th className='p-0 min-w-140px'></th>
                <th className='p-0 min-w-120px'></th>
                <th className='p-0 min-w-40px'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label bg-light-success'>
                      <KTIcon iconName='basket' className='fs-2x text-success' />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    Top Authors
                  </a>
                </td>
                <td className='text-end text-muted fw-semibold'>ReactJs, HTML</td>
                <td className='text-end text-muted fw-semibold'>4600 Users</td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'>5.4MB</td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'><KTIcon iconName='eye' className='fs-2x text-primary' /></td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'><KTIcon iconName='cloud-download' className='fs-2x text-primary' /></td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label bg-light-danger'>
                      <KTIcon iconName='category' className='fs-2x text-danger' />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    Popular Authors
                  </a>
                </td>
                <td className='text-end text-muted fw-semibold'>Python, MySQL</td>
                <td className='text-end text-muted fw-semibold'>7200 Users</td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'>2.8MB</td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'><KTIcon iconName='eye' className='fs-2x text-primary' /></td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'><KTIcon iconName='cloud-download' className='fs-2x text-primary' /></td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label bg-light-info'>
                      <KTIcon iconName='briefcase' className='fs-2x text-info' />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    New Users
                  </a>
                </td>
                <td className='text-end text-muted fw-semibold'>Laravel, Metronic</td>
                <td className='text-end text-muted fw-semibold'>890 Users</td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'>1.5MB</td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'><KTIcon iconName='eye' className='fs-2x text-primary' /></td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'><KTIcon iconName='cloud-download' className='fs-2x text-primary' /></td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label bg-light-warning'>
                      <KTIcon iconName='abstract-26' className='fs-2x text-warning' />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    Active Customers
                  </a>
                </td>
                <td className='text-end text-muted fw-semibold'>AngularJS, C#</td>
                <td className='text-end text-muted fw-semibold'>4600 Users</td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'>5.4MB</td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'><KTIcon iconName='eye' className='fs-2x text-primary' /></td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'><KTIcon iconName='cloud-download' className='fs-2x text-primary' /></td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label bg-light-primary'>
                      <KTIcon iconName='abstract-41' className='fs-2x text-primary' />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    Active Customers
                  </a>
                </td>
                <td className='text-end text-muted fw-semibold'>ReactJS, Ruby</td>
                <td className='text-end text-muted fw-semibold'>354 Users</td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'>500KB</td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'><KTIcon iconName='eye' className='fs-2x text-primary' /></td>
                <td className='text-end text-dark fw-bold fs-6 pe-0'><KTIcon iconName='cloud-download' className='fs-2x text-primary' /></td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {InvoiceList}
