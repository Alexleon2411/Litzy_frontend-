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
