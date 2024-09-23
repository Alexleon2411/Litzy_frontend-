<script setup>
  import router from '@/router';
import { useAppoitmentStore } from '@/stores/apppoitment';

  const appoitment = useAppoitmentStore();

  defineProps({
    servicio: {
      type: Object
    }
  })


</script>
<template>
  <div class="w-full h-full md:flex lg:flex p-2" >
    <img :src="servicio.image" alt="imagen del servicio" class="lg:w-1/2 h-ful md:m-3 lg:m-3 object-cover">
    <div class="h-full mx-auto lg:w-1/2 divide-y divide-pink-300">
      <h3 class="text-pink-600 py-3">{{ servicio.name }}</h3>
      <p class="text-blue-900">{{ servicio.description }}</p>
      <div class="mt-2">
        <p class="text-blue-900">Duración</p>
        <p class="text-pink-400">{{ servicio.duration }}(s)</p>
      </div>
    </div>
  </div>
  <button class="bg-pink-400 text-white w-full" @click="appoitment.onServiceSelected(servicio)">Reservar</button>
  <div class="bg-pink-400 text-white w-full mt-1 text-center" v-if="appoitment.services.length !== 0">
    <RouterLink class="bg-pink-400 text-white w-full "  :to="{name: 'appoitment-details'}">Resumen de la cita</RouterLink>
  </div>
</template>
