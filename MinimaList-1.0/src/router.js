import Vue from 'vue'
import Router from 'vue-router'
import Add from './views/Add.vue'
import Home from './views/Home.vue'
import Info from './views/Info.vue'
import List from './views/List.vue'
import Login from './views/Login.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'List',
          name: 'List',
          component: () => import(/* webpackChunkName: "List" */ './views/List.vue')
        },
        {
          path: 'User',
          name: 'User',
          component: () => import(/* webpackChunkName: "User" */ './views/User.vue')
        }
      ]
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
