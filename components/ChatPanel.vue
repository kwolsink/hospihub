<template>
  <div class="panel chatpanel">
    <p class="panel-heading">
      {{ chatTitle }}
    </p>
    <p class="panel-block chat-content-window">

    </p>
    <textarea class="panel-block textarea chat-message-window" rows="3" placeholder="Typ hier uw bericht">

      </textarea>
    <div class="panel-block button-container is-flex is-justify-content-flex-end">
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
</style>