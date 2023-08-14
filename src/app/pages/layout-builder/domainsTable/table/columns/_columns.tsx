// @ts-nocheck
import {Column} from 'react-table'
import {DomainInfoCell} from './DomainInfoCell'
import {DomainLastLoginCell} from './DomainLastLoginCell'
import {DomainTwoStepsCell} from './DomainTwoStepsCell'
import {DomainActionsCell} from './DomainActionsCell'
import {DomainSelectionCell} from './DomainSelectionCell'
import {DomainCustomHeader} from './DomainCustomHeader'
import {DomainSelectionHeader} from './DomainSelectionHeader'
import {Domain} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<Domain>> = [
  {
    Header: (props) => <DomainSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <DomainSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <DomainCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <DomainInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <DomainCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  {
    Header: (props) => (
      <DomainCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
    ),
    id: 'last_login',
    Cell: ({...props}) => <DomainLastLoginCell last_login={props.data[props.row.index].last_login} />,
  },
  {
    Header: (props) => (
      <DomainCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
    ),
    id: 'two_steps',
    Cell: ({...props}) => <DomainTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  },
  {
    Header: (props) => (
      <DomainCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <DomainCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <DomainActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
