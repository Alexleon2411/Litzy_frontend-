
<script setup>
  import { ref, onMounted, onBeforeUnmount, nextTick, computed} from 'vue'
  import { useUserStore } from '@/stores/user';
  import { useAppoitmentStore } from '@/stores/apppoitment';
  import { useRouter } from 'vue-router';

  const ShowUserMenu = ref(false);
  const ShowMobileMenu = ref(false);
  const delay = 200;
  const userStore = useUserStore();
  const router = useRouter()
  const appoitmentStore = useAppoitmentStore()

  const toggleMenu = async () => {
    ShowMobileMenu.value = !ShowMobileMenu.value;

    if (ShowMobileMenu.value) {
      await nextTick(); // to tell Vue to update the DOM
      const link = document.querySelectorAll('.mobile-link');
      link.forEach((link, index) => {
        setTimeout(() => {
          link.classList.add('show')
        }, delay * (index + 1));
      });
    } else {
      const links = document.querySelectorAll('.mobile-link');
      links.forEach(link => {
        link.classList.remove('show')
      });
    }
  };

  const cleanAppoitmentStoreData = () => {
    appoitmentStore.clearAppoitmentData()
    ShowMobileMenu.value = !ShowMobileMenu;
    router.push({name: 'new-appoitment'})
  }

  const handleClickOutside = (event) => {
    const nav = document.querySelector('nav');
    if (nav && !nav.contains(event.target)) {
      ShowMobileMenu.value = false;
      ShowUserMenu.value = false;
    }
  };
  const handleClick = () => {
    ShowUserMenu.value = false;
  }

  onMounted(() => {
    if(!ShowMobileMenu.value) {
      const links = document.querySelectorAll('.mobile-link');
      links.forEach(link => {
        link.classList.remove('show');
      });
    };
    userStore.getUser;
  })

  onBeforeUnmount(() => {
    // Eliminar el listener cuando el componente se desmonta
    document.removeEventListener('click', handleClickOutside);
  });

  const loginText = computed(() => {
    return userStore.user.name !== undefined ?  'Cerrar Sesion' :  'Iniciar Sesion';
  })
  const handleLogin = () => {
    if(loginText.value === 'Cerrar Sesion' ){
      console.log('cerrar sesion')
      userStore.logout();
    }else {
      router.push({name: 'login'})
      console.log('login ')
    }
    ShowUserMenu.value = false;
  }

</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg" >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button @click="toggleMenu" type="button" class="relative inline-flex items-center justify-center rounded-md p-2 bg-gray-700 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white button-mobile" >

            <span class="sr-only">Open main menu</span>
            <div class="relative w-6 h-6 ">
              <span :class="['hamburguer-line', {'rotate-45 top-2.5': ShowMobileMenu, 'top-1': !ShowMobileMenu}]"></span>
              <span :class="['hamburguer-line', {'opacity-0': ShowMobileMenu, 'opacity-100 top-3': !ShowMobileMenu}]"></span>
              <span :class="['hamburguer-line', {'rotate--45 top-2.5': ShowMobileMenu, 'top-5': !ShowMobileMenu}]"></span>
            </div>

          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <RouterLink :to="{name: 'home'}">
              <img class="h-16 w-auto justify-center" src="/img/6.png" alt="Logo Litzy">
            </RouterLink>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- big screen/ pantalla grande-->
                <button @click="cleanAppoitmentStoreData" class="rounded-md px-3 py-2  my-3 text-sm font-medium text-blue-900 hover:bg-blue-900 hover:text-white  ease-in duration 900">
                  Servicios
                </button>
                <RouterLink :to="{name: 'contacto'}" class="rounded-md px-3 py-2 my-3 text-sm font-medium text-blue-900 hover:bg-blue-900 hover:text-white  ease-in duration 900">
                  Contacto
                </RouterLink>
               <!--  <RouterLink :to="{name: 'blog'}" class="rounded-md px-3 py-2 my-3 text-sm font-medium text-blue-900 hover:bg-blue-900 hover:text-white  ease-in duration 900">
                  Blog
                </RouterLink> -->
                <RouterLink :to="{name: 'resultado'}" class="rounded-md px-3 py-2 my-3 text-sm font-medium text-blue-900 hover:bg-blue-900 hover:text-white  ease-in duration 900">
                  Resultados
                </RouterLink>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button @click="ShowUserMenu = !ShowUserMenu" type="button" class="avatar relative flex rounded-full   focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <span class="mdi mdi-account-circle rounded-full text-4xl"></span>
              </button>
            </div>

            <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" v-if="ShowUserMenu" @click.self="ShowUserMenu = false">
              <!-- Active: "bg-gray-100", Not Active: "" -->
               <div v-if="loginText === 'Cerrar Sesion'">
                 <RouterLink :to="userStore.user.admin ? {name: 'adminProfile'} : {name: 'my-appoitments'}" @click="handleClick" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">your Profile</RouterLink>
                <!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a> -->
                <a href="#" @click="handleClick" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
               </div>
              <button  @click="handleLogin" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">{{ loginText }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu" v-if="ShowMobileMenu">
      <div class="space-y-1 px-2 pb-3 pt-2 ">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <RouterLink @click="cleanAppoitmentStoreData"  class="mobile-link block rounded-md px-3 py-2 text-base bg-pink-200 font-medium text-gray-600 hover:bg-pink-400 hover:text-white ">
          Servicios
        </RouterLink>
        <RouterLink :to="{name: 'contacto'}" @click="ShowMobileMenu = !ShowMobileMenu"  class="mobile-link block rounded-md px-3 py-2 text-base bg-pink-200 font-medium text-gray-600 hover:bg-pink-400 hover:text-white">
          Contacto
        </RouterLink>
       <!--  <RouterLink :to="{name: 'blog'}" @click="ShowMobileMenu = !ShowMobileMenu" class="mobile-link block rounded-md px-3 py-2 text-base bg-pink-200 font-medium text-gray-600 hover:bg-pink-400 hover:text-white">
          Blog
        </RouterLink> -->
        <RouterLink :to="{name: 'resultado'}" @click="ShowMobileMenu = !ShowMobileMenu" class="mobile-link block rounded-md px-3 py-2 text-base bg-pink-200 font-medium text-gray-600 hover:bg-pink-400 hover:text-white">
          Resultados
        </RouterLink>
        <a href="#" class="mobile-link block rounded-md px-3 py-2 text-base bg-pink-200 font-medium text-gray-600 hover:bg-pink-400 hover:text-white">Crear Cita</a>
      </div>
    </div>
  </nav>r
</template>

<style>
  .mobile-link{
    opacity: 0;
    transform: translateX(-160px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .mobile-link.show{
    opacity: 1;
    transform: translateY(0);
  }
  .hamburguer-line{
    height: 0.125rem; /* 2px de altura */
    width: 1.5rem; /* 25px de ancho */
    background-color: currentColor;
    display: block;
    position: absolute;
    left: 0;
    transition: all 0.3s ease;
  }

  .rotate-45{
    transform: rotate(45deg);
  }
  .rotate--45{
    transform: rotate(-45deg);
  }

  .opacity-0{
    opacity: 0;
  }
  .opacity-100{
    opacity: 1;
  }

  /* configuracion para el boton de la izquierda para mostrar el navbar  */
  .button-mobile{
    border-radius: 10px;
    border: 1px solid ; /* Borde transparente */
    background:  /* Fondo blanco interno */
                linear-gradient(90deg, rgba(255,0,175,1) 0%, rgba(43,34,126,1) 100%) border-box; /* Gradiente en el borde */
    background-clip: padding-box; /* Para que el fondo se vea dentro del borde */
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .avatar{
    padding: 2px 4px ;
    color: white;
    border: 1px solid white;
    background:
                linear-gradient(90deg, rgba(255,0,175,1) 0%, rgba(43,34,126,1) 100%) border-box; /* Gradiente en el borde */
  }

</style>
