<script setup lang="ts">
import UserTemplate from '@/templates/UserTemplate.vue';
</script>

<template>
  <UserTemplate title="Bem vindo teste!">
    <template #wrapper>
      <p class="has-text-centered">
        Clique no botão abaixo para criar sua primeira tripulação e começar a navegar!
      </p>
    </template>
  </UserTemplate>
</template>

<style scoped></style>
