<script setup lang="ts">
defineProps<{
  message: string;
  isError?: boolean;
}>();

const emit = defineEmits(['close']);

function closeModal(): void {
  emit('close');
}
</script>

<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card animate__animated animate__slideInDown">
      <header class="modal-card-head" v-if="isError">
        <p class="modal-card-title">Bancando o espertinho?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <img src="../assets/images/layout/error.jpg" alt="Modal image" v-if="isError" />
        <button
          type="button"
          class="close-modal"
          data-dismiss="modal"
          aria-hidden="true"
          style="margin-top: -10px"
          @click="closeModal"
          v-else
        >
          ×
        </button>
        <p class="has-text-centered mt-1">{{ message }}</p>
      </section>
      <footer class="modal-card-foot is-justify-content-end">
        <div class="buttons">
          <button class="button btn-gray" @click="closeModal">OK</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-card {
  background-image: url(../assets/images/layout/top.png), url(../assets/images/layout/bottom.png),
    url(../assets/images/layout/middle.jpg);
  background-position:
    center top,
    center bottom,
    center top;
  background-repeat: no-repeat, no-repeat, repeat-y;
  background-size: 100%, 100%, 100%;
  border: 3px solid #c07617;
  border-radius: 5px;
}

.modal-card-head {
  background: linear-gradient(#e7201a, #d71c16 40%, #bb1813);
  border-bottom: 3px solid #c07617;
  border-radius: 0;
}

.delete::before,
.delete::after {
  background-color: #c07617;
}

.modal-card-title {
  color: white;
  text-align: center;
}

.modal-card-body {
  background: transparent;
  color: #222;
}

.modal-card-foot {
  background: transparent;
  border-top: 1px solid #c07617;
}

.close-modal {
  color: white;
  font-size: 25px;
  font-weight: bold;
  float: right;
  opacity: 0.7;
}

.close-modal:hover {
  opacity: 1;
}
</style>
