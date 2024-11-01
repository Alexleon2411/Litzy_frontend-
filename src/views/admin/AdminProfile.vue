<script setup>
  import VueTailwindDatepicker from "vue-tailwind-datepicker";
  import { ref, computed, onMounted, watch } from 'vue';
  import { useRoute, useRouter } from "vue-router";
  import AdmintAppoitmentDetails from "@/components/AdmintAppoitmentDetails.vue";
  import { useUserStore } from "@/stores/user";
  import { useAppoitmentStore } from "@/stores/apppoitment";


  const route = useRoute()
  const router = useRouter()
  const userStore = useUserStore()
  const appoitmentStore = useAppoitmentStore()
  const appoitments =  ref([])

  const formatter = ref({
    date: 'DD/MM/YYYY',
    month: 'MMMM'
  })
  const search = ref({
    'name': '',
  })

  const telefono = computed(() =>  search.value.tlf)
  const status = computed(() => search.value.status);

   const  totalAmount = computed(() =>{
      return appoitments.value.reduce((total, appoitment) => {
        return total + appoitment.totalAmount;
      }, 0);
    })


  onMounted(async () => {
     await userStore.getUserAppoitments()
     appoitments.value = userStore.userAppoitments
     console.log(appoitmentStore.appoitmentsByDate)
  });



</script>
<template>
  <div class="md:flex md:items-start gap-5 my-10">
    <div class="md:w-1/2 lg:w-1/3  flex justify-center ">
      <VueTailwindDatepicker
        as-single
        no-input
        v-model="appoitmentStore.date"
        :formatter="formatter"
        />
    </div>
    <div class="md:w-1/2 lg:w-2/3  ">

      <p class="text-center text-lg">
        Selecciona una fecha o introduce el email del usuario para encontrar la cita
      </p>

      <div class="" style="overflow: auto; max-height: 500px;" v-if="appoitmentStore.appoitmentsByDate.length <= 0">
        <AdmintAppoitmentDetails
          v-for="appoitment in appoitments"
          :key="appoitment._id"
          :appoitment="appoitment"
        />
      </div>
      <p class="text-right text-2xl bg-gray-300 pr-2"> Total a pagar del dia: {{ totalAmount }}
      </p>
      <p class="text-lg text-center font-black" v-if="appoitments.length <= 0">No hay citas disponibles para los criterios seleccionados</p>
    </div>

  </div>
</template>
