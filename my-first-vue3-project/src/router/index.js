import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Clase14',
    name: 'Clase14',
    component: () => import('../views/Clase14.vue')
  },
  {
    path: '/Clase15',
    name: 'Clase15',
    component: () => import('../views/Clase15.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
