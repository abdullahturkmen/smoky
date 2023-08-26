// @ts-nocheck
import {Column} from 'react-table'
import {PopupInfoCell} from './PopupInfoCell'
import {PopupLastLoginCell} from './PopupLastLoginCell'
import {PopupTwoStepsCell} from './PopupTwoStepsCell'
import {PopupActionsCell} from './PopupActionsCell'
import {PopupSelectionCell} from './PopupSelectionCell'
import {PopupCustomHeader} from './PopupCustomHeader'
import {PopupSelectionHeader} from './PopupSelectionHeader'
import {Popup} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<Popup>> = [
  {
    Header: (props) => <PopupSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <PopupSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <PopupCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <PopupInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <PopupCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  {
    Header: (props) => (
      <PopupCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
    ),
    id: 'last_login',
    Cell: ({...props}) => <PopupLastLoginCell last_login={props.data[props.row.index].last_login} />,
  },
  {
    Header: (props) => (
      <PopupCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
    ),
    id: 'two_steps',
    Cell: ({...props}) => <PopupTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  },
  {
    Header: (props) => (
      <PopupCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <PopupCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <PopupActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
