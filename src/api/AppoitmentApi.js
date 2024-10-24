import api from "@/lib/axios";

export default {
  // recuerda que el token se pasa atravez de la pagina de axios en la carpeta lib
  create(data){
    return api.post('/appoitments', data)
  },
  getByDate(date) {
    return api.get(`/appoitments?date=${date}`)
  },
  getAll() {
    return api.get(`/appoitments/getAll`)
  },
  getById(appoitmentId) {
    return api.get(`/appoitments/${appoitmentId}`)
  },
  update(id, data){
    return api.put(`/appoitments/${id}`, data)
  },
  delete(id){
    return api.delete(`/appoitments/${id}`)
  }
}
