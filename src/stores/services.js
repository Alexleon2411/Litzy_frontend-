import { defineStore } from "pinia";
import {ref, onMounted } from 'vue'
import ServicesAPI from "@/api/ServicesAPI";
import { useRouter } from "vue-router";
import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire'
import {ref as storageRef, deleteObject} from 'firebase/storage'


export const useServicesStore = defineStore('services', () => {
  const storage = useFirebaseStorage()

  const services = ref([])
  const filteredServices = ref([])
  const service = ref({})
  const router = useRouter()

  async function getAllServices() {
    try {
      const { data } = await ServicesAPI.all() // de esta manera se llamara el api desde services api para asi tener un codigo un poco mas limpio, se le aplica destroctoring  para obtener solamente el valor y no la variable y su valor
      services.value = data
    } catch (error) {
      console.log(error)
    }
  }
  async function getFilteredServices(category){
    try {
      const {data} = await ServicesAPI.filteredServices(category)
      filteredServices.value = data;
    } catch (error) {
      console.log(error)
    }
  }

  async function getOneService(id) {
    try {
     const { data } =  await ServicesAPI.getOne(id)
      service.value = data
    } catch (error) {
      console.log(error)
    }
  }

  async function createService(data) {
    try {
      const result = await ServicesAPI.createService(data)
      router.push({name: 'panelServices'})
      alert('servicio Creado')
    } catch (error) {
      console.log(error)
    }
  }
  async function updateService(id, data) {
    try {
      const result = await ServicesAPI.updateService(id, data)
      await getAllServices();
      router.push({name: 'panelServices'})
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteService(id, img){
    try {
      // se crea la referencia  a a imagen que se debe eliminar en el storage
      const imageRef = storageRef(storage, img)
      // se envia la solicitud a la api para eliminar el servicio de la base de datos
      await ServicesAPI.deleteService(id);
      // se envia la solicitud a la storage para que elimine la imagen de la storage
      await deleteObject(imageRef)
      // se actualizan los datos en el DOM
      await getAllServices();
    } catch (error) {
      console.log(error)
    }
  }

  return {
    getAllServices,
    getFilteredServices,
    createService,
    getOneService,
    updateService,
    deleteService,
    services,
    filteredServices,
    service
  }
})
