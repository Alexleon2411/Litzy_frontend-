<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAppoitmentStore } from '@/stores/apppoitment';
import { useUserStore } from '@/stores/user';
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import { useRoute, useRouter  } from 'vue-router';
import AppoitmentApi from '@/api/AppoitmentApi';

  const store = useAppoitmentStore();
  const userStore = useUserStore();
  const route = useRoute()
  const router = useRouter()
  const services = computed(() => store.services)
  const showServices = ref(true)
  const showDate = ref(false)
  const userDetails = ref(false);
  const formatter = ref({
    date: 'DD/MM/YYYY',
    month: 'MMM'
  })

  const { id } = route.params

  onMounted(async () => {
    try {
      const { data } = await AppoitmentApi.getById(id)
      store.setSelectedAppoitment(data)
      console.log(store.time)
    } catch (error) {
      console.log(error)
      router.push({name: 'my-appoitments'})
    }
  })
  const disableDate = (date) => {
    const today = new Date()
    return date < today || date.getMonth() > today.getMonth() + 2 || [0].includes(date.getDay())
  }
const editService = () => {
  showServices.value = true;
  showDate.value = false;
};

const deleteService = (service) => {
  alert('Servicio eliminado');
  console.log('este es el servicio', service )
  store.deleteService(service)
};

const saveChanges = () => {
  if(services.value.length !== 0) {
    showServices.value = false
    showDate.value = true
  }else {
    alert('No hay Servicio Seleccionado')
  }
};

const userInfo = () => {
  console.log( userStore.user)
  // en la siguiente funcion se verfica que el objeto no este vacio
  if (Object.keys(userStore.user).length > 0){
    store.createAppoitment();
  } else {
    showDate.value = false
    userDetails.value = true
  }
}

const createAppoitment = () => {
  store.createAppoitment();
};



</script>

<style scoped>
/* Add any specific styles here if needed */
</style>
<template>
<div class="w-11/12 lg:w-3/5 mx-auto  ">
<!-- servicio seleccionado  -->
<div v-if="showServices" class="lg:w-1/2 mx-auto p-6 bg-white rounded-lg shadow-md border border-pink-200 my-6 max-h-1/2 lg:max-h-1/3 overscroll-auto">
  <h2 class="text-xl font-semibold text-pink-600 mb-4">Resumen de tu Cita</h2>

  <div class="space-y-4">
    <div v-if="store.noServicesSelected">
      <h3>No hay ningun servicio serleccionado</h3>
    </div>
    <!-- Servicio Card -->
    <div class="flex items-center justify-between p-4 bg-pink-50 rounded-lg shadow-sm border border-pink-200" v-for="service in services" :key="service._id">
      <div >
        <h3 class="text-lg font-medium text-gray-700">{{ service.name }}</h3>
        <p class="text-sm text-gray-600">Duración: {{ service.duration }}</p>
        <p class="text-sm text-gray-600">Precio: ${{ service.price }}</p>
      </div>

      <!-- Edit and Delete Actions -->
      <div class="flex space-x-2">
        <button
          @click="deleteService(service)"
          class="text-red-500 hover:text-red-700"
          title="Eliminar Servicio"
        >
          🗑️
        </button>
      </div>
    </div>
  </div>
  <div class="mt-4 flex justify-end space-x-2">
    <h3 class="font-semibold text-pink-600" v-if="!store.noServicesSelected">Total a pagar: <span>${{ store.totalAmount}}</span> </h3>
  </div>
  <!-- Buttons to Add or Save Changes -->
  <div class="mt-4 flex justify-end space-x-2">
    <RouterLink
    :to="{name: 'new-appoitment'}"
    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
    Añadir más Servicios
    </RouterLink>
    <button
      @click="saveChanges"
      class="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
    >
      Seleccionar Fecha
    </button>
  </div>
</div>
<!-- calendario y hora -->
<div class=" p-5 bg-white rounded-lg shadow-md border border-pink-200 my-6 max-h-1/3 overscroll-auto m-1  " v-if="showDate">
  <!-- div del header -->
  <div class="flex">
    <button class="mdi mdi-arrow-left text-3xl mr-2 mb-2 align-middle " v-if="!showServices" @click="editService"></button>
    <h2 class="text-xl font-semibold text-pink-600">Fecha y Hora</h2>
  </div>
  <div class="lg:flex gap-5 items-start">
    <!-- div del calendario -->
    <div class="w-full lg:w-96 flex justify-center rounded-lg mb-2">
      <VueTailwindDatepicker
        :disable-date="disableDate"
        il8n="es-mx"
        as-single
        no-input
        :formatter="formatter"
        v-model="store.date"
        class="border border-pink-500 rounded-lg "
      />
    </div>
    <!-- div de las horas  -->
    <div v-if="store.isDateSelected" class="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10 lg:mt-0">
      <button
        v-for="hour in store.hours"
        class="block text-white rounded-lg text-xl p-3 disabled:opacity-10"
        :class="store.time === hour ? 'bg-blue-700 text-white' : 'bg-pink-500 '"
        @click="store.time = hour"
        :disabled="store.disableTime(hour) ? true : false || store.disablePreviousTime(hour) ? true : false"
      >
        {{ hour }}
    </button>
    </div>
  </div>
  <!-- divider -->
  <div v-if="store.isValidReservation" class="border-solid w-full border border-light-blue-500 my-3"></div>


  <!-- boton de submit  -->
  <div v-if="store.isValidReservation" class="flex justify-end ">
    <button class="bg-blue-600 p-2 rounded-lg text-white" @click="userInfo">Confirmar Cita</button>
  </div>
</div>
<!-- user details  -->
<div class="w-full my-10" v-if="userDetails">
<form @submit.prevent="createAppoitment" class="mt-3 lg:w-3/5  mx-auto  bg-white p-5 rounded-lg">
  <!-- Title -->
  <!-- <button class="bg-pink-500 hover:bg-pink-700 text-white p-2 rounded-lg mb-4">Iniciar sesion</button> -->
  <p class="mb-3"><RouterLink :to="{name: 'login'}">Registrar/Iniciar sesion</RouterLink> o llena el formulario</p>
  <!-- Full Name -->
  <div class="mb-4">
    <label for="firstName" class="block text-sm font-medium text-blue-900"> Name</label>
    <input v-model="store.user.name" type="text" id="firstName" class="mt-1 block w-full py-2 px-3 border border-pink-500 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-indigo-500 sm:text-sm" required>
  </div>
  <div class="mb-4">
    <label for="tlf" class="block text-sm font-medium text-blue-900">Telefono</label>
    <input v-model="store.user.phone" type="text" id="tlf" class="mt-1 block w-full py-2 px-3 border border-pink-500 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-indigo-500 sm:text-sm" required>
  </div>
  <div class="mb-4">
    <label for="email" class="block text-sm font-medium text-blue-900">Email</label>
    <input v-model="store.user.email" type="text" id="email" class="mt-1 block w-full py-2 px-3 border border-pink-500 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-indigo-500 sm:text-sm" required>
  </div>
  <!-- Submit Button -->
  <div >
    <button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Submit
    </button>
  </div>
</form>
</div>
</div>
</template>
