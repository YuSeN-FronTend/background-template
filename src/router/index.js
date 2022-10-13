import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue"
// import store from '@/store'
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },

  {
    path: '/layout',
    name: 'layout',
    component: () => import('../layout'),
    redirect:'/test1',
    children:[

    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/error/404'),
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
