import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'
import Page4 from '../views/Page4.vue'
import Page5 from '../views/Page5.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/page1',
      name: 'pagina1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'pagina2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'pagina3',
      component: Page3
    },
    {
      path: '/page4',
      name: 'pagina4',
      component: Page4
    },
    {
      path: '/page5',
      name: 'pagina5',
      component: Page5
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
