import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import AuthAPI from "@/api/AuthAPI";
import User from "@/api/User";

export const  useUserStore = defineStore('user', () => {
  const user = ref({})
  const router = useRouter()
  const userAppoitments = ref([])

  onMounted(async () => {
    try {
      const { data } = await AuthAPI.auth()
      user.value = data
    } catch (error) {
      console.log(error)
    }
  })

  const getUserAppoitments = async() => {
    try {
      const { data } = await User.getUserAppoitments(user.value._id)
      userAppoitments.value = data;
    } catch (error) {
      console.log(error)
    }
  }

  async function getUser(){
    try {
      const { data } = await AuthAPI.auth()
      user.value = data
    } catch (error) {
      console.log(error)
    }
  }

  function logout() {
    console.log('has cerrado sesion :)')
    localStorage.removeItem('AUTH_TOKEN');
    user.value = {}
    router.push({name: 'login'})
  }

  function forgottenPassword(email) {
    try {
      const result = AuthAPI.forgotPassword({email})
      return result
    } catch (error) {
      console.log(error)
    }
  }

  const getUserName = computed(() => user.value?.name ? user.value?.name : '')

  return {
    user,
    getUserName,
    userAppoitments,
    logout,
    getUser,
    getUserAppoitments,
    forgottenPassword
  }
})
