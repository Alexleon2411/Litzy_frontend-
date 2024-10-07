<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { onMounted, inject } from 'vue';
  import AuthAPI from '@/api/AuthAPI';

  const toast  = inject('toast')
  const route = useRoute();
  const router = useRouter();
  const { token } = route.params

  onMounted(async () => {
    try {
      const data = await AuthAPI.verifyAccount(token);
      toast.open({
        message: data.data.msg
      })
      setTimeout(() => {
        router.push({name: 'login'})
      }, 5000);
    } catch (error) {
      toast.open({
        message: error.response.data.msg,
        type: 'error'
      })
    }
  })


</script>
<template>
  <div class="mx-auto">
    <h1>Usuario verificado, ya puedes iniciar sesion</h1>
  </div>
</template>
