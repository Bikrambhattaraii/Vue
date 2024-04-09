
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Login from '../components/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
{
  path:'/login',
  name:"form",
  component:Login
},
]

const router = createRouter({
  history: createWebHistory(),
  routes 
})

export default router
