<template>
  <div class="panel is-primary">
    <p class="panel-heading">
      Chats
    </p>
    <p v-if="chatStore.getChats.length === 0" class="panel-block has-text-grey-light">
      Er zijn nog geen chats beschikbaar
    </p>
    <a v-else v-for="chat in chatStore.getChats" class="panel-block" @click="$emit('onChatClicked', chat.id)">
      <div class="is-flex">
        <p class="mr-3">{{ getContactName(chat) }}</p>
        <span v-if="chat.lastMessage" class="has-text-grey-light chat-message"> {{ shortenMessagePreview(chat.lastMessage)}}</span>
      </div>
    </a>
  </div>
</template>


<script setup lang="ts">
import { ChatsResponse } from '~~/shared/types/pocketbase-types';


const chatStore = useChatStore()

// load all the chats
onMounted(async () => {
  const chats = await chatStore.loadChats()
  console.log("chats loaded " + chats)
})


const getContactName = (chat : ChatsResponse) => {
  const contactId = chat.user1 === getUserId() ? chat.user2 : chat.user1
  return contactId
}

const shortenMessagePreview = (msg: string) => {
  const maxMessagePreviewLength = 100;
  if (msg.length <= maxMessagePreviewLength) {
    return msg;
  }
  return `${msg.substring(0, maxMessagePreviewLength - 3)}...`
}



</script>

