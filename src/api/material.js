import axios from '../utils/axios.config'
import api from '../constant/api'
export function getMaterial (params) {
  return axios({
    url: api.API_MATERIAL,
    params
  })
}
