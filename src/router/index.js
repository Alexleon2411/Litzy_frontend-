import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import appoitmentsLayout from '@/views/appoitments/AppoitmentsLayout.vue'

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
          path: 'nueva',
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
        }
      ]
    }
  ]
})

export default router
