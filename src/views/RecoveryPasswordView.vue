<script setup lang="ts">
import LogoutTemplate from '@/templates/LogoutTemplate.vue';
import { ref } from 'vue';
import ModalComponent from '@/components/ModalComponent.vue';

const email = ref('');
const isLoading = ref(false);
const message = ref('');
const isModal = ref(false);
const iError = ref(false);

function recoveryPassword(): void {
  isLoading.value = true;
  setTimeout(() => {
    const error = false;
    if (error) {
      message.value = 'Não existe conta cadastrada para o e-mail informado';
      iError.value = true;
      isModal.value = true;
      isLoading.value = false;
      return;
    }
    message.value =
      'Um código de alteração foi enviado ao email informado. Siga as instruções do e-mail para continuar com a recuperação de senha';
    iError.value = false;
    isModal.value = true;
    isLoading.value = false;
  }, 1000);
}
</script>

<template>
  <LogoutTemplate title="Recuperação de senha">
    <template #wrapper>
      <p class="has-text-centered">
        Informe seu email abaixo para proseguir com a recuperação da senha:
      </p>
      <form class="theme-light has-text-centered" @submit.prevent="recoveryPassword">
        <div class="field">
          <label class="label">E-mail:</label>
          <div class="control">
            <input
              class="input is-shadowless is-borderless"
              type="email"
              placeholder=""
              maxlength="50"
              required
              v-model.trim="email"
            />
          </div>
        </div>
        <div class="field is-grouped is-justify-content-center">
          <div class="control">
            <button
              class="button is-link btn-green"
              :class="{ 'is-loading': isLoading }"
              :disabled="isLoading"
            >
              Avançar
            </button>
          </div>
        </div>
      </form>
    </template>
  </LogoutTemplate>
  <ModalComponent :message="message" :is-error="iError" v-if="isModal" @close="isModal = false" />
</template>

<style scoped></style>
