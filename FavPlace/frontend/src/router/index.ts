import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue'
import Detail from '../views/Detail.vue'
import AddForm from '../views/AddForm.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component:Profile,
  },
  {
    path:'/detail/:placeId',
    name:'Detail',
    component:Detail,
  },
  {
    path:'/addform',
    name:'AddForm',
    component:AddForm,
  },
  {
    path:'/login',
    name:'Login',
    component:Login,
  },
  {
    path:'/register',
    name:'Register',
    component:Register,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
