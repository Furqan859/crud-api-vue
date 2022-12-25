import { createWebHistory,createRouter} from 'vue-router'
import ContentPage from './ContentPage/ContentPage.vue'
import Login from '../components/LoginPage/Login.vue'
import Profile from '../components/profile/Profile.vue'

const routes = [
    
  {
    name:'ContentPage',
    path: '/',
    component:ContentPage

  },
  {
    name:'Login',
    path: '/login',
    component:Login

  },
  {
    name:'logout',
    path: '/',
    component:Login

  },
  {
    name:'profile',
    path: '/profile',
    component:Profile
    

  }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;