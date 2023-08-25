// @ts-nocheck
import {Column} from 'react-table'
import {InvoiceInfoCell} from './InvoiceInfoCell'
import {InvoiceLastLoginCell} from './InvoiceLastLoginCell'
import {InvoiceTwoStepsCell} from './InvoiceTwoStepsCell'
import {InvoiceActionsCell} from './InvoiceActionsCell'
import {InvoiceSelectionCell} from './InvoiceSelectionCell'
import {InvoiceCustomHeader} from './InvoiceCustomHeader'
import {InvoiceSelectionHeader} from './InvoiceSelectionHeader'
import {Invoice} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<Invoice>> = [
  {
    Header: (props) => <InvoiceSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <InvoiceSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <InvoiceCustomHeader tableProps={props} title='Amount' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <div>$10</div>,
  },
  {
    Header: (props) => (
      <InvoiceCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    id: 'two_steps',
    Cell: ({...props}) => <InvoiceTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  },
  {
    Header: (props) => (
      <InvoiceCustomHeader tableProps={props} title='Payment Due' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  
  {
    Header: (props) => (
      <InvoiceCustomHeader tableProps={props} title='Created' className='min-w-125px' />
    ),
    accessor: 'last_login',
  },
  {
    Header: (props) => (
      <InvoiceCustomHeader tableProps={props} title='View' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <InvoiceActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
