import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.restful-api.dev/'
})

export default api
