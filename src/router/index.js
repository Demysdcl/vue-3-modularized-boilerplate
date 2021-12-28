import modulesRouter from '@/modules/router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  ...modulesRouter,
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
