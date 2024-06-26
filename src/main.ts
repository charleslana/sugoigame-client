import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {
  faBan,
  faCircleQuestion,
  faEnvelope,
  faHome,
  faList,
  faLock,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Tooltip, vTooltip } from 'floating-vue';
import './assets/main.css';
import 'bulma/css/bulma.css';
import 'animate.css';
import 'floating-vue/dist/style.css';
import 'vue-search-select/dist/VueSearchSelect.css';

library.add(faEnvelope, faLock, faHome, faUserPlus, faBan, faList, faCircleQuestion);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive('tooltip', vTooltip);
app.component('VTooltip', Tooltip);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
