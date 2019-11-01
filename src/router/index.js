import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './home'
import movieRouter from './movie'
import loginRouter from './login'
Vue.use(VueRouter)

const routes = [
  homeRouter,
  movieRouter,
  loginRouter,
  { path: '/*', redirect: '/home' }
  
]

const router = new VueRouter({
  routes
})

export default router
