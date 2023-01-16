import { createWebHistory,createRouter} from 'vue-router'
import ContentPage from './ContentPage/ContentPage.vue'
import Login from '../components/LoginPage/Login.vue'
import Profile from '../components/profile/Profile.vue'



const userAuth = JSON.parse(localStorage.getItem('authUser'));
console.log(userAuth, "userAuth check")


const routes = [
    
  {
    name:'ContentPage',
    path: '/',
    component:ContentPage,
    meta: {
      needsAuth: true
    }

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



router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    if (userAuth) {
      next();
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router;