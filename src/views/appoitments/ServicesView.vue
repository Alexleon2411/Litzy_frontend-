<script setup>
  import { useServicesStore } from '../../stores/services'
  import { watch, onMounted, ref  } from 'vue';
  import { storeToRefs } from 'pinia';
  import Service from '../../components/Service.vue'

  const store = useServicesStore();
  const  services  = storeToRefs(store).services
  const serviceDetail = ref(false);
  const servicio = ref({})

  onMounted(async () => {
    await store.getAllServices(); // Supone que tienes una función para obtener todos los servicios
  });

  const handlerDetail = (service) => {
     servicio.value = service;
     serviceDetail.value = true;
  }

</script>
<template>
  <div class="border-solid border-2 border-pink-400 min-h-80  overflow-auto w-11/12 lg:w-3/5 flex-col justify-start   mx-auto mb-4 mt-5 rounded-lg" style="max-height: 720px;">
    <div class=" h-20 lg:h-16 w-full p-2 flex items-center rounded" style="border-bottom: 1px solid #ea75c5;" >
      <button class="mdi mdi-arrow-left text-3xl mr-4 " v-if="serviceDetail" @click="serviceDetail = !serviceDetail"></button>
      <h2 class="text-blue-900 leading-6 text-lg lg:leading-7">
        Selecciona el servicio que deseas
      </h2>
    </div>
    <!-- <div class="flex flex-wrap content-start justify-center space-x-4 space-y-4 items-center p-5" >
      <div class="shadow-lg ml-4 mt-4 h-40 w-56 rounded-lg col-start" v-for="service in services">
        <a href="">
          <img class="w-full h-2/4 object-cover" :src="service.image" alt="img-product">
          <div class="p-2 grid grid-rows-3 container ">
            <h2 class="text-2xl text-blue-900">{{service.name}}</h2>
          </div>
        </a>
      </div>
    </div> -->
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center justify-items-center" v-if="!serviceDetail">
      <div class="shadow-lg h-40 w-52 rounded-lg flex items-center justify-center" v-for="service in services">
        <button class="h-full w-full" @click="handlerDetail(service)">
          <img class="w-full h-2/4 object-cover" :src="service.image" alt="img-product">
          <div class="p-2 grid grid-rows-3">
            <h2 class="text-2xl text-blue-900">{{service.name}}</h2>
          </div>
        </button>
      </div>
    </div>
    <div v-if="serviceDetail">
      <service :servicio="servicio"></service>
    </div>
  </div>
</template>
