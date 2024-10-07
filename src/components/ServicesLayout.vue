<script setup>

</script>
<template>
  <!-- servicios  -->

  <div class="w-11/12 lg:w-1/2 align-center  mx-auto my-9  lg:flex">
    <!-- detalles  -->
    <div class=" w-full lg:w-1/3 ">
      <h3 style="font-family: 'Convergence', 'sans-serif'; font-size: 2.2rem" class="text-blue-900">Sus Requerimientos</h3>
      <p style="font-family: 'Convergence', 'sans-serif'; font-size: .975rem" class="align-baseline text-blue-900">Siempre estamos dispuestos a escuchar las necesidades de nuestros pacientes, para poder ofreceler una respuesta adaptda a sus requerimientos.</p>
    </div>
    <!-- iconos -->
    <div class="lg:mx-10 w-full lg:w-2/3 mt-2">
      <!-- icono de cara -->
      <div >
        <RouterLink :to="{name: 'filtered', query: { category: 'facial' }}" class=" services-section">
          <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 45.6 50" width="45.6" class="icon-svg">
            <g fill="#ff69b4">
              <path d="M8.2 16.2C8.2 8.1 14.8 1.6 22.8 1.6c7.4 0 13.5 5.5 14.5 12.6-2.5 1.9-5.6 3-8.8 3-4.8 0-9.3-2.4-12-6.3l-1.3.9c3 4.4 8 7 13.3 7 3.2 0 6.3-1 9-2.7v.2 14.2h1.5v-14.3C39.5 7.3 32.2 0 23.3 0S7.1 7.3 7.1 16.2v14.2h1.6z"/>
              <path d="M33.1 39h-.4l-.3.4c-1.9 2.5-5.5 4.1-9.6 4.1-4 0-7.7-1.6-9.6-4.1l-.2-.4h-.4c-.2 0-12.6 1.2-12.6 11h1.6c0-7.6 8.8-9.1 10.7-9.4 2.2 2.7 6.2 4.4 10.6 4.4 4.3 0 8.3-1.7 10.5-4.4 2 .3 10.7 2 10.7 9.4h1.6c-.1-9.8-12.5-11-12.6-11z"/>
            </g>
          </svg>
          <h3 class="title text-blue-900">Cara</h3>
          <div class="text text-blue-900">
            Un rostro de aspecto juvenil suele considerarse mas atractivo y nosotros podemos ayudarte a conseguir este objetivo
          </div>
        </RouterLink>
      </div>
      <!-- icono de cuerpo -->
      <div>
        <RouterLink :to="{name: 'filtered', query: { category: 'masajes' }}" class=" services-section">
          <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 46.8 50" width="46.8" class="icon-svg">
            <g fill="#ff69b4">
              <path d="m20.7 6-1.3-.9c-1.7 2.5-4.5 4-7.5 4-3.4 0-6.4-1.9-8-4.7v-.1c-.7-1.3-1.1-2.8-1.1-4.3h-1.6c0 1.8.5 3.5 1.3 5.1 1.8 4.3 4.6 8.5 4.7 8.6 3.5 5.9-.8 11.2-2.2 13-.1.1-.2.3-.3.4-.1.2-.3.3-.4.5-1 1.2-2.2 2.8-3.3 6.7-2 7.2-.4 15.4-.3 15.7l1.6-.3c0-.1-1.6-8.2.3-15 1-3.6 2.1-5 3-6.2.1-.2.3-.4.4-.5s.2-.2.3-.3c4.2-5.3 5-10.3 2.3-14.8 0 0-1.1-1.6-2.3-3.8 1.6 1 3.6 1.6 5.7 1.6 3.4 0 6.7-1.8 8.7-4.7z"></path>
              <path d="m45.8 34.2c-1.1-3.9-2.3-5.5-3.3-6.7-.1-.2-.3-.3-.4-.5-.1-.1-.2-.2-.3-.4-1.4-1.8-5.7-7.1-2.2-12.9.1-.2 3-4.3 4.8-8.7.8-1.5 1.3-3.2 1.3-5h-1.7c0 1.5-.4 3-1.1 4.3v.1c-1.5 2.8-4.5 4.7-8 4.7-3 0-5.8-1.5-7.5-4l-1.4.9c2 2.9 5.3 4.7 8.9 4.7 2.1 0 4-.6 5.7-1.6-1.2 2.2-2.3 3.8-2.4 3.8-2.7 4.5-1.9 9.5 2.3 14.8.1.1.2.2.3.3.1.2.3.3.4.5.9 1.2 2 2.5 3 6.2 1.9 6.9.3 15 .3 15l1.6.3c0-.3 1.7-8.5-.3-15.8z"></path>
              <path d="m29.7 40.1-6.3 4.4-6.3-4.4-.9 1.3 6.4 4.5v3.9h1.6v-3.9l6.4-4.5z"></path>
            </g>
          </svg>
          <h3 class="title text-blue-900">Cuerpo</h3>
          <div class="text text-blue-900">
            Una figura armoniosa suele ser signo de mayor confianza con uno mismo, Descubra lo que tenemos para ofrecerle
          </div>
        </RouterLink>
      </div>
      <!-- icono de piel -->
      <div>
        <RouterLink :to="{name: 'filtered', query: { category: 'enbellecimiento' }}" class=" services-section" >
          <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 44.7 50" width="44.7" class="icon-svg">
            <g fill="#ff69b4">
              <path d="m16 32.9c-4.9 0-8.9-4-8.9-8.9 0-2.5 1-4.8 2.8-6.5l-1.1-1.1c-2.1 2-3.3 4.7-3.3 7.6 0 5.8 4.7 10.5 10.5 10.5 2.9 0 5.6-1.1 7.6-3.2l-1.1-1.1c-1.7 1.8-4 2.7-6.5 2.7z"></path>
              <path d="m38 39.2c-.9-6.7 3.2-15 3.2-15.1.1-.3 3.5-8.4 3.5-14.6 0-2.1-.6-3.8-1.8-5-1.8-1.7-4.3-1.7-4.3-1.7-6.4-.2-8.7-2.8-8.7-2.8l-1.2 1c.1.1 2.7 3.1 9.9 3.4 0 0 1.9 0 3.2 1.3.9.9 1.3 2.2 1.3 3.9 0 5.8-3.4 13.9-3.4 13.9-.2.3-3.7 7.5-3.5 14.2l-6.3-5.7c1.4-2.4 2.2-5.1 2.2-8 0-8.8-7.2-16-16-16-3.7 0-7 1.2-9.7 3.3-.1-.6-.1-1.2-.1-1.7 0-1.7.5-3 1.3-3.9 1.3-1.3 3.2-1.3 3.3-1.3 7.2-.4 9.8-3.3 9.9-3.4l-1.2-1s-2.3 2.6-8.7 2.9c-.1 0-2.6-.1-4.4 1.7-1.2 1.2-1.8 2.9-1.8 5 0 .9.1 1.9.2 2.9-3 2.9-4.9 7-4.9 11.5 0 7.1 4.6 13.1 11 15.2-.1 1.5-.6 5.4-2.2 7.7l1.3.9c1.7-2.6 2.3-6.4 2.4-8.2 1.1.3 2.3.4 3.5.4 2.9 0 5.7-.8 8.1-2.2l9.4 10.7c1 1 2.3 1.5 3.5 1.5 1.3 0 2.6-.5 3.5-1.5 1.9-1.9 1.9-5.1 0-7.1zm-36.4-15.2c0-8 6.5-14.5 14.4-14.5s14.5 6.5 14.5 14.5-6.5 14.5-14.5 14.5-14.4-6.5-14.4-14.5zm37.8 23.4c-1.3 1.3-3.5 1.3-4.8 0l-9.2-10.4c1.4-1 2.6-2.2 3.6-3.6l10.4 9.2c1.4 1.3 1.4 3.5 0 4.8z"></path>
            </g>
          </svg>
          <h3 class="title text-blue-900">Piel</h3>
          <div class="text text-blue-900">
            La piel esun tema de consulta cada vez más frecuente. Nuestros tratamientos y servicios pueden ayudarte a mejorar tu aspecto
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>


<style>
.services-section{
  flex-wrap: nowrap;
  -ms-flex-pack: start;
  justify-content: flex-start;
  width: 100%;
  padding: 1.25rem;
  font-size: .8125rem;
  color: #484848;
  text-decoration: none;
  border-top: .0625rem solid rgb(236 72 153);
  background: linear-gradient(to left, rgb(253 242 248) 50%, #d78fca 50%);
  background-size: 200% 100.5%;
  background-position: right;
  transition: background-position .5s, border-top .5s;
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.services-section:hover {
  border-color: aqua;
  background-position: left;
}
.services-section:hover .icon-svg g {
  fill: #fbfbfb; /* Color rosado */
}

.services-section:hover .text{
  color: #fff;
}
.services-section:hover .title{
  color: #fff;
}
.icon-svg{
  flex-shrink: 0;
  margin: 0 1.5rem 0 0;
  width: 2.5rem;
  height: 2.5rem;
}

.title {
  flex: 1;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 0 1.25rem 0 0;
  font-size: 1.3875rem;
  transition: color .25s;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
}
.text {
  flex: 2.5;
  line-height: 1.625rem;
  transition: color .35s;
  font-size: 13px;
  font-weight: 300;
}
</style>
