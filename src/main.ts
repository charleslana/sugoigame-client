import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Dropdown, Tooltip, vTooltip } from 'floating-vue';
import {
  faAddressCard,
  faBan,
  faBook,
  faCartShopping,
  faCheck,
  faCircleQuestion,
  faComments,
  faEnvelope,
  faGavel,
  faGem,
  faHome,
  faList,
  faLock,
  faPeopleArrows,
  faQuestion,
  faRankingStar,
  faRightFromBracket,
  faRoad,
  faSquareH,
  faTimes,
  faTrophy,
  faUserPlus,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import './assets/main.css';
import 'bulma/css/bulma.css';
import 'animate.css';
import 'floating-vue/dist/style.css';
import 'vue-search-select/dist/VueSearchSelect.css';

library.add(
  faEnvelope,
  faLock,
  faHome,
  faUserPlus,
  faBan,
  faList,
  faCircleQuestion,
  faQuestion,
  faUsers,
  faRightFromBracket,
  faCheck,
  faTimes,
  faUserPlus,
  faBook,
  faTrophy,
  faRankingStar,
  faAddressCard,
  faCartShopping,
  faGem,
  faPeopleArrows,
  faComments,
  faRoad,
  faSquareH,
  faGavel
);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive('tooltip', vTooltip);
app.component('VTooltip', Tooltip);
app.component('VDropdown', Dropdown);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
