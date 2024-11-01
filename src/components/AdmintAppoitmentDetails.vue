
<script setup>
import { useAppoitmentStore } from '@/stores/apppoitment';
import { onMounted, ref, watch, computed } from 'vue';
import { displayDate } from '@/helpers/date';

defineProps({
  appoitment: {
    type: Object,
  }
})
const appoitmentStore = useAppoitmentStore()
onMounted(() =>{
  appoitmentStore.totalToPay = computed(()=> {
    appoitment.totalAmount += appoitment.totalAmount
  })

})



const checkApooitment = async () => {

}
</script>
<template>
  <div class="border-t border-gray-200 space-y-6 py-6">
    <h2 class="text-2xl font-black">Detalles de la cita</h2>
    <ul role="list" class="mt-2 divide-y devide-y-200 border-gray-200 text-sm font-medium text-gray-500">
      <li  class="flex space-x-6 py-2 ">
        <div class="flex-auto" >
          <!-- we can add the option that the admn clik on the name of the user and it shows the user information like we did in certificate enrollment in konnectr-admin -->

          <p>Nombre del Cliente: {{ appoitment.user.name }}</p>
          <p>Email del Cliente: {{ appoitment.user.email }}</p>
          <div v-for="service in appoitment.services" :key="service._id">
            <p>Servicio:{{ service.name }}</p>
          </div>
          <p>fecha: {{ displayDate(appoitment.date) }}</p>
          <p>Hora: {{ appoitment.time }}</p>
          <p>Total a pagar: {{ appoitment.totalAmount }}</p>
          <!-- <h3 class="text-gray-900">{{ item.name }}</h3>
          <p> {{ item.price}}</p>
          <p>Fecha: {{ item.date }}</p>
          <p>Hora:{{ item.time }}</p> -->
        </div>
        <dl class=" border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
          <div class="flex  p-1">
            <dt class="font-bold">
              <!-- look for a way to dislay the total amount the client should pay for the services taken -->
              <!-- <slot name="label">Total a pagar: {{ item.totalAmount }}</slot> -->
            </dt>
          </div>
        </dl>
      </li>
    </ul>
  </div>
</template>
