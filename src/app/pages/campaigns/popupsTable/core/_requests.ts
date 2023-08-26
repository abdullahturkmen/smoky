import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../_metronic/helpers'
import {Popup, PopupsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const USER_URL = `${API_URL}/user`
const GET_USERS_URL = `${API_URL}/users/query`

const getPopups = (query: string): Promise<PopupsQueryResponse> => {
  return axios
    .get(`${GET_USERS_URL}?${query}`)
    .then((d: AxiosResponse<PopupsQueryResponse>) => d.data)
}

const getPopupById = (id: ID): Promise<Popup | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<Popup>>) => response.data)
    .then((response: Response<Popup>) => response.data)
}

const createPopup = (user: Popup): Promise<Popup | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<Popup>>) => response.data)
    .then((response: Response<Popup>) => response.data)
}

const updatePopup = (user: Popup): Promise<Popup | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<Popup>>) => response.data)
    .then((response: Response<Popup>) => response.data)
}

const deletePopup = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedPopups = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getPopups, deletePopup, deleteSelectedPopups, getPopupById, createPopup, updatePopup}
