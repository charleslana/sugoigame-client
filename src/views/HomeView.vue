<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const backgrounds = ['bg-01', 'bg-02', 'bg-03', 'bg-04', 'bg-05', 'bg-06', 'bg-07', 'bg-08'];
const currentIndex = ref(0);
const isLogin = ref(false);
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');
const route = useRoute();

let rotateInterval: ReturnType<typeof setInterval> | undefined = undefined;

watchEffect(() => {
  rotateBackgrounds();
});

const isLoginDisabled = computed(() => {
  return email.value === '' || password.value === '' || isLoading.value;
});

onMounted(() => {
  checkRouteParams();
});

onUnmounted(() => {
  if (rotateInterval) {
    clearInterval(rotateInterval);
  }
});

function rotateBackgrounds(): void {
  rotateInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % backgrounds.length;
  }, 4000);
}

function login(): void {
  errorMessage.value = '';
  isLoading.value = true;
  setTimeout(() => {
    const error = true;
    if (error) {
      isLoading.value = false;
      errorMessage.value = 'Login e/ou senha inválidos.';
      return;
    }
  }, 1000);
}

function checkRouteParams(): void {
  const error = route.query.error as string | undefined;
  const message = route.query.message as string | undefined;
  if (error && message) {
    errorMessage.value = message;
    isLogin.value = true;
  }
}
</script>

<template>
  <div class="bg">
    <div
      v-for="(bgClass, index) in backgrounds"
      :key="index"
      :class="['bg-item', bgClass, { 'is-active': currentIndex === index }]"
    >
      <div class="overlay"></div>
    </div>
    <div class="content">
      <div class="container p-5">
        <div class="columns">
          <div class="column">
            <img src="../assets/images/layout/logo.png" alt="Logo image" />
            <h2 class="description has-text-justified">
              Um MMORPG estratégico gratuito cheio de PvP feito por fãs de One Piece. É um jogo de
              mundo aberto com batalhas em turnos e muito PvP.
            </h2>
            <button
              class="button red-button is-shadowless is-fullwidth-mobile"
              @click="isLogin = true"
            >
              Comece a jogar!
            </button>
          </div>
          <div class="column">
            <h1 class="description">A jornada mais incrível da sua vida!</h1>
            <p class="description has-text-justified">
              Sugoi Game é um jogo de <b>estratégia</b> online, <b>multiplayer</b>, com uma
              <b>profundidade</b>
              instigante e ao mesmo tempo <b>desafiadora</b>. Lute contra <b>outros jogadores</b>
              <b>para provar suas habilidades</b> em uma <b>competição</b> cheia de
              <b>fortes emoções</b>. Os títulos de <b>Rei dos Piratas</b> e
              <b>Almirante de Frota</b> são os cargos mais altos reservados apenas para os
              <b>melhores jogadores</b>!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-home">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <div class="navbar-item">©2024 Sugoi Game</div>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">Política de Privacidade</a>
            <a class="navbar-item">Regras e Punições</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div class="modal" :class="{ 'is-active': isLogin }">
    <div class="modal-background"></div>
    <div class="modal-card animate__animated animate__slideInDown">
      <header class="modal-card-head is-justify-content-end">
        <div class="avatar">
          <img src="../assets/images/home/avatar.png" alt="Avatar icon" />
        </div>
        <button class="delete" aria-label="close" @click="isLogin = false"></button>
      </header>
      <section class="modal-card-body">
        <div class="content">
          <h1>Acessar minha conta</h1>
          <div
            class="notification is-danger is-light has-text-centered has-text-weight-bold"
            v-if="errorMessage"
          >
            {{ errorMessage }}
          </div>
          <form @submit.prevent="login">
            <div class="field">
              <p class="control">
                <input
                  class="input is-shadowless is-borderless"
                  type="email"
                  placeholder="E-mail"
                  v-model.trim="email"
                />
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input
                  class="input is-shadowless is-borderless"
                  type="password"
                  placeholder="Senha"
                  v-model.trim="password"
                />
              </p>
            </div>
            <div class="field is-pulled-right">
              <RouterLink to="/register">Esqueci minha senha?</RouterLink>
            </div>
            <div class="field">
              <p class="control">
                <button
                  class="button red-button is-fullwidth is-medium"
                  :class="{ 'is-loading': isLoading }"
                  :disabled="isLoginDisabled"
                >
                  Acessar
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
      <footer class="modal-card-foot is-justify-content-center">
        <RouterLink to="/register" class="is-size-4 is-uppercase">Cadastre-se agora!</RouterLink>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.bg {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.bg-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: slideBackground 40s linear infinite;
}

.bg-item.is-active {
  opacity: 1;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.bg-01 {
  background-image: url(../assets/images/home/bg-01.jpg);
}

.bg-02 {
  background-image: url(../assets/images/home/bg-02.jpg);
}

.bg-03 {
  background-image: url(../assets/images/home/bg-03.jpg);
}

.bg-04 {
  background-image: url(../assets/images/home/bg-04.jpg);
}

.bg-05 {
  background-image: url(../assets/images/home/bg-05.jpg);
}

.bg-06 {
  background-image: url(../assets/images/home/bg-06.jpg);
}

.bg-07 {
  background-image: url(../assets/images/home/bg-07.jpg);
}

.bg-08 {
  background-image: url(../assets/images/home/bg-08.jpg);
}

@keyframes slideBackground {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}

.content {
  z-index: 2;
}

.footer-home .navbar {
  background-color: transparent;
}

.footer-home .navbar-item {
  color: white;
}

.footer-home a:hover {
  background-color: transparent;
  color: #fb0000;
}

.description {
  line-height: 1.7em;
  color: rgba(255, 255, 255, 0.9);
  text-shadow:
    rgba(0, 0, 0, 0.5) 1px -1px 1px,
    rgba(0, 0, 0, 0.5) -1px 1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px,
    rgba(0, 0, 0, 0.5) -1px -1px 1px;
}

.modal-card-head,
.modal-card-body {
  background: rgba(17, 17, 17, 0.96);
  border: none;
}

.modal-card-foot {
  background: #404040;
  border-color: #414242;
}

.modal-card-foot a {
  color: #999 !important;
}

.avatar {
  position: absolute;
  left: 0;
  right: 0;
  top: -50px;
  margin: 0 auto;
  width: 95px;
  height: 95px;
  border-radius: 50%;
  z-index: 9;
  background: #fb0000;
  padding: 15px;
}

.modal-card-body .content h1 {
  text-align: center;
  color: white;
  font-weight: bold;
}

.modal-card {
  overflow: visible;
}

.modal-card-head {
  height: 0;
  box-shadow: none;
}

.is-borderless:focus {
  border-color: #fb0000 !important;
}

a {
  color: #9a9a9a;
}

a:hover {
  color: #fb0000;
}
</style>
