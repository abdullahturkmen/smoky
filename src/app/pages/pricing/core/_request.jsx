import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL
const GET_USERS_URL = `${API_URL}plans`

const getPricingPlans = () => {
    return axios
      .get(`${GET_USERS_URL}`)
      .then((response) => {
          return response.data.data
      });
  }



export {getPricingPlans}
