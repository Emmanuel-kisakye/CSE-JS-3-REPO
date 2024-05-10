import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import staffView from '../views/staff/StaffView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/staff/view',
      name: 'staffView',
      component: staffView
    },
  ]
})

export default router
