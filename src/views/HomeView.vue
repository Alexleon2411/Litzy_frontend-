<script setup>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'
import Services from '../components/ServicesLayout.vue'


</script>

<template>
  <div class=" flex justify-center">
    <div class="flex justify-between h-1/5 w-20 items-center">
      <span class="mdi mdi-facebook"></span>
      <span class="mdi mdi-instagram"></span>
      <span class="mdi mdi-whatsapp"></span>
    </div>
  </div>
  <div>
    <NavBar/>
  </div>

  <Banner/>

  <div class=" w-11/12 lg:w-3/5 w-1/2 justify-start flex mx-auto py-20">
    <div class="justify-center inner">
      <h1 class="text-blue-900 z-auto">Bienvenidos a estetica Litzy</h1>
      <p  class="text-blue-900 align-baseline">
        La estetica Litzy está encantada de darle la bienvenida a su centro en Sato Domingo en la Zona oeste,
        nuestro objetivo es ofrecerle una atención personalizada que se adapte perfectamente a sus necesidades y espectativas
      </p>
      <button type="button" class="local-button">
        Nuestra Estetica
      </button>
    </div>
  </div>
  <Services/>
  <div class=" w-11/12 lg:w-1/2  mx-auto  pt-10 ">
    <div class=" lg:flex soluciones w-full">
      <h2 class="text-blue-900 w-1/2 mb-3 white-space-normal">Nuestra Soluciones</h2>
      <div style="font-family: 'Convergence', 'sans-serif'; font-size: .975rem" class="align-baseline text-blue-900 text w-2/3">
        Litzy Estetica es un equipo de profesionales experimentados y reconocidos, acostumbrados a satisfacer tus expectativas
        de las mejor manera posible.
      </div>
    </div>
    <div class="flex">
      <div class="w-1/5 lg:w-5/12 item">
        <span class="number-color">01</span>
        <h3 class="title text-blue-900 ">Categoria 1</h3>
        <ul>
          <li>Radio frecuencia</li>
          <li>Masaje Reductores</li>
          <li>Tratamiento de blanqueamiento corporal</li>
          <li>Masajes post operatorios</li>
          <li>Relleno de labios</li>
          <li>Aplicacion de botox</li>
          <li class="especial"><a href="#" class="link">Leer más <span class="mdi mdi-arrow-right arrow"></span></a></li>
        </ul>
      </div>
      <div class="w-1/5 lg:w-4/12 item">
        <span class="number-color">02</span>
        <h3 class="title text-blue-900">Categoria 2</h3>
        <ul>
          <li>Limpieza facial</li>
          <li>Masajes relajantes</li>
          <li>Exfoliacion corporal</li>
          <li>Dermapen</li>
          <li class="especial"><a href="#" class="link">Leer más <span class="mdi mdi-arrow-right arrow"></span></a></li>
        </ul>
      </div>
      <div class="w-1/5 lg:w-4/12 item">
        <span class="number-color">03</span>
        <h3 class="title text-blue-900">Categoria 3</h3>
        <ul>
          <li>Manicuere</li>
          <li>Pedicure</li>
          <li>Tintado de cejas</li>
          <li>Pestañas Postizas</li>
          <li class="especial"><a href="#" class="link">Leer más <span class="mdi mdi-arrow-right arrow"></span></a></li>
        </ul>
      </div>
    </div>

  </div>
</template>
<style>

  .inner {
    position: relative;
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    text-align: center;
  }
  h1{
    margin-top: 1.5rem;
    margin-left: -.125rem;
    margin-bottom: 1.5625rem;
    font-size: 1.875rem;
    line-height: 1.25em;
  }

  .local-button{
    display: inline-block;
    vertical-align: middle;
    width: auto;
    min-width: 9rem;
    margin: 0;
    margin-top: 20px;
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

  .local-button:hover {
    color: #fff;
    background-position: left;
    border-color: #d96ddd;
  }
  h2{
    font-size: 35px;
    line-height: 1.25rem;
    font-weight: 400;
    font-family: 'Convergence', 'sans-serif';
  }
.soluciones{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border-bottom: .0625rem solid rgb(236 72 153);
  padding-bottom: 2rem;
}
@media (max-width: 768px){
  .soluciones{
    display: block;
  }
}

  .item{
    flex: 1;
    margin: 2.5rem 1.375rem;
    text-decoration: none;
  }

  .item .title {
    flex: 1;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 0 1.25rem .875rem 0;
  font-size: 1.3875rem;
  transition: color .25s;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  }

  .number-color {
    color: #ea75c5;
    font-size: 20px;
  }
  ul{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    margin: 0 0 1.25rem;
  }
  ul li {
    position: relative;
    margin: 0 0 1.125rem;
    padding: 0;
    break-inside: avoid-column;
    color: rgba(30, 58, 138);
  }
  li.especial a.link {
    font-weight: 600;
    text-decoration: none;
    transition: color .15s;
    display: flex;
  }
  a{
    color: rgba(30, 58, 138) ;
    word-break: break-word;
    background-color: transparent;
  }
  a .arrow {
    font-size: 20px;
    align-items: center;
    text-align: center;
    margin-left: 5px;
  }
</style>
