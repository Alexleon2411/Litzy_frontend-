<template>
  <div class="container mx-auto" id="container">
    <!-- Sección de Sign In -->
    <div class="form-container sign-in">
      <form @submit.prevent="login">
        <h1>Iniciar Sesion</h1>
        <div class="social-container">
          <a href="#" class="social"><span class="mdi mdi-facebook"></span></a>
          <a href="#" class="social"><span class="mdi mdi-google"></span></a>
          <a href="#" class="social"><span class="mdi mdi-linkedin"></span></a>
        </div>
        <div class="sign-in-span">
          <span >Or use your email account</span>
        </div>
        <div >
          <input id="email" v-model="email" type="email" placeholder="Email" required />
          <input v-model="password" type="password" placeholder="Password" required />
        </div>
        <div>
          <a href="#">Olvido la contraseña ?</a>
        </div>
        <button type="submit"  @click="toggleMode">Iniciar Sesion</button>
      </form>
    </div>

    <!-- Sección de Sign Up -->
    <div class="form-container sign-up">
      <form @submit.prevent="signup">
        <h1>Create Account</h1>
        <div class="social-container">
          <a href="#" class="social"><span class="mdi mdi-facebook"></span></a>
          <a href="#" class="social"><span class="mdi mdi-google"></span></a>
          <a href="#" class="social"><span class="mdi mdi-linkedin"></span></a>
        </div>
        <div class="sign-in-span">

          <span>or use your email for registration</span>
        </div>
        <div>

          <input v-model="signupEmail" type="email" placeholder="Email" required />
          <input v-model="signupPassword" type="password" placeholder="Password" required />
        </div>
        <button type="submit" @click="login">Crear Cuenta</button>
      </form>
    </div>

    <!-- Overlay Container -->
    <div class="toggle-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Bienvenid@ de vuelta!</h1>
          <p>Para saber mas sobre nuestro servicios, por favor Inicia sesion en nuestra pagina</p>
          <button class=" mt-4" @click="toggleMode">Iniciar Sesion</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello  <span class="ml-1">Amig@!</span></h1>
          <p>Crea una cuenta y disfruta de nuestros servicios mas en detalle</p>
          <button  class="mt-4" @click="toggleMode">Crear Cuenta</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive variables
const email = ref('');
const password = ref('');
const signupEmail = ref('');
const signupPassword = ref('');

// Functions to handle form submission
const login = () => {
  console.log('Logging in with', email.value, password.value);
  // Add login logic here
};

const signup = () => {
  console.log('Signing up with', signupEmail.value, signupPassword.value);
  // Add signup logic here
};

// Function to toggle between Sign In and Sign Up
const toggleMode = () => {
  const container = document.getElementById('container');
  container.classList.toggle('right-panel-active');
};
</script>


<style scoped>
/* Base Styles */
* {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
  background-color: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
 h1 {
  font-weight: bold;
  margin: 0;
}
.form-container h1{
  margin: 20px;
}
.form-container button {
  margin-top: 30px;
}

.sign-up h1{
  background: linear-gradient(90deg, rgba(255,0,175,1) 0%, rgba(43,34,126,0.9878545168067226) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Para navegadores WebKit (Chrome, Safari, etc.) */
  background-clip: text;
  color: transparent; /* Asegura que solo el fondo sea visible */
}
.sign-in h1 {
  background: linear-gradient(90deg, rgba(255,0,175,1) 0%, rgba(43,34,126,0.9878545168067226) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Para navegadores WebKit (Chrome, Safari, etc.) */
  background-clip: text;
  color: transparent; /* Asegura que solo el fondo sea visible */
}
.sign-in-span{
  margin: 4% 0px ;
}

.sign-up {
 color: rgba(43,34,126,0.9878545168067226) ;
}

.social {
  font-size: 30px;
  margin: 20px;
  padding: 2px 10px;
  border-radius: 10px;
  border: 1px solid transparent; /* Borde transparente */
  background: linear-gradient(white, white) padding-box, /* Fondo blanco interno */
              linear-gradient(90deg, rgba(255,0,175,1) 0%, rgba(43,34,126,1) 100%) border-box; /* Gradiente en el borde */
}


button {
  border-radius: 10px;
  border: 1px solid #2eb2a7;
  background-color: #2eb2a7;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 20px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
button:hover {
  background-color: #248d81;
}

/* Container */
.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.35);
  border: rgb(241, 148, 164) 1px solid;
  position: relative;
  overflow: hidden;
  width: 50%;
  max-width: 100%;
  min-height: 580px;
  margin: auto;
  margin-top: 5%;
}
@media (max-width: 760px) {
  .container{
    width: 100%;
    display: block;
  }
  .social {
    font-size: 15px;
    margin: 5px;
    padding: 2px 10px;
  }
  .form-container button {
  margin-top: 10px;
}
}
.form-container {
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}
.sign-in {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  display: flex;
  text-align: center;
  align-items: center;
}
.sign-up {
  left: 0;
  width: 50%;
  opacity: 1;
  z-index: 1;
  display: flex;
  text-align: center;
  align-items: center;
}
.container.right-panel-active .sign-in {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}


.container.right-panel-active .sign-up {
  transform: translateX(100%);
  opacity: 0;
  z-index: 5;
}

/* Overlay */
.toggle-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  transform: translateX(100%);
  transition: transform 0.6s ease-in-out;

}
.overlay {
  background: rgb(255,0,175);
  background: linear-gradient(90deg, rgba(255,0,175,1) 0%, rgba(43,34,126,0.9878545168067226) 100%);
  color: #ffffff;
  position: absolute;
  left: -100%;
  width: 200%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  border-radius: 30px;
}
.container.right-panel-active .toggle-container {
  transform: translateX(-100%);
}
.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  height: 100%;
  width: 50%;
  border-top-right-radius: 80%;
  border-bottom-right-radius: 80%;
  transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out, visibility 0.6s;
}

/* Ocultar el panel izquierdo cuando el panel derecho esté activo */
.overlay-left {
  transform: translateX(-100%);
  opacity: 1;
  right: 0;
  visibility: visible;
}

.container.right-panel-active .overlay-left {
  opacity: 0;
  visibility: hidden;
  transform: translateX(40%); /* Moverlo un poco más fuera de vista si es necesario */
}

/* Mantener visible el panel derecho cuando esté activo */
.overlay-right {
  right: 0;
  transform: translateX(0);
  opacity: 1;
  visibility: hidden;
}

.container.right-panel-active .overlay-right {
  opacity: 1;
  visibility: visible;
  transform: translateX(5%);
}
/* Estilos adicionales para los inputs, botones y otros elementos */
.container input {
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid rgb(214, 73, 116);
  border-radius: 5px;
}


</style>
