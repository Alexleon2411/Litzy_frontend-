import api from '@/lib/axios';

export default {
   all() {
    // este metodo es creado para obtener todos los servicios que se encuentran en la base de datos
    // cada metodo es llamado infdividualmente con si se estuviera llamando axios dentro de la store 
    return api.get('/services')
   }
}
