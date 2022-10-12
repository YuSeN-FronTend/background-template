import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue"
// import store from '@/store'
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  // console.dir(originalPush.call(this, location));
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/error/404'),
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../layout'),
    redirect:'/test1',
    children:[

    ]
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
