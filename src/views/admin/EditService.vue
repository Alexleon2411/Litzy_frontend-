<script setup>
  import userImage from '@/composables/useImage';
  import { useServicesStore } from '@/stores/services';
  import { useRoute, useRouter  } from 'vue-router'
  import {ref, computed, reactive, onMounted, watch } from 'vue'


  const store = useServicesStore()
  const route = useRoute()
  const router = useRouter()
  const {url, imageUploaded, onFileChange } = userImage()
  // Ref para almacenar la categoría seleccionada
  const selectedCategory = ref('') // Almacena solo una categoría seleccionada
  const service = ref({})
  const formData = reactive({
    name: '',
    description: '',
    duration: '',
    category: '',
    price: '',
    image: url,
  })
  const serviceID = ref('')

  onMounted(async () => {
    serviceID.value = route.params.id
    try {
      await store.getOneService(serviceID.value)
      service.value = store.service
      selectedCategory.value = service.value.category
    } catch (error) {
      console.log(error)
    }
  })

  // el watcher detecta los cambios hechos el en service y se los añade a formData para poder mostralo en el form
  watch(service, (service) => {
    if(!service) {
      router.push({name: 'panelServices'})
    }
    const { _id, __v, ...filteredService } = service;
    Object.assign((formData), filteredService)
  })

  const handleSubmit = () => {
    formData.category = selectedCategory.value;
    try {
      store.updateService(serviceID.value, formData)
    } catch (error) {
      console.log(error)
    }
    // Perform further actions, such as sending data to an API
  }

</script>
<template>
  <div class="w-2/3 ml-5 lg:ml-20 mt-5 flex jutidy-start">
    <router-link class="bg-pink-600 rounded-lg text-white p-2" :to="{name: 'panelServices'}">Volver</router-link>
  </div>
  <form @submit.prevent="handleSubmit" class="w-11/12 lg:w-2/5  mx-auto p-8 bg-white shadow-md rounded-lg my-10">
    <!-- Title -->
    <div class="mb-4">
      <label for="title" class="block text-sm font-medium text-blue-900">Nombre del servicio </label>
      <input v-model="formData.name" type="text" id="title" class="mt-1 block w-full py-2 px-3 border border-pink-500 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-indigo-500 sm:text-sm" required>
    </div>

    <!-- imagen del producto -->
    <div class=" mb-5">
      <label for="image" class="block text-md font-medium text-blue-900">Imagen del servicio</label>
      <input
      type="file"
      label="Imagen del Producto"
      id="image"
      name="image"
      :validation-messages="{ required: 'La imagen del producto es obligatoria' }"
      accept=".jpg, .jpeg, .png"
      @change="onFileChange"
      />

      <div v-if="imageUploaded">
        <p class="font-black"> Imagen Servicio:</p>
        <img :src="url" alt="imagen del servicio" class="w-32">
      </div>
    </div>


    <!-- description del servicio -->
    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-blue-900">Descripción del Servicio</label>
      <input v-model="formData.description" type="text" id="description" class="mt-1 block w-full py-2 px-3 border border-pink-500 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-indigo-500 sm:text-sm" required>
    </div>

    <!-- duracion -->
    <div class="mb-4">
      <label for="duracion" class="block text-sm font-medium text-blue-900">Duración</label>
      <input v-model="formData.duration" type="text" id="duracion" class="mt-1 block w-full py-2 px-3 border border-pink-500 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-indigo-500 sm:text-sm" required>
    </div>

    <!-- precio -->

    <div class="mb-4">
      <label for="price" class="block text-sm font-medium text-blue-900">Precio</label>
      <input min="1" v-model="formData.price" type="number" id="price" class="mt-1 block w-full py-2 px-3 border border-pink-500 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-indigo-500 sm:text-sm" required>
    </div>

    <!-- categorias -->
    <div class="mb-4">
      <p class="block text-sm font-medium text-blue-900">Categoría del servicio:</p>
      <div class="flex items-center mt-2">
        <input v-model="selectedCategory" type="radio" id="facial" value="facial" class="h-4 w-4 text-pink-500 border-pink-500 rounded">
        <label for="facial" class="ml-2 block text-sm text-blue-900">Tratamiento facial</label>
      </div>
      <div class="flex items-center mt-2">
        <input v-model="selectedCategory" type="radio" id="masajes" value="masajes" class="h-4 w-4 text-pink-600 border-pink-500 rounded">
        <label for="masajes" class="ml-2 block text-sm text-blue-900">Masajes</label>
      </div>
      <div class="flex items-center mt-2">
        <input v-model="selectedCategory" type="radio" id="enbellecimiento" value="enbellecimiento" class="h-4 w-4 text-pink-600 border-pink-500 rounded">
        <label for="enbellecimiento" class="ml-2 block text-sm text-blue-900">Embellecimiento</label>
      </div>
    </div>

    <!-- Submit Button -->
    <div>
      <button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </div>
  </form>
</template>
