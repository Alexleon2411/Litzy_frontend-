 import { defineStore } from "pinia";
 import { ref, computed, onMounted, reactive, watch  } from "vue";
 import { useRouter } from "vue-router";
 import AppoitmentApi from "@/api/AppoitmentApi";
 import { inject } from "vue";
 import { converToISO, convertToDDMMYYYY } from "@/helpers/date";
 import { useUserStore } from "./user";

 export const useAppoitmentStore =  defineStore('appoitments', () => {

    const router = useRouter()
    const appoitmentId = ref('')
    const toast = inject('toast')
    const services = ref([])
    const date = ref('')
    const hours = ref([])
    const time = ref('')
    const totalToPay = ref('')
    const user = ref({
      name: '',
      phone: '',
      email: '',
    })
    const appoitmentsByDate = ref([])
    const userStore = useUserStore()

    onMounted(() => {
      const startHour = 9;
      const endHour = 18;
      for(let hour = startHour; hour <= endHour; hour++){
        hours.value.push(hour.toString().padStart(2, '0') + ':00');
      }
    })

    watch(date, async () => {
      time.value = '';
      if(date.value === '') return;
      const { data } = await AppoitmentApi.getByDate(date.value)
      if(appoitmentId.value){
        console.log('editando')
        // para editar tomamos las citas que no son igaules a las que ya estamos editando
        appoitmentsByDate.value = data.filter( appoitment => appoitment._id !== appoitmentId.value)
        time.value = data.filter( appoitment => appoitment._id === appoitmentId.value)[0].time

      }else{
        // we call the method to fetch the data for the date selected
        getAppoitmentsBydate()
      }
    })

    function onServiceSelected (servicio) {
      if (services.value.some(selectService => selectService._id === servicio._id)) {
        alert('ya este servicio ha sido añadido');
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

    async function createAppoitment() {
      const appoitment = {
        services: services.value.map(service => service._id),
        date: converToISO(date.value),
        time: time.value,
        totalAmount: totalAmount.value
      }
      const { data } = await AppoitmentApi.create(appoitment)
      toast.open({
        message: data.msg,
        type: 'success'
      })
      clearAppoitmentData()
      router.push({name: 'my-appoitments'})
    }

    function clearAppoitmentData() {
      appoitmentId.value = ""
      services.value = []
      date.value = ''
      time.value = ''
    }

    async function updateAppoitment() {
      const appoitment = {
        services: services.value.map(service => service._id),
        date: converToISO(date.value),
        time: time.value,
        totalAmount: totalAmount.value
      }
      const { data } = await AppoitmentApi.update(appoitmentId.value, appoitment)
      toast.open({
        message: data.msg,
        type: 'success'
      })
      clearAppoitmentData()
      router.push({name: 'my-appoitments'})
    }

    async function cancelAppoitment(id){
      if(confirm('¿Deseas cancelar esta cita?')){

        try {
          const { data } = await AppoitmentApi.delete(id)
          toast.open({
            message: data.msg,
            type: 'success'
          })
          userStore.getUserAppoitments()
        } catch (error) {
          toast.open({
            message: error,
            type: 'error'
          })
        }
      }
    }

    function deleteService(service) {
      // Usar filter en lugar de map para eliminar el servicio
      const updatedServices = services.value.filter(serviceSelected => serviceSelected._id !== service._id);
      // Asigna el nuevo array al ref
      services.value = [...updatedServices]; // Spread para forzar la reactividad
      console.log(services.value);
    }

    async function getAppoitmentsById(id) {
      const { data } = await AppoitmentApi.getById(id)
      services.value = data.services
      date.value = data.date
      time.value = data.time
    }

    function setSelectedAppoitment(data){
      services.value = data.services
      date.value = convertToDDMMYYYY(data.date)
      time.value = data.time
      appoitmentId.value = data._id

      console.log(appoitmentId.value)
    }

    async function  getAppoitmentsBydate(){
      try {
        console.log(date.value)
        const isoDate = converToISO(date.value)
        console.log(isoDate)
        const { data } = await AppoitmentApi.getByDate(date.value)
        appoitmentsByDate = data
        console.log(data)
      } catch (error) {
        console.log(error)
      }
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

    const isDateSelected = computed(() => {
      return date.value ? true : false
    })


    const disablePreviousTime = computed(() => {
      return(hour) => {
        const currentDateTime = new Date();

        const day = String(currentDateTime.getDate()).padStart(2, '0'); // Día con dos dígitos
        const month = String(currentDateTime.getMonth() + 1).padStart(2, '0'); // Mes con dos dígitos (getMonth() retorna de 0-11)
        const year = currentDateTime.getFullYear(); // Año con 4 dígitos
        // Formatear la fecha actual en "dd/mm/yyyy"
        const today = `${day}/${month}/${year}`;
        const hours = String(currentDateTime.getHours()).padStart(2, '0'); // Asegurar que tenga 2 dígitos
        const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
        const currentTime = `${hours}:${minutes}`;
        let disabled;
        console.log(currentTime > hour)
        if(today === date.value){
          disabled = currentTime > hour;
        }else{
          disabled = false;
        }
        return disabled;
      }

    })
    const disableTime = computed(() => {
      return (hour) => {
        // Deshabilitar si la cita ya está ocupada
        const isTaken = appoitmentsByDate.value.find(appoitment => appoitment.time === hour);
        // Retornar verdadero si ya está ocupada la hora o si es una hora pasada/proxima
        return isTaken ;
      };
    });


    return {
      totalAmount,
      totalToPay,
      services,
      date,
      hours,
      time,
      user,
      appoitmentsByDate,
      deleteService,
      onServiceSelected,
      createAppoitment,
      getAppoitmentsById,
      setSelectedAppoitment,
      updateAppoitment,
      clearAppoitmentData,
      cancelAppoitment,
      isServiceSelected,
      noServicesSelected,
      isValidReservation,
      isDateSelected,
      disableTime,
      disablePreviousTime
    }
 })
