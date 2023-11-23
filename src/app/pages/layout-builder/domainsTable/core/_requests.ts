import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../_metronic/helpers'
import {Domain, DomainsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL
const USER_URL = `${API_URL}/user`
const GET_DOMAINS_URL = `${API_URL}/domain/list`

const getDomains = (query: string): Promise<DomainsQueryResponse> => {
  return axios
    .get(`${GET_DOMAINS_URL}?${query}`)
    .then((d: AxiosResponse<DomainsQueryResponse>) => d.data)
}

const getDomainById = (id: ID): Promise<Domain | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<Domain>>) => response.data)
    .then((response: Response<Domain>) => response.data)
}

const createDomain = (user: Domain): Promise<Domain | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<Domain>>) => response.data)
    .then((response: Response<Domain>) => response.data)
}

const updateDomain = (user: Domain): Promise<Domain | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<Domain>>) => response.data)
    .then((response: Response<Domain>) => response.data)
}

const deleteDomain = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedDomains = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getDomains, deleteDomain, deleteSelectedDomains, getDomainById, createDomain, updateDomain}
