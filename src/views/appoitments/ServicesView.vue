<script setup>
  import { useServicesStore } from '../../stores/services'
  import { watch, onMounted  } from 'vue';
  import { storeToRefs } from 'pinia';

  const store = useServicesStore();
  const  services  = storeToRefs(store).services

  onMounted(async () => {
    await store.getAllServices(); // Supone que tienes una función para obtener todos los servicios
  });

</script>
<template>
  <div class="border-solid border-2 border-pink-400 min-h-80  overflow-auto w-3/4 flex-col justify-start mx-auto mb-4 mt-5 rounded-lg" style="max-height: 720px;">
    <div class=" h-20 lg:h-16 w-full p-2 flex items-center rounded" style="border-bottom: 1px solid #ea75c5;" >
      <h2 class="text-blue-900 leading-7">Selecciona el servicio que deseas</h2>
    </div>
    <div class="flex flex-wrap content-start space-x-4 space-y-4 items-center p-5" >
      <div class="shadow-lg ml-4 mt-4 h-40 w-56 rounded-lg" v-for="service in services">
        <a href="">
          <img class="w-full h-2/4 object-cover" :src="service.image" alt="img-product">
          <div class="p-2 grid grid-rows-3 container ">
            <h2 class="text-2xl text-blue-900">{{service.name}}</h2>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
