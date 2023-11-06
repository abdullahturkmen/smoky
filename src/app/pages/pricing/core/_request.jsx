import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL
const GET_PLANS_URL = `${API_URL}plans`

const getPricingPlans = () => {
    return axios
      .get(`${GET_PLANS_URL}`)
      .then((response) => {
          return response.data.data
      });
  }



export {getPricingPlans}
