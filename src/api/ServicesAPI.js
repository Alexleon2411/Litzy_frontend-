import api from '../lib/axios';

export default {
   all() {
    return api.get('/services')
   },
   filteredServices(category){
      return api.get(`/services/filtered?category=${category}`)
   },
   getOne(id) {
    return api.get(`/services/${id}`)
   },
   createService(data){
    return api.post('/services', data)
   },
   updateService(id, data){
    return api.put(`/services/${id}`, data)
   },
   deleteService(id) {
    return api.delete(`/services/${id}`)
   }
}
