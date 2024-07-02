<script setup lang="ts">
import router from '@/router';
import { getCharacterMini } from '@/utils/character-utils';
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
  <div class="crew-list">
    <div class="is-flex is-flex-direction-column is-clickable" v-for="index in 5" :key="index">
      <img :src="getCharacterMini(1)" alt="Character image" />
      <div class="is-flex crew-max-box">
        <div class="crew-level">15</div>
        <div class="crew-progress">
          <progress class="progress bar-success m-0" value="100" max="100"></progress>
          <progress class="progress" value="50" max="100"></progress>
        </div>
      </div>
    </div>
  </div>
  <div class="flag-pole is-clickable">
    <img src="../assets/images/layout/flag-pole.png" alt="Pole image" class="pole" />
    <img src="../assets/images/flags/pirate-1.jpeg" alt="Flag image" class="flag" />
  </div>
  <div class="quest">
    <RouterLink to="/quest">
      <div class="is-flex is-align-items-center">
        <p>Objetivo:</p>
        <img
          src="../assets/images/icons/quest.png"
          alt="Quest icon"
          class="animate__animated animate__infinite animate__pulse"
        />
      </div>
      <p>Complete uma missão na ilha</p>
      <div class="is-flex is-align-items-center">
        <img
          src="../assets/images/icons/berry.png"
          alt="Berry icon"
          class="animate__animated animate__infinite animate__pulse"
        />
        <p>1.000</p>
      </div>
    </RouterLink>
  </div>
  <div class="menu-right">
    <img src="../assets/images/menu-right/1.jpg" alt="Menu icon" v-tooltip="'Restaurar o navio'" />
    <img
      src="../assets/images/menu-right/2.jpg"
      alt="Menu icon"
      v-tooltip="'Disparar uma bala de canhão'"
    />
    <div class="text" v-tooltip="'Habilitar/Desabilitar PVP'">PVP</div>
    <div class="text" v-tooltip="'Abrir o painel de profissões'">
      <font-awesome-icon :icon="['fas', 'gavel']" />
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

.navbar,
.navbar-menu.is-active {
  background: transparent;
}

.crew-list {
  z-index: 2;
  text-align: left;
  position: fixed;
  left: 1vw;
  top: 50%;
  transform: translateY(-50%);
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.crew-list img {
  width: 50px;
  height: 37px;
}

.crew-max-box {
  width: 50px;
}

.crew-level {
  background: #000;
  padding: 0px 3px;
  font-size: 2vh;
  color: #fff;
  margin-top: -2px;
}

.crew-progress {
  width: 100%;
}

.progress {
  border-radius: 0;
  height: 1vh;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.bar-success {
  --bulma-progress-value-background-color: #488949 !important;
}

.flag-pole {
  position: fixed;
  z-index: 2;
  bottom: -7px;
  left: 0;
}

.flag-pole .pole {
  width: 5vw;
}

.flag-pole .flag {
  position: absolute;
  top: 1.5vw;
  left: 2.8vw;
  width: 4.8vw;
}

.quest {
  position: fixed;
  z-index: 50;
  right: 1vw;
  top: 76px;
  width: 10vw;
  text-align: left;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 1vh;
}

.quest a {
  color: #f0f0f0;
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

.menu-right {
  position: fixed;
  z-index: 4;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu-right img {
  border-radius: 5px;
  border: 2px solid #000;
  margin: 1px auto;
}

.menu-right .text {
  background: black;
  width: 55px;
  height: 40px;
  padding: 0.5em 0;
  color: #fff !important;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  margin: 1px auto;
  cursor: pointer;
}

.menu-right .text:hover {
  box-shadow: 0 0 9px 3px #fff;
}
</style>
