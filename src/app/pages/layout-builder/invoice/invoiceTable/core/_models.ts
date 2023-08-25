import {ID, Response} from '../../../../../../_metronic/helpers'
export type Invoice = {
  id?: ID
  name?: string
  avatar?: string
  email?: string
  position?: string
  role?: string
  last_login?: string
  two_steps?: boolean
  joined_day?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type InvoicesQueryResponse = Response<Array<Invoice>>

export const initialInvoice: Invoice = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}
