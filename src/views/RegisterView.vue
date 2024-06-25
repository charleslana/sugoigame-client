<script setup lang="ts">
import router from '@/router';
import { computed, ref } from 'vue';
import ModalComponent from '@/components/ModalComponent.vue';

const isOpenMenu = ref(false);
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const registerName = ref('');
const registerEmail = ref('');
const registerPassword = ref('');
const registerConfirmPassword = ref('');
const isPasswordError = ref(false);
const message = ref('');
const isCloseModal = ref(false);

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

function register(): void {
  isPasswordError.value = false;
  message.value = '';
  if (registerPassword.value !== registerConfirmPassword.value) {
    isPasswordError.value = true;
    return;
  }
  isLoading.value = true;
  setTimeout(() => {
    const error = true;
    if (error) {
      message.value = 'O e-mail informado já está cadastrado.';
      isCloseModal.value = true;
      isLoading.value = false;
      return;
    }
    router.push({ name: '' });
  }, 1000);
}
</script>

<template>
  <div class="day-0">
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
          <div class="wrapper-header">Cadastro</div>
          <div class="wrapper-body">
            <p>Informações Pessoais:</p>
            <form class="theme-light" @submit.prevent="register">
              <div class="field">
                <label class="label">Seu nome:</label>
                <div class="control">
                  <input
                    class="input is-shadowless is-borderless"
                    type="text"
                    placeholder=""
                    minlength="5"
                    required
                    v-model.trim="registerName"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Seu E-mail:</label>
                <div class="control">
                  <input
                    class="input is-shadowless is-borderless"
                    type="email"
                    placeholder=""
                    maxlength="50"
                    required
                    v-model.trim="registerEmail"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Senha:</label>
                <div class="control">
                  <input
                    class="input is-shadowless is-borderless"
                    type="password"
                    placeholder=""
                    minlength="6"
                    required
                    v-model.trim="registerPassword"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Confirmar senha:</label>
                <div class="control">
                  <input
                    class="input is-shadowless is-borderless"
                    type="password"
                    placeholder=""
                    minlength="6"
                    required
                    v-model.trim="registerConfirmPassword"
                  />
                </div>
                <p class="help is-danger is-error" v-if="isPasswordError">
                  A confirmação e a senha devem ser iguais
                </p>
              </div>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" required :disabled="isLoading" />
                    Ao clicar em "Cadastrar", confirmo que li e concordo com a
                    <RouterLink to="/privacy-policy" class="custom-link"
                      >Política de Privacidade</RouterLink
                    >
                    e com as
                    <RouterLink to="/game-rules" class="custom-link">Regras do jogo</RouterLink>.
                  </label>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button
                    class="button is-link btn-green"
                    :class="{ 'is-loading': isLoading }"
                    :disabled="isLoading"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="custom-footer">teste</div>
  </div>
  <ModalComponent :message="message" v-if="isCloseModal" @close="isCloseModal = false" />
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
}

.is-error:before {
  content: '';
  display: inline-block;
  width: 15px;
  height: 15px;
  vertical-align: middle;
  background-image: url('../assets/images/icons/close.gif');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 5px;
}
</style>
