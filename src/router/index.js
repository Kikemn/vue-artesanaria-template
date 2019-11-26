import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main.vue'
import logout from '../components/logout.vue'
import signin from '../components/signin.vue'
import signup from '../components/signup.vue'
import dashboard from '../components/dashboard.vue'


Vue.use(Router)
const routes = [
    {
        path:'/main',
        name: 'main',
        component: main
        
      },
    {
      path:'/signup',
      name: 'signup',
      component: signup
    },
    {
        path:'/signin',
        name: 'signin',
        component: signin
    },
    {
        path:'/logout',
        name: 'logout',
        component:logout
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
    }
]
export const router = new Router({
    mode:'hash',
    routes,
    scrollBehavior(){
        return { x: 0, y: 0 }
    }
})
