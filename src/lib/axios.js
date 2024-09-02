import axios from 'axios'

const api = axios.create({
  baseURl : import.meta.env.VITE_API_URL
})

export default api
