<script setup>
  import { useUserStore } from '@/stores/user'
  import { useAppoitmentStore } from '@/stores/apppoitment';
  import { onMounted } from 'vue';
  import { displayDate } from '../../helpers/date'


  const user = useUserStore()
  const apppoitmentStore = useAppoitmentStore()

  onMounted(async() => {
    await user.getUser()
    await user.getUserAppoitments()
  })

  const confirmAppoitmet = async() => {
    apppoitmentStore.createAppoitment();
  }

</script>


<template>
  <div class=" mx-auto bg-white  w-11/12 md:w-3/5 lg:w-3/5 p-3 mt-4 rounded-lg">
    <h1 class="text-blue-800">Bienvenid@ <span >{{ user.getUserName.toUpperCase() }}</span></h1>
    <div>
      <div>
        <span class="text-blue-800 ml-3" v-if="apppoitmentStore.services.length === 0">Tus  proximas citas disponibles: </span>
      </div>
      <!-- citas disponibles -->
      <div v-if="apppoitmentStore.services.length === 0" v-for="(appoitment, index) in user.userAppoitments" :key="index" class="bg-pink-200 my-3 mx-3 p-3 rounded-lg text-white " style="background: linear-gradient(90deg,rgba(43,34,126,0.9878545168067226) 0%,  rgba(255,0,175,1) 100%);">
        <div v-for="servicio in appoitment.services">

          <h3>Servicio: {{ servicio.name }}</h3>
        </div>
        <p>Fecha: {{ displayDate(appoitment.date)}}</p>
        <p>Hora: {{ appoitment.time }}</p>
        <p class="text-right">Total a pagar: ${{ appoitment.totalAmount }}</p>
        <div class="flex gap-2 items-center mt-3 ">
          <RouterLink :to="{name: 'edit-appoitment', params: {id: appoitment._id}}" class="bg-pink-500 rounded-lg p-2 text-white text-sm font-black flex-1 md:flex-none">Editar cita</RouterLink>
          <button class="bg-red-700 rounded-lg p-2 text-white text-sm font-black flex-1 md:flex-none">Cancelar cita</button>
        </div>
      </div>
      <!-- confirmar la cita si se inicio sesion al momento de crear una cita  -->
        <div v-if="apppoitmentStore.services !== null" v-for="service in apppoitmentStore.services" class="bg-pink-200 my-3 p-3 rounded-lg text-white " style="background: linear-gradient(90deg,rgba(43,34,126,0.9878545168067226) 0%,  rgba(255,0,175,1) 100%);">
          <h4>Servicio: {{ service.name  }}</h4>
          <p>Duración{{ service.duration }}</p>
          <p>precio: ${{ service.price }}</p>
          <button @click="confirmAppoitmet" class="p-2 rounded-lg bg-blue-700 hover:bg-blue-900 ">Confirmar Cita</button>
        </div>
    </div>
  </div>

</template>

<style scoped>
  .span  {
    background: linear-gradient(90deg, rgba(255,0,175,1) 0%, rgba(43,34,126,0.9878545168067226) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; /* Para navegadores WebKit (Chrome, Safari, etc.) */
    background-clip: text;
    color: transparent; /* Asegura que solo el fondo sea visible */
  }

</style>
