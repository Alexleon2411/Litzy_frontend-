 import { defineStore } from "pinia";
 import { ref, computed, onMounted, reactive  } from "vue";
 import { useRouter } from "vue-router";

 export const useAppoitmentStore =  defineStore('appoitments', () => {
    const router = useRouter()
    const services = ref([])
    const date = ref('')
    const hours = ref([])
    const time = ref('')

    onMounted(() => {
      const startHour = 9;
      const endHour = 18;
      for(let hour = startHour; hour <= endHour; hour++){
        hours.value.push(hour + ':00')
      }
    })
    const user = reactive({
      title: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    })
    function onServiceSelected (servicio) {
      if (services.value.some(selectService => selectService._id === servicio._id)) {
        alert('ya este esrvicio ha sido añadido');
      }else {
        if(services.value.length === 3) {
          alert('Maximo 3 servicios por cita');
          return
        }
        console.log('aun no esta en la cita');
        services.value.push(servicio)
        router.push({name: 'appoitment-details'})
      }
    }

    function createAppoitment() {
      const appoitment = {
        services: services.value.map(service => service._id),
        date: date.value,
        time: time.value,
        totalAmount: totalAmount.value
      }
      console.log(appoitment)
    }

    function deleteService(service) {
      // Usar filter en lugar de map para eliminar el servicio
      const updatedServices = services.value.filter(serviceSelected => serviceSelected._id !== service._id);
      // Asigna el nuevo array al ref
      services.value = [...updatedServices]; // Spread para forzar la reactividad
      console.log(services.value);
    }
    const isServiceSelected = computed(() => {
      return (id) => services.value.some(servicio._id === id)
    })
    const totalAmount = computed(() => {
      return services.value.reduce((total, service) => total + service.price, 0) // reduce toma el total de lo que va a reducir y el servicio
    })

    const noServicesSelected = computed(() => services.value.length === 0)
    const isValidReservation = computed(() => {
      return services.value.length && date.value.length && time.value.length
    })

    return {
      totalAmount,
      services,
      date,
      hours,
      time,
      user,
      deleteService,
      onServiceSelected,
      createAppoitment,
      isServiceSelected,
      noServicesSelected,
      isValidReservation,
    }
 })
