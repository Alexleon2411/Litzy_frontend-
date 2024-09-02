import { defineStore } from "pinia";
import {ref, onMounted } from 'vue'
import ServicesAPI from "@/api/ServicesAPI";

export const useServicesStore = defineStore('services', () => {

  onMounted(async () => {
    try {
      const { data } = await ServicesAPI.all() // de esta manera se llamara el api desde services api para asi tener un codigo un poco mas limpio, se le aplica destroctoring  para obtener solamente el valor y no la variable y su valor
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  })
  return {

  }
})
