import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome,faBell,faEnvelope,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import router from './components/routes'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faHome,faBell,faEnvelope,faRightFromBracket);




createApp(App).use(router).component('font-awesome-icon',FontAwesomeIcon).mount('#app')

