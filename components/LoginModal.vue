<template>
  <div class="modal" :class="{'is-active': props.modalOpen}">
    <div class="modal-background"></div>
    <div class="modal-content">

      <div class="field">
        <label class="label">Gebruikersnaam</label>
        <div class="control">
          <input v-model="username" class="input" type="text" placeholder="Typ hier uw gebruikersnaam">
        </div>
      </div>

      <div class="field">
        <label class="label">Wachtwoord</label>
        <div class="control">
          <input v-model="password" class="passord" type="text" placeholder="Typ hier uw wachtwoord">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button" @click="login()">
            Log in
          </button>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
</template>


<script lang="ts" setup>
import { Collections } from '~~/shared/types/pocketbase-types';

const nuxtApp = useNuxtApp()
const username = ref("")
const password = ref("")

const props = defineProps({
  modalOpen: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(["close"]);

const login = async () => {
  await loginWithUsernameAndPassword(username.value, password.value)
  emits("close")
}


</script>