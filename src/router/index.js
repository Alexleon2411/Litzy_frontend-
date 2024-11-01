import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import appoitmentsLayout from '@/views/appoitments/AppoitmentsLayout.vue'
import AuthAPI from '@/api/AuthAPI'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayout.vue'),
      meta: { requiresAdmin: true},
      children: [
        {
          path: 'crear-servicio',
          name: 'creaServicio',
          component: () => import('../views/admin/CrearServicio.vue'),
        },
        {
          path: 'edit-service/:id',
          name: 'editService',
          component: () => import('../views/admin/EditService.vue'),
        },
        {
          path: 'panel-services',
          name: 'panelServices',
          component: () => import('../views/admin/ServicesPanel.vue')
        },
        {
          path: 'admin-profile',
          name: 'adminProfile',
          component: () => import('../views/admin/AdminProfile.vue')
        }
      ]
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue'),
    },
    {
      path: '/result',
      name: 'resultado',
      component: () => import('@/views/ResultView.vue'),
    },
    {
      path: '/reservaciones',
      name: 'appoitments',
      component: appoitmentsLayout,
      children: [
        {
          path: 'miReservacion',
          name: 'my-appoitments',
          component: () => import('@/views/appoitments/MyAppoitmentView.vue'),
          meta: { requiresAuth: true},
        },
        {
          path: 'nueva',
          name: 'nueva',
          component: () => import('@/views/appoitments/NewAppoitment.vue'),
          children: [
            {
              path: '',
              name: 'new-appoitment',
              component: () => import('@/views/appoitments/ServicesView.vue')

            },
            {
              path: 'detalles',
              name: 'appoitment-details',
              component: () => import('@/views/appoitments/AppoitmentView.vue')

            }
          ]
        },
        {
          path: ':id/editar',
          name: 'edit-appoitment',
          component: () => import('@/views/appoitments/EditAppoitmentLayout.vue')
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/auth/AuthLayout.vue'),
      children: [

        {
          path: 'confirmar-cuenta/:token',
          name: 'confirm-account',
          component: () => import('@/views/auth/ConfirmAccountView.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/auth/LoginView.vue')
        },
        {
          path: 'olvide-password',
          name: 'forgotPassword',
          component: () => import('@/views/auth/ForgotPasswordView.vue')
        },
        {
          path: 'olvide-password/:token',
          name: 'new-password',
          component: () => import('@/views/auth/NewPasswordView.vue')
        },
      ]
    },
    {
      path: '/filtered',
      name: 'filtered',
      component: () => import('@/components/ServicesFiltered.vue')
    }
  ]
})


router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth) // confirma que pagina debe ser authenticada
  //si la pagina necesita ser autentica se ejecuta la siguiente condcion
  if (requiresAuth){
    try {
      const { data } = await AuthAPI.auth()// se llama el endpoint para validar el usuario
      if (data.admin){
        next('/admin')
      }else {
        next() // si es exitosa la validacion se muestra la siguiente vista
      }
    } catch (error) {
      next({name: 'login'})
    }
  }else {
    //sino muestra la vista solicitada
    next()
  }
})

// con esta segunda condicion verificamos si el usuario es administrador para poderle mostrar el contenido de administrador

router.beforeEach(async (to, from, next) => {
  const requiresAdmin = to.matched.some(url => url.meta.requiresAdmin) // confirma que pagina debe ser authenticada
  //si la pagina necesita ser autentica se ejecuta la siguiente condcion
  if (requiresAdmin){
   try {
    await AuthAPI.admin()
    next()
   } catch (error) {
      next({name: 'login'})
   }
  }else {
    //sino muestra la vista solicitada
    next()
  }
})

export default router
