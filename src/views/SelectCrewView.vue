<script setup lang="ts">
import { Faction } from '@/enum/faction';
import { Sea } from '@/enum/sea';
import UserTemplate from '@/templates/UserTemplate.vue';
import { getCharacter, getCharacterMini } from '@/utils/character-utils';
import { computed, ref } from 'vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { ModalSize } from '@/enum/modal-size';

const step = ref(1);
const faction = ref<Faction>(Faction.Marine);
const crewName = ref('');
const name = ref('');
const isCrewNameError = ref('');
const isCrewNameSuccess = ref(false);
const isNameError = ref('');
const isNameSuccess = ref(false);
const characterId = ref<number | null>(null);
const isError = ref(false);
const sea = ref<Sea>(Sea.EastBlue);
const isLoading = ref(false);
const isModal = ref(false);
const message = ref('');
const isConfirmModal = ref('');
const password = ref('');
const deleteCrewId = ref<number | null>(null);
const isModalError = ref(true);
const modalSize = ref<ModalSize>(ModalSize.Default);

const isFilled = computed(() => {
  return crewName.value === '' || name.value === '' || !characterId.value || isError.value;
});

function createCrew(): void {
  isLoading.value = true;
  setTimeout(() => {
    const error = false;
    if (error) {
      message.value = 'O nome de capitão informado já está cadastrado.';
      isModal.value = true;
      isLoading.value = false;
      return;
    }
    step.value = 1;
    isLoading.value = false;
    clearInputs();
  }, 1000);
}

function clearInputs(): void {
  faction.value = Faction.Marine;
  crewName.value = '';
  isCrewNameSuccess.value = false;
  name.value = '';
  isNameSuccess.value = false;
  characterId.value = null;
  isError.value = false;
}

function handleCrewNameInput(): void {
  clearCrewNameInput();
  if (crewName.value.length < 3) {
    isCrewNameError.value = 'O apelido da tripulação deve conter no mínimo 3 caracteres';
    isError.value = true;
    return;
  }
  isError.value = false;
  isCrewNameSuccess.value = true;
  isCrewNameError.value = '';
}

function handleNameInput(): void {
  clearNameInput();
  if (name.value.length < 3) {
    isNameError.value = 'O nome do capitão deve conter no mínimo 3 caracteres';
    isError.value = true;
    return;
  }
  isError.value = false;
  isNameSuccess.value = true;
  isNameError.value = '';
}

function clearCrewNameInput(): void {
  modalSize.value = ModalSize.Default;
  isModalError.value = true;
  isCrewNameSuccess.value = false;
  isCrewNameError.value = '';
}

function clearNameInput(): void {
  modalSize.value = ModalSize.Default;
  isModalError.value = true;
  isNameSuccess.value = false;
  isNameError.value = '';
}

function selectCrew(id: number): void {
  console.log(id);
}

function confirmRemoveCrew(id: number): void {
  isConfirmModal.value = 'Nome da tripulação';
  deleteCrewId.value = id;
}

function removeCrew(): void {
  isLoading.value = true;
  setTimeout(() => {
    const error = false;
    if (error) {
      return;
    }
    isConfirmModal.value = '';
    modalSize.value = ModalSize.Large;
    isModalError.value = false;
    message.value = 'Tripulação removida';
    isModal.value = true;
    isLoading.value = false;
    password.value = '';
  }, 1000);
}

function closeConfirmModal(): void {
  isConfirmModal.value = '';
  password.value = '';
}
</script>

<template>
  <UserTemplate title="Bem vindo teste!">
    <template #wrapper>
      <div v-if="step === 1">
        <p class="has-text-centered" v-if="false">
          Clique no botão abaixo para criar sua primeira tripulação e começar a navegar!
        </p>
        <p class="has-text-centered" v-else>Selecione sua tripulação e começar a navegar!</p>
        <div class="columns">
          <div class="column is-7 columns is-multiline is-mobile m-0">
            <div class="column" v-for="index in 3" :key="index">
              <div class="custom-box has-text-centered is-170">
                <img
                  src="../assets/images/flags/marine-1.jpeg"
                  alt="Flag icon"
                  class="flag-image"
                />
                <p>Nome da Tripulação</p>
                <button
                  class="button is-link btn-green is-fullwidth is-responsive"
                  :class="{ 'is-loading': isLoading }"
                  :disabled="isLoading"
                  @click="selectCrew(1)"
                >
                  <font-awesome-icon :icon="['fas', 'check']" class="mr-2" />Selecionar
                </button>
                <button
                  class="button is-link btn-red is-fullwidth is-responsive mt-2"
                  :class="{ 'is-loading': isLoading }"
                  :disabled="isLoading"
                  @click="confirmRemoveCrew(1)"
                >
                  <font-awesome-icon :icon="['fas', 'times']" class="mr-2" />Remover
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column"></div>
          <div class="column">
            <button class="button btn-blue is-fullwidth" @click="step = 2">
              Criar Tripulação »
            </button>
          </div>
        </div>
      </div>
      <div v-if="step === 2">
        <p class="has-text-centered">Escolha sua facção:</p>
        <div class="columns is-centered">
          <div class="column">
            <div class="is-flex is-flex-direction-column is-align-items-center">
              <div class="control mb-5">
                <label class="radio">
                  <div
                    class="is-flex is-flex-direction-column is-align-items-center"
                    v-tooltip="
                      'Marinheiros são defensores da justiça e da ordem! Eles usam bandeiras e velas brancas com símbolos da marinha. Os marinheiros não lutam entre si, eles apenas combatem piratas, tendo a vantagem de ter menos inimigos com que se preocupar.'
                    "
                  >
                    <img
                      src="../assets/images/flags/marine-1.jpeg"
                      alt="Flag icon"
                      class="flag-image"
                    />
                    <div>
                      <input
                        type="radio"
                        name="faction"
                        :value="Faction.Marine"
                        v-model="faction"
                      />
                      Marinheiro
                    </div>
                  </div>
                </label>
              </div>
              <button class="button btn-blue is-fullwidth" @click="step = 1">« Voltar</button>
            </div>
          </div>
          <div class="column">
            <div class="is-flex is-flex-direction-column is-align-items-center">
              <div class="control mb-5">
                <label class="radio">
                  <div
                    class="is-flex is-flex-direction-column is-align-items-center"
                    v-tooltip="
                      'Piratas são aventureiros seguindo suas próprias leis! Usando bandeiras pretas estão sempre dando trabalho para marinha. Os piratas enfrentam tudo e todos, tendo assim muitos oponentes para derrotar.'
                    "
                  >
                    <img
                      src="../assets/images/flags/pirate-1.jpeg"
                      alt="Flag icon"
                      class="flag-image"
                    />
                    <div>
                      <input
                        type="radio"
                        name="faction"
                        :value="Faction.Pirate"
                        v-model="faction"
                      />
                      Pirata
                    </div>
                  </div>
                </label>
              </div>
              <button class="button btn-blue is-fullwidth" @click="step = 3">
                Criar Tripulação »
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="step === 3">
        <div class="theme-light">
          <div class="field">
            <label class="label">Apelido da tripulação:</label>
            <div class="control">
              <input
                class="input is-shadowless is-borderless"
                type="text"
                placeholder="O apelido é o nome da tripulação, ex: Bando do Chapéu de Palha"
                minlength="3"
                maxlength="15"
                required
                v-model.trim="crewName"
                @input="handleCrewNameInput"
              />
            </div>
            <p class="help is-danger is-error" v-if="isCrewNameError !== ''">
              {{ isCrewNameError }}
            </p>
            <p class="help is-success" v-if="isCrewNameSuccess"></p>
          </div>
          <div class="field">
            <label class="label">Nome do capitão:</label>
            <div class="control">
              <input
                class="input is-shadowless is-borderless"
                type="text"
                placeholder="O capitão é o líder da sua tripulação, você se comunicará com os outros jogadores usando o nome que der para o seu capitão."
                minlength="3"
                maxlength="15"
                required
                v-model.trim="name"
                @input="handleNameInput"
              />
            </div>
            <p class="help is-danger is-error" v-if="isNameError !== ''">
              {{ isNameError }}
            </p>
            <p class="help is-success" v-if="isNameSuccess"></p>
          </div>
          <div class="field">
            <label class="label">Escolha o seu capitão:</label>
            <div class="columns">
              <div class="column is-8 characters">
                <div class="control columns is-multiline is-mobile is-gapless">
                  <div
                    class="column is-1 is-flex is-align-items-center is-justify-content-center is-50"
                    v-for="index in 301"
                    :key="index"
                  >
                    <img
                      :src="getCharacterMini(1)"
                      alt="Character icon"
                      class="character-image"
                      :class="{ 'character-selected': characterId === index }"
                      @click="characterId = index"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <img
                  :src="getCharacter(characterId)"
                  alt="Character image"
                  class="character-selected-image"
                  v-if="characterId"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <button class="button btn-blue is-fullwidth" @click="step = 2">« Voltar</button>
          </div>
          <div class="column">
            <button class="button btn-blue is-fullwidth" @click="step = 4" :disabled="isFilled">
              Criar Tripulação »
            </button>
          </div>
        </div>
      </div>
      <div v-if="step === 4" class="has-text-centered">
        <p>Mar de Origem</p>
        <p>Escolha em qual oceano você quer começar a jogar.</p>
        <div class="control mb-5">
          <label class="radio">
            <input type="radio" name="sea" :value="Sea.EastBlue" v-model="sea" />
            East Blue
          </label>
        </div>
        <div class="control mb-5">
          <button
            class="button is-link btn-green"
            :class="{ 'is-loading': isLoading }"
            :disabled="isLoading"
            @click="createCrew"
          >
            Criar minha tripulação<font-awesome-icon :icon="['fas', 'check']" class="ml-2" />
          </button>
        </div>
        <div class="columns">
          <div class="column">
            <button
              class="button btn-blue is-fullwidth"
              :class="{ 'is-loading': isLoading }"
              :disabled="isLoading"
              @click="step = 3"
            >
              « Voltar
            </button>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </template>
  </UserTemplate>
  <ModalComponent
    :message="message"
    :is-error="isModalError"
    :size="modalSize"
    v-if="isModal"
    @close="isModal = false"
  />
  <div class="modal is-justify-content-start pt-5" :class="{ 'is-active': isConfirmModal !== '' }">
    <div class="modal-background"></div>
    <div class="modal-card animate__animated animate__slideInDown">
      <section class="modal-card-body">
        <button
          type="button"
          class="close-modal"
          data-dismiss="modal"
          aria-hidden="true"
          style="margin-top: -10px"
          :disabled="isLoading"
          @click="closeConfirmModal"
        >
          ×
        </button>
        <div class="has-text-centered mt-3">
          <p>ATENÇÃO!</p>
          <p>Você está prestes a remover a tripulação {{ isConfirmModal }}.</p>
          <p>Uma vez removida não será possível restaura-la.</p>
          <p>Se deseja mesmo continuar digite sua senha no campo abaixo:</p>
          <div class="theme-light mt-3">
            <div class="field">
              <label class="label">Senha</label>
              <div class="control">
                <input
                  class="input is-shadowless is-borderless"
                  type="password"
                  placeholder=""
                  required
                  v-model.trim="password"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot is-justify-content-end">
        <div class="buttons">
          <button class="button btn-default" :disabled="isLoading" @click="closeConfirmModal">
            Cancelar
          </button>
          <button
            class="button btn-gray"
            :class="{ 'is-loading': isLoading }"
            :disabled="isLoading || password === ''"
            @click="removeCrew"
          >
            OK
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.flag-image {
  width: 95px;
  height: 65px;
}

.characters {
  max-height: 300px;
  overflow: auto;
  margin-bottom: 50px;
}

.character-image {
  width: 50px;
  height: 37px;
}

.character-selected {
  border: 4px solid rgb(135, 0, 0);
}

.character-selected-image {
  width: 200px;
  height: 300px;
}

.is-50 {
  width: 50px !important;
}

.is-170 {
  width: 170px !important;
}

.modal-card {
  background-image: url(../assets/images/layout/back.jpg);
  background-position: center;
  background-repeat: repeat;
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
  background-color: transparent !important;
  color: #222;
}

.modal-card-foot {
  background-color: transparent !important;
  border-top: 1px solid #c07617;
}

.close-modal {
  color: #c07617;
  font-size: 25px;
  font-weight: bold;
  float: right;
  opacity: 0.7;
  text-shadow: 0 2px 0 #ffffff !important;
}

.close-modal:hover {
  opacity: 1;
}
</style>
