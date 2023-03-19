<template>
  <div class="panel chatpanel">
    <p class="panel-heading">
      {{ chatTitle }}
    </p>
    <p class="panel-block chat-content-window">

    </p>

    <div class="panel-block button-container is-flex">
      <textarea class="input is-primary" type="textarea"> </textarea>
      <button class="button">
        Verstuur
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import Chat from '~~/shared/types/Chat';


const props = defineProps({
  chat: {
    type: Object as PropType<Chat>,
    required: true
  }
})

const chatTitle = computed(() => {
  return `Chat met ${props.chat.contact}`
})

</script>

<style scoped>
.chat-content-window {
  min-height: 100px;
}

textarea { resize: vertical; min-height: 2.5em; max-height: 14em; }
</style>