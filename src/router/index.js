import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/logout',
      name: 'logout',
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/addproduct',
      name: 'addproduct',
      component: () => import('../views/AddProduct.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart.vue'),
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

function isAuthenticated() {
  return !!localStorage.getItem('auth_token')
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth && !isAuthenticated()) {
    next({ name: 'login' });
  } else if (to.matched.length === 0) {

    console.log(to.matched.length);
    next({ name: 'notfound' })
  } else {
    next();
  }
});

export default router
