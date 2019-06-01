import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Portfolio from './views/Portfolio.vue';
import Contact from './views/Contact.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import(/* webpackChunkName: "cv" */ './views/Cv.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
    },
    {
      path: '/legal',
      name: 'legal',
      component: () => import(/* webpackChunkName: "legal" */ './views/Legal.vue'),
    },
    {
      path: '/status-page',
      name: 'status',
      component: () => import(/* webpackChunkName: "status-page" */ './views/StatusPage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/LogIn.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
