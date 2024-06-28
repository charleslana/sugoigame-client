<script setup lang="ts">
import router from '@/router';
import { isDaytimeNow } from '@/utils/utils';
import { computed, ref } from 'vue';

defineProps<{
  title?: string;
  icon?: string;
  hint?: string;
}>();

const isOpenMenu = ref(false);
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const isOpenFloatMain = ref(false);
const isOpenFloatSupport = ref(false);

const isLoginDisabled = computed(() => {
  return email.value === '' || password.value === '' || isLoading.value;
});

function toggleMenu(): void {
  isOpenMenu.value = !isOpenMenu.value;
}

function login(): void {
  isLoading.value = true;
  setTimeout(() => {
    const error = true;
    if (error) {
      router.push({ path: '/', query: { error: 'true', message: 'message' } });
      return;
    }
    router.push({ name: '' });
  }, 1000);
}

function toggleFloatMain(): void {
  isOpenFloatSupport.value = false;
  isOpenFloatMain.value = !isOpenFloatMain.value;
}

function toggleFloatSupport(): void {
  isOpenFloatMain.value = false;
  isOpenFloatSupport.value = !isOpenFloatSupport.value;
}
</script>

<template>
  <div class="day-0" :class="{ 'night-0': !isDaytimeNow() }">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item">Início</RouterLink>
        <RouterLink to="/register" class="navbar-item">Cadastrar</RouterLink>
        <a
          role="button"
          class="navbar-burger"
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
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <div class="navbar-item">
            <form @submit.prevent="login" class="buttons">
              <div>
                <div class="field">
                  <div class="control has-icons-left">
                    <input
                      class="input is-shadowless is-borderless"
                      type="email"
                      placeholder="E-mail"
                      v-model.trim="email"
                    />
                    <span class="icon is-small is-left">
                      <font-awesome-icon :icon="['fas', 'envelope']" />
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div class="field">
                  <div class="control has-icons-left">
                    <input
                      class="input is-shadowless is-borderless"
                      type="password"
                      placeholder="Senha"
                      v-model.trim="password"
                    />
                    <span class="icon is-small is-left">
                      <font-awesome-icon :icon="['fas', 'lock']" />
                    </span>
                  </div>
                </div>
              </div>
              <button
                class="button is-light btn-blue"
                :class="{ 'is-loading': isLoading }"
                :disabled="isLoginDisabled"
              >
                Acessar
              </button>
            </form>
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
        <RouterLink to="/" class="is-flex is-align-items-center">
          <div class="column"><font-awesome-icon :icon="['fas', 'home']" class="mr-2" />Início</div>
        </RouterLink>
        <RouterLink to="/register" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'user-plus']" class="mr-2" />Cadastrar
          </div>
        </RouterLink>
        <RouterLink to="/recovery-password" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />Recuperar Senha
          </div>
        </RouterLink>
        <RouterLink to="/game-rules" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'ban']" class="mr-2" />Regras e Punições
          </div>
        </RouterLink>
        <RouterLink to="/privacy-policy" class="is-flex is-align-items-center">
          <div class="column">
            <font-awesome-icon :icon="['fas', 'list']" class="mr-2" />Política de Privacidade
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
        <img src="../assets/images/menu-footer/main.png" alt="Menu icon" />
        <p class="menu">Principal</p>
      </div>
      <div
        class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
        @click="toggleFloatSupport"
      >
        <img src="../assets/images/menu-footer/tutorial.png" alt="Menu icon" />
        <p class="menu">Suporte & Fórum</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.day-0 {
  background: url(../assets/images/layout/day/0.jpg) top center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.night-0 {
  background: url(../assets/images/layout/night/0.jpg) top center no-repeat;
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
</style>
