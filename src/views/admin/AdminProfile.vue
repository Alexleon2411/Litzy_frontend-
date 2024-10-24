<script setup>
  import VueTailwindDatepicker from "vue-tailwind-datepicker";
  import { ref, computed, onMounted, watch } from 'vue';
  import { useRoute, useRouter } from "vue-router";
  import AdmintAppoitmentDetails from "@/components/AdmintAppoitmentDetails.vue";
  import { useAppoitmentStore } from "@/stores/apppoitment";


  const route = useRoute()
  const router = useRouter()
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

  onMounted(async () => {
    appoitments.value = await appoitmentStore.getAllAppoitments()
  });

// Observa cambios en el número de teléfono para realizar la búsqueda
  watch(telefono, (newVal) => {
    if (newVal) {
      sales.telefono = newVal; // Actualiza el store de ventas
      // Opcional: Puedes navegar a una ruta específica si se desea
      // router.push({ path: `/admin/ventas/${newVal}` });
    }
  });

</script>
<template>
  <button @click="appoitmentStore.getAllAppoitments">getAll</button>
  <h1 class="text-4xl font-bacl my-10"></h1>
  <div class="md:flex md:items-start gap-5">
    <div class="md:w-1/2 lg:w-1/3  flex justify-center ">
      <VueTailwindDatepicker
        as-single
        no-input
        v-model="appoitmentStore.date"
        :formatter="formatter"
        />
    </div>
    <div class="md:w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-scroll p5 pb-32">
      <!-- <p class="text-center text-lg font-black" v-if="sales.isDateSelected || sales.isPhoneSelected">
        Ventas {{ sales.isDateSelected ? `de la fecha: ${sales.date}` : '' }} {{ sales.isPhoneSelected ? `del teléfono: ${sales.telefono}` : '' }}
      </p> -->

      <p class="text-center text-lg">
        Selecciona una fecha o introduce el email del usuario para encontrar la cita
      </p>
      <div>
        <v-row>
          <v-col>
            <v-text-field

              label="Buscar por Teléfono"
              placeholder="Ingresa el número de teléfono"
              clearable
            ></v-text-field>
          </v-col>

        </v-row>
     </div>
      <div class="space-y-5" >
        <AdmintAppoitmentDetails
          v-for="appoitment in appoitments"
          :key="appoitment._id"
          :appoitment="appoitment"
        />
        <p class="text-right text-2xl bg-gray-300 pr-2"> Total citas del dia:

          <!-- <span class="font-black"> {{ appoitment.totalAmountDay }}</span> -->
        </p>
      </div>
      <p class="text-lg text-center font-black">No hay citas disponibles para los criterios seleccionados</p>
    </div>

  </div>
</template>
