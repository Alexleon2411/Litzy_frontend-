import api from "@/lib/axios";

export default {
  // recuerda que el token se pasa atravez de la pagina de axios en la carpeta lib
  create(data){
    return api.post('/appoitments', data)
  },
  getByDate(date) {
    return api.get(`/appoitments?date=${date}`)
  },
  getById(appoitmentId) {
    return api.get(`/appoitments/${appoitmentId}`)
  },
}
