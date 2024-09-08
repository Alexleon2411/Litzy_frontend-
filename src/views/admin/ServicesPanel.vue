<script setup>
import { useServicesStore } from '@/stores/services';
import { watch, onMounted  } from 'vue';
import { storeToRefs } from 'pinia';

const store = useServicesStore();
const  services  = storeToRefs(store).services

onMounted(async () => {
  await store.getAllServices(); // Supone que tienes una función para obtener todos los servicios
});

const deleteService = ( async(id, img) => {
  const confirmation = confirm('¿Estás seguro de que quieres eliminar este servicio?');
    if (confirmation) {
      try {
        await store.deleteService(id, img);
        alert('Servicio eliminado correctamente');
      } catch (error) {
        alert('Error al eliminar el servicio');
        console.log(error);
      }
    }
})
</script>
<template>

  <div class="w-2/3 ml-5 md:ml-12 lg:ml-20 mt-5 flex jutidy-start">
    <router-link class="bg-pink-600 rounded-lg text-white p-2" :to="{name: 'creaServicio'}">Crear Un nuevo servicio</router-link>
  </div>
  <div class="w-11/12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-solid border-2 border-pink-400 mx-auto my-5 rounded-lg" >
    <div class=" shadow-lg ml-4 mt-4 w-80 rounded-lg overflow-auto my-4" v-for="service in services" style="height: 450px;">
      <img :src="service.image" alt="Imagen del producto" class="w-full h-2/4 object-cover">
      <div class="p-4 flex flex-col justify-between h-auto">
      <div>
        <h3 class="text-2xl text-blue-900 font-semibold">{{ service.name }}</h3>
        <p class="text-blue-900 mt-2 overflow-hidden">{{ service.description }}</p>
      </div>
      <!-- Información adicional -->
      <div class="mt-4">
        <div>
          <span class="block text-pink-500"><span class="text-blue-900">Duración: </span>{{ service.duration }}</span>
          <span class="block text-pink-500"><span class="text-blue-900">Categoria:</span> {{ service.category }}</span>
          <span class="block text-pink-500"><span class="text-blue-900">Precio: </span>{{ service.price }}$</span>
        </div>
        <div class="">
          <router-link class="rounded-lg bg-blue-500 p-1 text-white mr-3" :to="{name: 'editService', params: {id: service._id}}"> Editar</router-link>
          <button type="button" class="rounded-lg bg-red-500 px-1 text-white" @click="deleteService(service._id, service.image)">Eliminar </button>
        </div>
      </div>

    </div>
    </div>
  </div>
</template>
