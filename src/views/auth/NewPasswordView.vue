<script setup>
import { ref, onMounted  } from 'vue';
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import AuthAPI from '@/api/AuthAPI';
import { useRoute } from 'vue-router';


const toast = inject('toast')
const router = useRouter();
const route = useRoute()
const { token } = route.params
const validToken = ref(false)

onMounted(async() =>{
  try {
    const { data } = await AuthAPI.verifyPasswordResetToken(token)
    validToken.value = true;
    console.log(data)
  } catch (error) {
    console.log(error)
    toast.open({
      message: error.response.data.msg,
      type: 'error'
    })
  }
})

const password = ref({
  first: '',
  second: ''
})
const changePassword = async () => {
  console.log('infor from change password')

  if(password.value.first !== password.value.second){
    console.log('no es igual')
     toast.open({
      message: 'las constraseñas introducidas no son iguales',
      type: 'error'
    })
  }else {
    console.log('password cambiado')
    const passWord = {
      password: password.value.second
    }
     const { data } = await AuthAPI.updatePassword(passWord, token)
     if(data) {
       password.value = {
         first: "",
         second: ""
       }
       toast.open({
         message: data.msg,
         type: 'success'
       })
       router.push({name: 'login'})
     }
  }
}
const clearInput = (data) => {
  if(data === 'first') {
    password.value.first = '';
  }
  if (data === 'second') {
    password.value.second = '';
  }
}
</script>
<template>
  <div class="container" v-if="validToken">
    <div class="form-container sign-in">
      <form @submit.prevent="changePassword">
        <h1> Cambia tu contraseña</h1>
        <div class="w-100">
          <div class="col w-100">
            <div class="input-wrapper">
              <!-- la contraseña debe tener al menos un caracter en mayuscula y un caracter en minuscula debe ser de al menos 8 caracteres y maximo de 16 -->
              <input
                type="text"
                v-model="password.first"
                id="first"
                placeholder="Introduce la contraseña"
                required
                pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
              >
              <button v-if="password.first" class="clear-btn" @click="clearInput('first')">✖</button>
            </div>
            <div class="input-wrapper">
              <input
                type="text"
                v-model="password.second"
                id="secod"
                placeholder="Repite tu contraseña"
                required
                pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
              >
              <button class="clear-btn" v-if="password.second" @click="clearInput('second')">✖</button>
            </div>
          </div>
        </div>
        <button class="change-btn">Confirmar</button>
      </form>
    </div>
    <div class="toggle-container">
      <div class="overlay">
        <div class="overlay-panel">
          <h1 class="overlay-title">Cambia la contraseña</h1>
          <p class="font-weight-bold"><span class="mdi mdi-information-outline"></span>La contrseña debe estar conformada por minimo 9 caracteres y maximo 16 caracteres</p>
          <p class="font-weight-bold"><span class="mdi mdi-information-outline"></span>La contrseña debe tener al menos una letra mayuscula</p>
          <p class="font-weight-bold"><span class="mdi mdi-information-outline"></span>La contraseña debe contener al menos una letra mayuscula</p>
          <p class="font-weight-bold"><span class="mdi mdi-information-outline"></span>La contraseña debe contener al menos un digito</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else >
    <p  class="text-center text-5xl font-black items-center  text-blue-700" style="position: absolute; z-index: 1; top: 30%; right: 18%;" > Token No valido</p>
    <img src="../../../public/img/notValid.png" alt="" style="position: relative; margin-bottom: 10px">
  </div>
</template>
<style scoped>
h1 {
  font-weight: bold;
  margin: 0;
}
.form-container h1 {
  margin: 20px;
}
.form-container {
  .change-btn {
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
}

.sign-in h1 {
  background: linear-gradient(90deg, rgba(255,0,175,1) 0%, rgba(43,34,126,0.9878545168067226) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Para navegadores WebKit (Chrome, Safari, etc.) */
  background-clip: text;
  color: transparent; /* Asegura que solo el fondo sea visible */
}

.sign-in-span {
  margin: 4% 0px;
}

.form-container {
  .generate-btn:hover {
    background-color: rgba(240, 31, 31, 0.988);
  }
}

/* Container */
.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 50%;
  max-width: 100%;
  min-height: 580px;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
}
@media (max-width: 760px) {
  .container {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  /* .form-container button {
    margin-top: 10px;
  } */

  .form-container {
    position: static !important;
    display: flex;
    align-items: center;
    top: auto !important;
    right: auto !important;
    height: 50% !important;
    /* width: 100%; */
  }
  .sign-in {
    /* left: auto !important; */
    width: 100% !important;
    display: flex;
    text-align: center;
    align-items: center;

    form {
      width: 100%;
    }
  }
  .toggle-container {
    position: static !important;
    /* top: auto !important;
    left: auto !important; */
    width: 100% !important;
    height: 50% !important;
    transform: none !important;
    padding: 10px;
  }
  .overlay {
    position: static !important;
    /* left: auto !important; */
    width: 100% !important;
    height: 100% !important;
  }
  .overlay-panel {
    position: static !important;
    height: 100% !important;
    width: 100% !important;
    padding: 20px !important;

    .overlay-title {
      font-size: 20px;
    }
  }
}
.form-container {
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  transition: all 0.6s ease-in-out;
  justify-content: center;
  text-align: center;
}
.sign-in {
  left: 0;
  width: 50%;
  display: flex;
  text-align: center;
  align-items: center;
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
.overlay-panel {
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  text-align: center;
  height: 100%;
  width: 50%;
  border-top-right-radius: 80%;
  border-bottom-right-radius: 80%;
  transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out,
    visibility 0.6s;

  p {
    text-align: start;
  }
  .overlay-title {
    margin-bottom: 30px;
  }
}

.container input {
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid rgb(218, 14, 14);
  border-radius: 5px;
}
.col{
  position: relative;
}
.input-wrapper {
  position: relative;
}
.clear-btn{
  position: absolute;
  right: 27px;
  top: 35%;
  transform: translateY(-50%);
  background: white;
  border: none;
  cursor: pointer;
  font-size: 18x;
  color: #888;
  padding: 0px 5px;
}
</style>
