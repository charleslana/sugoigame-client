<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { isValidEmail, isValidName } from '@/utils/utils';
import LogoutTemplate from '@/templates/LogoutTemplate.vue';

const isLoading = ref(false);
const registerName = ref('');
const registerEmail = ref('');
const registerPassword = ref('');
const registerConfirmPassword = ref('');
const isPasswordError = ref('');
const isNameError = ref('');
const isEmailError = ref('');
const message = ref('');
const isModal = ref(false);

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
      isModal.value = true;
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
</script>

<template>
  <LogoutTemplate title="Cadastro">
    <template #wrapper>
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
    </template>
  </LogoutTemplate>
  <ModalComponent :message="message" :is-error="true" v-if="isModal" @close="isModal = false" />
</template>

<style scoped></style>
