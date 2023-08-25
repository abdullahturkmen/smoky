import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {Invoice, InvoicesQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const USER_URL = `${API_URL}/user`
const GET_USERS_URL = `${API_URL}/users/query`

const getInvoices = (query: string): Promise<InvoicesQueryResponse> => {
  return axios
    .get(`${GET_USERS_URL}?${query}`)
    .then((d: AxiosResponse<InvoicesQueryResponse>) => d.data)
}

const getInvoiceById = (id: ID): Promise<Invoice | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<Invoice>>) => response.data)
    .then((response: Response<Invoice>) => response.data)
}

const createInvoice = (user: Invoice): Promise<Invoice | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<Invoice>>) => response.data)
    .then((response: Response<Invoice>) => response.data)
}

const updateInvoice = (user: Invoice): Promise<Invoice | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<Invoice>>) => response.data)
    .then((response: Response<Invoice>) => response.data)
}

const deleteInvoice = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedInvoices = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getInvoices, deleteInvoice, deleteSelectedInvoices, getInvoiceById, createInvoice, updateInvoice}
