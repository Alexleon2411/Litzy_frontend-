<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useUserStore } from '@/stores/user';

  const route = useRoute();
  const userStore = useUserStore()

  const breadcrumbs = computed(() => {
    const pathArray = route.path.split('/').filter((path) => path);
    const breadcrumbPaths = [{name: 'Home', path: '/'}]
     pathArray.forEach((path, index) => {
        breadcrumbPaths.push({
          name: formatBreadCrumbName(path),

            path: `/${pathArray.slice(0, index + 1).join('/')}`,

        })
    })
    return breadcrumbPaths;
  })

  const formatBreadCrumbName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  const getLink = (path) => {
    // Verifica si el path contiene "admin"
    if (path.includes('admin')) {
      return '/admin/panel-services'; // Redirige a panel-services
    }
    if(path.includes('auth')){
      return '/auth/login';
    }

    if (path.includes('reservaciones')) {
      return '/reservaciones'
    }
    return path; // Si no, devuelve el path original
  }

  const breadcrumbTitle = computed(() => {
    const currentRoute = route.name;
    switch (currentRoute) {
      case 'contacto':
        return 'Contacto';
      case 'nueva':
        return 'Selecciona el servicio que deseas ';
      case 'appoitments':
      case 'new-appoitment':
        return 'Haz una cita con Litzy Estética';
      case 'blog':
        return 'Bienvenidos a nuestro blog';
      case 'resultado':
        return 'Nuestra Sección de antes y despues ';
      case 'creaServicio':
        return 'Crear un nuevo servicio';
      case 'reservaciones/miReservacion':
        return `Bienvenid@ ${userStore.getUserName}`
      default:
        return 'Litzy Estética';
    }
  });

</script>
<template>
  <div class="bg-white p-6  rounded-lg  w-11/12 justify-start flex-col mx-auto">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="flex items-center space-x-4">
        <li  v-for="(crumb, index) in breadcrumbs" :key="index">
          <div class="flex items-center">
            <svg
              v-if="index !== 0"
              class="flex-shrink-0 h-5 w-5 text-gray-300"
              xmlns="http:www.w3.org/2000/svg"
              view-box="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">

                <path d="M9.5 7L14.5 12L9.5 17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
            <router-link
            :to="getLink(crumb.path)" class="ml-4 text-sm font-medium text-blue-900 hover:text-gray-700"> {{ crumb.name }}</router-link>
          </div>
        </li>
      </ol>
    </nav>
    <h1 class="text-blue-900 p-2">{{breadcrumbTitle}}</h1>
  </div>
</template>
