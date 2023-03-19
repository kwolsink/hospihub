<template>
  <div class="columns p-5 is-centered">
    <ChatOverviewPanel @onChatClicked="(chat: Chat) => setOpenChat(chat)" class="column m-2 is-two-fifths"></ChatOverviewPanel>
    <ChatPanel class="column m-2 is-two-fifths" v-if="isChatOpen"  :chat="openChat as Chat"></ChatPanel>
  </div>
</template>


<script setup lang=ts>
import Chat from '~~/shared/types/Chat';

const isChatOpen = ref(false)
const openChat = ref({})


const setOpenChat = (chat : Chat) => {
  openChat.value = chat
  isChatOpen.value=true;
}

</script>