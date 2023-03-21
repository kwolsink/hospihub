<template>
  <div class="panel is-primary">
    <p class="panel-heading">
      Chats
    </p>
    <p v-if="chats == null || chats.length == 0" class="panel-block has-text-grey-light">
      Er zijn nog geen chats beschikbaar
    </p>
    <a v-else v-for="chat in chats" class="panel-block" @click="$emit('onChatClicked', chat)">
      <div class="is-flex">
        <p class="mr-3">{{ chat.contact }}</p>
        <span v-if="chat.lastMessage" class="has-text-grey-light chat-message"> {{ shortenMessagePreview(chat.lastMessage)}}</span>
      </div>
    </a>
  </div>
</template>


<script setup lang="ts">

const chats = ref([])

const maxMessagePreviewLength = 100;
const shortenMessagePreview = (msg: string) => {
  if (msg.length <= maxMessagePreviewLength) {
    return msg;
  }
  return `${msg.substring(0, maxMessagePreviewLength - 3)}...`
}



</script>

