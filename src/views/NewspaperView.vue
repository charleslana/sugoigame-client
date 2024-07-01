<script setup lang="ts">
import CrewTemplate from '@/templates/CrewTemplate.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { ref } from 'vue';

const isModal = ref(false);
const title = ref('Bem vindo marujo!');
const message =
  'Fique de olho na espada amarela no topo da tela. Alí você encontrará a ajuda que precisa para começar a jogar!';
</script>

<template>
  <CrewTemplate :menu-selected="'main'">
    <template #wrapper> </template>
  </CrewTemplate>
  <ModalComponent
    :title="title"
    :message="message"
    :is-error="false"
    v-if="isModal"
    @close="isModal = false"
  />
</template>

<style scoped></style>
