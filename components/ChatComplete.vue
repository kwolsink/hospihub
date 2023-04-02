<template>
  <div class="columns p-5 is-centered">
    <ChatOverviewPanel @onChatClicked="(chatId) => setOpenChat(chatId)" class="column m-2 is-two-fifths"></ChatOverviewPanel>
    <ChatPanel class="column m-2 is-two-fifths" v-if="openChatId"  :chatId="openChatId"></ChatPanel>
  </div>
</template>


<script setup lang=ts>

const openChatId = ref("")


const setOpenChat = (chatId : string) => {
  openChatId.value = chatId
}
</script>

<style scoped>
.column {
  padding: 0;
}

</style>