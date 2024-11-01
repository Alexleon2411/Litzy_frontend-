<script setup>
// No additional setup required
</script>
<template>
  <footer class="bg-white border-t border-gray-200  lg:w-11/12  justify-start flex-col mx-auto " style="width: 98%;">
    <div class="lg:w-11/12 mx-auto  px-4 overflow-hidden sm:px-6 lg:px-8 md:flex lg:flex justify-around items-center">
      <div class=" flex-col justify-center sm:mb-4" >
        <!-- Logo or Icon -->
        <img src="/img/6.png" alt="Logo" class="logo-image" />
        <div class=" md:flex lg:flex justify-center space-x-6">
          <a href="#" class=" footer-social-icons " target="_blank">
            <span class="sr-only">Facebook</span>
            <i class="mdi mdi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/litzystetic" class="footer-social-icons" target="_blank">
            <span class="sr-only">Instagram</span>
            <i class="mdi mdi-instagram"></i>
          </a>
          <!--
            se va a dejar el siguiente enlace para usarse con tiktok si existe uno
          <a href="#" class="footer-social-icons" target="_blank">
            <span class="sr-only">Twitter</span>
            <i class="mdi mdi-twitter"></i>
          </a> -->

          <a href="https://wa.me/32467705169" class="footer-social-icons" target="_blank">
            <span class="sr-only">Whatsapp</span>
            <i class="mdi mdi-whatsapp"></i>
          </a>
        </div>
      </div>
      <div class="mt-8  md:flex lg:flex justify-center  lg:space-x-12">
        <div>
          <h3 class="text-lg font-semibold text-blue-900 tracking-wider uppercase">Direcion</h3>
          <ul class="mt-4 space-y-3">
            <li><a href="#" class="text-base text-blue-900 hover:text-blue-900">Marketing</a></li>
            <li><a href="#" class="text-base text-blue-900 hover:text-blue-900">Analytics</a></li>
            <li><a href="#" class="text-base text-blue-900 hover:text-blue-900">Commerce</a></li>
            <li><a href="#" class="text-base text-blue-900 hover:text-blue-900">Insights</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-blue-900 tracking-wider uppercase">Support</h3>
          <ul class="mt-4 space-y-4">
            <li><a href="#" class="text-base text-blue-900 hover:text-blue-900">Contacto</a></li>
            <li><a href="#" class="text-base text-blue-900 hover:text-blue-900">Reseñas</a></li>
            <li><a href="#" class="text-base text-blue-900 hover:text-blue-900">Guias</a></li>
          </ul>
        </div>
      </div>

    </div>
    <div>
      <div class="mt-8 border-t border-gray-200 pt-8">
        <p class="text-base text-blue-900 xl:text-center">© 2024 Litzy Estetica, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-social-icons {
  color: white;
  font-size: 25px;
  padding: 0px 6px;
  border-radius: 30px;
  background:linear-gradient(90deg, rgba(255,0,175,1) 0%, rgba(43,34,126,1) 100%) border-box; /* Gradiente en el borde */
  background-clip: padding-box; /* Para que el fondo se vea dentro del borde */
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.logo-image{
  width: 300px;
}

</style>
