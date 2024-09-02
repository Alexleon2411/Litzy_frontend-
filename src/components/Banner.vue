<template>
  <!-- banner -->
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32mm h-3/4 lg:h-3/5 ">
      <img src="/img/bannerVrouw.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center bg-center opacity-75">
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl"><span class="text-white"></span> <span class="text-white-400">Litzy</span> <span class="text-white-400">Estetica</span></h2>
          <p class="mt-6 text-lg leading-8 text-white w-64">Dando lo mejor de si para entregarte un excelente servicio, nos complacera servirte y ayudarte a mejorar tu apariencia

          </p>
        </div>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <RouterLink :to="{name: 'new-appoitment'}" class="appoitment-button">
            Crear Cita
          </RouterLink>
        </div>
      </div>
    </div>
</template>
<style scoped>
  .appoitment-button{
    display: inline-block;
    vertical-align: middle;
    width: auto;
    min-width: 9rem;
    margin: 0;
    padding: .6875rem 1.375rem .5625rem;
    font-family: Inter, Arial, Verdana, Geneva, Helvetica, 'Liberation Sans', FreeSans, sans-serif;
    font-weight: 500;
    font-size: .8125rem;
    line-height: 1.7692307692;
    color: #343434;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    border: .0625rem solid #ea75c5;
    background: #fff linear-gradient(to left, #fff 50%, #d78fca 50%);
    background-size: 200% 100%;
    background-position: right;
    background-origin: border-box;
    transition: color .4s cubic-bezier(.39,.575,.28,.995),
                border-color .5s cubic-bezier(.39,.575,.28,.995),
                background-position .5s cubic-bezier(.39,.575,.28,.995),
                opacity .5s cubic-bezier(.39,.575,.28,.995);
    cursor: pointer;
    white-space: nowrap;
  }

  .appoitment-button:hover {
    color: #fff;
    background-position: left;
    border-color: #d96ddd;
}
</style>
