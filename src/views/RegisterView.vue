<script setup lang="ts">
import router from '@/router';
import { computed, ref } from 'vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { isValidEmail, isValidName } from '@/utils/utils';

const isOpenMenu = ref(false);
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const registerName = ref('');
const registerEmail = ref('');
const registerPassword = ref('');
const registerConfirmPassword = ref('');
const isPasswordError = ref('');
const isNameError = ref('');
const isEmailError = ref('');
const message = ref('');
const isCloseModal = ref(false);
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

function register(): void {
  clearInputs();
  if (!validateName() || !validateEmail() || !validatePassword()) {
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

function clearInputs(): void {
  isNameError.value = '';
  isEmailError.value = '';
  isPasswordError.value = '';
  message.value = '';
}

function validateName(): boolean {
  if (registerName.value.length < 5 || registerName.value.length > 50) {
    isNameError.value = 'O nome deve conter entre 5 a 50 caracteres';
    return false;
  }
  if (!isValidName(registerName.value)) {
    isNameError.value = 'O nome deve conter apenas letras e espaço';
    return false;
  }
  return true;
}

function validateEmail(): boolean {
  if (registerEmail.value.length > 50) {
    isEmailError.value = 'O e-mail deve conter no máximo 50 caracteres';
    return false;
  }
  if (!isValidEmail(registerEmail.value)) {
    isEmailError.value = 'O e-mail é inválido, deve seguir o exemplo: email@email.com';
    return false;
  }
  return true;
}

function validatePassword(): boolean {
  if (registerPassword.value.length < 6) {
    isPasswordError.value = 'A senha deve conter no mínimo 6 caracteres';
    return false;
  }
  if (registerPassword.value !== registerConfirmPassword.value) {
    isPasswordError.value = 'A confirmação e a senha devem ser iguais';
    return false;
  }
  return true;
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
                    maxlength="50"
                    required
                    v-model.trim="registerName"
                  />
                </div>
                <p class="help is-danger is-error" v-if="isNameError !== ''">
                  {{ isNameError }}
                </p>
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
                <p class="help is-danger is-error" v-if="isEmailError !== ''">
                  {{ isEmailError }}
                </p>
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
                <p class="help is-danger is-error" v-if="isPasswordError !== ''">
                  {{ isPasswordError }}
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
    <div
      class="float-footer animate__animated"
      :class="{
        animate__slideInUp: isOpenFloatMain,
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
      class="float-footer animate__animated"
      :class="{
        animate__slideInUp: isOpenFloatSupport,
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
  font-size: 7px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
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
  margin-bottom: 2vh;
  animation-duration: 0.5s;
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
</style>
