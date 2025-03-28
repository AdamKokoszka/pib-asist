import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/dashboard.view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.view.vue'),
    },
  ],
})

export default router
