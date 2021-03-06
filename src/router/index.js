import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/authentication/Login';
import Logout from '@/components/authentication/Logout';
import Register from '@/components/authentication/Register';
import Welcome from '@/components/Welcome';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
  linkExactActiveClass: 'is-active',
});
