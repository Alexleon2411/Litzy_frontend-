<script setup>
import { useServicesStore } from '@/stores/services';
import { useRoute } from  'vue-router'
import { onMounted, ref, computed, watch } from 'vue';
import Service from '@/components/Service.vue'


onMounted(async () => {
  const category = route.query.category
  await store.getFilteredServices(category) // para obtener los datos filtadros al mostrar el componente
});
  const store = useServicesStore()
  const route = useRoute();
  const serviceDetail = ref(false);
  const servicio = ref({})
  const selectedCategory = ref();


  const handlerDetail = (service) => {
     servicio.value = service;
     serviceDetail.value = true;
  }

  watch(selectedCategory, async (newCategory) => {
  console.log("Selected category:", newCategory);

  // Llamar al store para obtener servicios filtrados según la categoría
  if (newCategory === 'all') {
    await store.getAllServices();  // Si es "all", obtenemos todos los servicios
  } else {
    await store.getFilteredServices(newCategory);  // Obtener servicios filtrados por categoría
  }
});

  const filteredServices = computed(() => {
    return selectedCategory.value === 'all'? store.services : store.filteredServices;
  });

</script>
<template>
  <div class="border-solid border-2 border-pink-400 min-h-80  overflow-auto w-11/12 lg:w-3/5 flex-col justify-start   mx-auto mb-4 mt-5 rounded-lg" style="max-height: 720px;">
    <div class="ml-2">
      <p class="text-pink-400">Filtrar</p>
      <div>
      <label class="text-pink-400">
        <input type="radio" value="all" v-model="selectedCategory" /> All
      </label>
      <label class="text-pink-400">
        <input type="radio" value="facial" v-model="selectedCategory" /> Cara
      </label>
      <label class="text-pink-400">
        <input type="radio" value="masajes" v-model="selectedCategory" /> Cuerpo
      </label>
      <label class="text-pink-400">
        <input type="radio" value="enbellecimiento" v-model="selectedCategory" /> Piel
      </label>
    </div>
    </div>
    <div class=" h-20 lg:h-16 w-full p-2 flex items-center rounded" style="border-bottom: 1px solid #ea75c5;" >
      <button class="mdi mdi-arrow-left text-3xl mr-4 " v-if="serviceDetail" @click="serviceDetail = !serviceDetail"></button>
      <h2 class="text-blue-900 leading-6 text-lg lg:leading-7">
        Selecciona el servicio que deseas
      </h2>
    </div>

    <div class="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  items-center justify-items-center mt-3 "  v-if="!serviceDetail">
      <div class="shadow-lg h-40 w-52 rounded-lg flex items-center justify-center" v-for="service in filteredServices">
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
