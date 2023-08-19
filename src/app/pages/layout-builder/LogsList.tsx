/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../_metronic/helpers'

type Props = {
  className: string
}

const LogsList: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Login Sessions</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table align-middle table-row-bordered table-row-solid gy-4 gs-9'>
            <thead className='border-gray-200 fs-5 fw-semibold bg-lighten'>
              <tr>
                <th className='min-w-250px'>Location</th>
                <th className='min-w-100px'>Status</th>
                <th className='min-w-150px'>Device</th>
                <th className='min-w-150px'>IP Address</th>
                <th className='min-w-150px'>Time</th>
              </tr>
            </thead>

            <tbody className='fw-6 fw-semibold text-gray-600'>
              <tr>
                <td>
                  <a href='#' className='text-hover-primary text-gray-600'>
                    USA(5)
                  </a>
                </td>

                <td>
                  <span className='badge badge-light-success fs-7 fw-bold'>OK</span>
                </td>

                <td>Chrome - Windows</td>

                <td>236.125.56.78</td>

                <td>2 mins ago</td>
              </tr>
              <tr>
                <td>
                  <a href='#' className='text-hover-primary text-gray-600'>
                    United Kingdom(10)
                  </a>
                </td>

                <td>
                  <span className='badge badge-light-success fs-7 fw-bold'>OK</span>
                </td>

                <td>Safari - Mac OS</td>

                <td>236.125.56.78</td>

                <td>10 mins ago</td>
              </tr>
              <tr>
                <td>
                  <a href='#' className='text-hover-primary text-gray-600'>
                    Norway(-)
                  </a>
                </td>

                <td>
                  <span className='badge badge-light-danger fs-7 fw-bold'>ERR</span>
                </td>

                <td>Firefox - Windows</td>

                <td>236.125.56.10</td>

                <td>20 mins ago</td>
              </tr>
              <tr>
                <td>
                  <a href='#' className='text-hover-primary text-gray-600'>
                    Japan(112)
                  </a>
                </td>

                <td>
                  <span className='badge badge-light-success fs-7 fw-bold'>OK</span>
                </td>

                <td>iOS - iPhone Pro</td>

                <td>236.125.56.54</td>

                <td>30 mins ago</td>
              </tr>
              <tr>
                <td>
                  <a href='#' className='text-hover-primary text-gray-600'>
                    Italy(5)
                  </a>
                </td>

                <td>
                  <span className='badge badge-light-warning fs-7 fw-bold'>WRN</span>
                </td>

                <td>Samsung Noted 5- Android</td>

                <td>236.100.56.50</td>

                <td>40 mins ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {LogsList}
