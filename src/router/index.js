import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/Login'
import Main from '@/Main.vue'
import Home from '@/pages/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        // {
        //   path: '/index/statistics',
        //   name: 'statistics',
        //   component: Statistics
        // },
        // {
        //   path: '/index/usermanagement',
        //   name: 'UserManagement',
        //   component: UserManagement
        // }
      ]
    },
    // {
    //   path: '/helloWorld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
