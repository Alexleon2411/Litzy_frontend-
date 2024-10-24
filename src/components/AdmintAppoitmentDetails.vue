
<script setup>
import { useAppoitmentStore } from '@/stores/apppoitment';
import { onMounted, ref, watch } from 'vue';

defineProps({
  appoitment: {
    type: Object,
    required: true,
  }
})

onMounted(() =>{
  checkApooitment()
})

const checkApooitment = async () => {
  console.log(appoitment.value)
}
</script>
<template>
  <div class="border-t border-gray-200 space-y-6 py-6">
    <h2 class="text-2xl font-black">Detalles de la cita</h2>
    <p class="font-black text-xl-gray-500">Detalles de la cita</p>
    <ul role="list" class="mt-6 divide-y devide-y-200 border-gray-200 text-sm font-medium text-gray-500">
      <li v-for="item in appoitment" class="flex space-x-6 py-6 ">
        <div class="flex-auto">
          <!-- we can add the option that the admn clik on the name of the user and it shows the user information like we did in certificate enrollment in konnectr-admin -->
          <p>{{ item }}</p>
          <h3 class="text-gray-900">{{ item.name }}</h3>
          <p> {{ item.price}}</p>
          <p>Fecha: {{ item.date }}</p>
          <p>Hora:{{ item.time }}</p>
        </div>
        <dl class=" border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
          <div class="flex  p-1">
            <dt class="font-bold">
              <!-- look for a way to dislay the total amount the client should pay for the services taken -->
              <slot name="label">Total a pagar: {{ item.totalAmount }}</slot>
            </dt>
          </div>
        </dl>
      </li>
    </ul>
  </div>
</template>
