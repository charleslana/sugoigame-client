<script setup lang="ts">
import router from '@/router';
import { isDaytimeNow } from '@/utils/utils';
import { ref } from 'vue';

defineProps<{
  title?: string;
  icon?: string;
  hint?: string;
  menuSelected?: 'main' | 'sea' | 'tutorial';
}>();

const isOpenFloatMain = ref(false);
const isOpenFloatSupport = ref(false);
const isOpenFloatSea = ref(false);
const isOpenMenu = ref(false);

function toggleFloatMain(): void {
  isOpenFloatSupport.value = false;
  isOpenFloatSea.value = false;
  isOpenFloatMain.value = !isOpenFloatMain.value;
}

function toggleFloatSupport(): void {
  isOpenFloatMain.value = false;
  isOpenFloatSea.value = false;
  isOpenFloatSupport.value = !isOpenFloatSupport.value;
}

function toggleFloatSea(): void {
  isOpenFloatMain.value = false;
  isOpenFloatSupport.value = false;
  isOpenFloatSea.value = !isOpenFloatSea.value;
}

function logout(): void {
  router.push({ name: 'home' });
}

function toggleMenu(): void {
  isOpenMenu.value = !isOpenMenu.value;
}
</script>

<template>
  <div class="day-1" :class="{ 'night-1': !isDaytimeNow() }">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <p to="/" class="navbar-item is-hidden-desktop">Menu</p>
        <a
          role="button"
          class="navbar-burger has-text-white"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{ 'is-active': isOpenMenu }"
          @click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isOpenMenu }">
        <div class="navbar-start">
          <div class="navbar-item" v-tooltip="'Localização atual'">
            <img src="../assets/images/icons/log-pose.png" alt="Icon image" class="mr-2" />
            <p>0º L, 0º N , East Blue - Ilha Dawn</p>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item is-clickable">
            <VDropdown>
              <div class="is-flex is-align-items-center">
                <p>
                  <small>12/06/2024 - 18:49:</small>
                  Tripulação derrotou rouge na Grand Line
                </p>
                <img src="../assets/images/icons/news.png" alt="Icon image" class="ml-1" />
              </div>
              <template #popper>
                <ul class="ul-list">
                  <li v-for="index in 5" :key="index">
                    <p>
                      <small>12/06/2024 - 18:49:</small>
                      Tripulação derrotou rouge na Grand Line
                    </p>
                  </li>
                </ul>
              </template>
            </VDropdown>
          </div>
          <div class="navbar-item is-clickable" v-tooltip="'Mapa Mundi'">
            <img src="../assets/images/icons/map.png" alt="Icon image" />
          </div>
          <div class="navbar-item is-clickable has-text-white" v-tooltip="'Chat'">
            <font-awesome-icon :icon="['fas', 'comments']" />
          </div>
          <div class="navbar-item is-clickable" v-tooltip="'Mensagens'">
            <img src="../assets/images/icons/den-den.png" alt="Icon image" />
          </div>
          <div class="navbar-item is-clickable" v-tooltip="'Inventário'">
            <img src="../assets/images/icons/chest.png" alt="Icon image" />
          </div>
          <div class="navbar-item is-clickable" v-tooltip="'Berries'">
            <img src="../assets/images/icons/berry.png" alt="Icon image" />
          </div>
          <div class="navbar-item is-clickable" v-tooltip="'Moedas de Ouro'">
            <img src="../assets/images/icons/gold.png" alt="Icon image" />
          </div>
        </div>
      </div>
    </nav>
    <div class="content">
      <div class="container">
        <div class="wrapper">
          <div class="wrapper-header" v-if="title">
            {{ title }} <font-awesome-icon :icon="['fas', icon]" v-if="icon" v-tooltip="hint" />
          </div>
          <div class="wrapper-body">
            <slot name="wrapper"></slot>
          </div>
        </div>
      </div>
    </div>
    <div
      class="float-footer"
      :class="{
        'custom-slide-in': isOpenFloatMain,
        'is-hidden': !isOpenFloatMain
      }"
    >
      <div class="columns is-multiline m-0">
        <RouterLink to="/newspaper" class="is-flex is-align-items-center">
          <div class="column"><font-awesome-icon :icon="['fas', 'home']" class="mr-2" />Jornal</div>
        </RouterLink>
        <RouterLink to="/newspaper" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'user-plus']" class="mr-2" />Recrute um Amigo
          </div>
        </RouterLink>
        <RouterLink to="/newspaper" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'book']" class="mr-2" />Akuma Book
          </div>
        </RouterLink>
        <RouterLink to="/newspaper" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'trophy']" class="mr-2" />Hall da fama
          </div>
        </RouterLink>
        <RouterLink to="/newspaper" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'ranking-star']" class="mr-2" />Ranking
          </div>
        </RouterLink>
        <RouterLink to="/newspaper" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'address-card']" class="mr-2" />Minha Conta
          </div>
        </RouterLink>
        <RouterLink to="/newspaper" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="mr-2" />Gold Shop
          </div>
        </RouterLink>
        <RouterLink to="/newspaper" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'gem']" class="mr-2" />Faça uma doação
          </div>
        </RouterLink>
        <RouterLink to="/select-crew" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'people-arrows']" class="mr-2" />Selecionar tripulação
          </div>
        </RouterLink>
        <a class="is-flex is-align-items-center" @click="logout">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'fa-right-from-bracket']" class="mr-2" />Logout
          </div>
        </a>
      </div>
    </div>
    <div
      class="float-footer"
      :class="{
        'custom-slide-in': isOpenFloatSea,
        'is-hidden': !isOpenFloatSea
      }"
    >
      <div class="columns is-multiline m-0">
        <RouterLink to="/newspaper" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'road']" class="mr-2" />Missões
          </div>
        </RouterLink>
        <RouterLink to="/newspaper" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'square-h']" class="mr-2" />Hospital
          </div>
        </RouterLink>
      </div>
    </div>
    <div
      class="float-footer"
      :class="{
        'custom-slide-in': isOpenFloatSupport,
        'is-hidden': !isOpenFloatSupport
      }"
    >
      <div class="columns is-multiline m-0">
        <RouterLink to="/frequently-asked-question" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'circle-question']" class="mr-2" />Base de
            Conhecimento
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="bg-footer">
      <div
        class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
        @click="toggleFloatMain"
      >
        <img
          src="../assets/images/menu-footer/main.png"
          alt="Menu icon"
          :class="{ 'menu-selected': menuSelected === 'main' }"
        />
        <p class="menu">Principal</p>
      </div>
      <div
        class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
        @click="toggleFloatSea"
      >
        <img
          src="../assets/images/menu-footer/sea.png"
          alt="Menu icon"
          :class="{ 'menu-selected': menuSelected === 'sea' }"
        />
        <p class="menu">Ilhar Atual</p>
      </div>
      <div
        class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
        @click="toggleFloatSupport"
      >
        <img
          src="../assets/images/menu-footer/tutorial.png"
          alt="Menu icon"
          :class="{ 'menu-selected': menuSelected === 'tutorial' }"
        />
        <p class="menu">Suporte & Fórum</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.day-1 {
  background: url(../assets/images/layout/day/1.jpg) top center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.night-1 {
  background: url(../assets/images/layout/night/1.jpg) top center no-repeat;
  background-size: cover;
}

.bg-footer {
  background: url(../assets/images/menu-footer/bg.png) top center no-repeat;
  background-size: contain;
  min-height: 7vh;
  display: flex;
  justify-content: center;
  margin-bottom: 1vh;
}

.bg-footer .is-flex {
  padding: 0 1em 1em;
  cursor: pointer;
}

.bg-footer .is-flex img {
  opacity: 0.7;
}

.bg-footer .is-flex img:hover {
  opacity: 0.9;
}

.menu-selected {
  opacity: 1 !important;
}

.menu-selected:hover {
  opacity: 1 !important;
}

.bg-footer .menu {
  color: #030303;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0px 1px 1px #fff;
}

.bg-footer img {
  width: 50px;
  height: 50px;
}

.float-footer {
  background: url(../assets/images/layout/back.jpg) center repeat;
  background-size: contain;
  min-height: 7vh;
  display: flex;
  justify-content: center;
  color: #030303;
  max-width: 50vw;
  margin: auto;
  border-radius: 5px;
  border: 3px solid #c07617;
  animation-duration: 0.5s;
  position: fixed;
  bottom: 112px;
  left: 50%;
  transform: translateX(-50%);
  animation-name: custom-slide-in;
  z-index: 2;
}

.float-footer a {
  color: #030303;
}

.float-footer a:hover {
  background-color: #f3c189;
}

.float-footer .column {
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  height: 75vh;
  overflow: auto;
  margin-top: 24px;
}

@keyframes custom-slide-in {
  from {
    opacity: 0;
    transform: translateY(50px) translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
}

.navbar-item p,
.is-hidden-desktop {
  color: #f0f0f0;
  font-weight: bold;
  text-shadow:
    1px 0 #000,
    -1px 0 #000,
    0 1px #000,
    0 -1px #000,
    1px 1px #000,
    -1px -1px #000,
    1px -1px #000,
    -1px 1px #000;
}

.ul-list {
  list-style: initial;
}

.navbar {
  background: transparent;
}
</style>
