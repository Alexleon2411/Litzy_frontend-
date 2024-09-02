<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

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

</script>
<template>
  <div class="bg-white p-6  mt-4 rounded-lg  w-11/12 justify-start flex-col mx-auto">
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
            :to="crumb.path" class="ml-4 text-sm font-medium text-blue-900 hover:text-gray-700"> {{ crumb.name }}</router-link>
          </div>
        </li>
      </ol>
    </nav>
    <h1 class="text-blue-900 p-2">Has una cita con Litzy Estetica</h1>
  </div>
</template>
