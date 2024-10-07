import axios from 'axios'

const api = axios.create({
  baseURL : import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('AUTH_TOKEN') // aqui se valida que se tenga un token para poder mostrar los datos solicitados
  if(token){
    config.headers.Authorization = `Bearer ${token}` // se le pasa el token junto con bearer para poder validar el token 
  }
  return config
})

export default api
