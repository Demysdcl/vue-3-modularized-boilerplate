//plopfile import pattern - do not remove this comment
import { createRouter, createWebHashHistory } from 'vue-router'
import aboutRouter from './about/router'
import homeRouter from './home/router'

const routes = [...homeRouter, ...aboutRouter]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
