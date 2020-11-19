import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tasks from '../views/tasks.vue'
import profile from '../views/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component:tasks
  },
  {
    path:'/profile',
    name:'Profiles',
    component:profile
  }
]

const router = new VueRouter({
  routes
})

export default router
