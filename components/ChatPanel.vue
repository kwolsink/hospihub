<template>
  <div v-if="openChat" class="panel chatpanel">
    <p class="panel-heading">
      {{ chatTitle }}
    </p>
    <p class="panel-block chat-content-window" id="chatWindow">
    <div class="is-flex is-flex-direction-column message-container">
      <div v-for="message in chatStore.getMessages(openChat.id)" class="message" :class="getMessageStyle(message)">
        {{ message.content }}
      </div>
    </div>

    </p>

    <div class="panel-block button-container is-flex">
      <textarea v-model="currentMessage" class="input is-primary" type="textarea"> </textarea>
      <button @click="sendMessage()" class="button">
        Verstuur
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">

const chatStore = useChatStore()

// set scroll from top
onMounted(() => {
  const chatWindow = document.getElementById("chatWindow")
  if (chatWindow) {
    chatWindow.scrollTop = chatWindow?.scrollHeight;
  }
})

const props = defineProps({
  chatId: {
    type: String,
    required: true
  }
})

// receive the chat
const openChat = computed(() => {
  return chatStore.getChat(props.chatId)
})

const chatTitle = computed(() => {
  const contactId = openChat.value?.user1 === getUserId() ? openChat.value?.user2 : openChat.value?.user1
  return `Chat met ${contactId}`
})

const getMessageStyle = (message: any) => {
  if (message.senderId === getUserId()) {
    return {
      "is-justify-content-flex-start": true,
      "has-background-success-dark": true,
      "message-left": true
    }
  }
  return {
    "is-justify-content-flex-end": true,
    "has-background-info-dark": true,
    "message-right": true
  }
}


const currentMessage = ref("");


const sendMessage = () => {
  if (!openChat.value) return

  const trimmedMessage = currentMessage.value.trim();
  if (trimmedMessage !== "") {
    chatStore.sendMessage(trimmedMessage, openChat.value.id)
    currentMessage.value = "";
    const chatWindow = document.getElementById("chatWindow");
    if (chatWindow)
      setTimeout(() => chatWindow.scrollTop = chatWindow?.scrollHeight, 10);
  }
}

</script>

<style scoped>

.chat-content-window {
  min-height: 100px;
  max-height: 20em;
  overflow-y: auto;
}

.message-container {
  width: 100%;
  max-height: 20em;
  padding: 0.5em;
}

.message {
  width: fit-content;
  display: inline-block;
  max-width: 45%;
  overflow-wrap: normal;
  padding: 0.5em;
  color: white;
}

.message-right {
  margin-left: auto;
  margin-right: 0;
}

.message-left {
  margin-left: 0;
  margin-right: auto;
}

textarea {
  resize: vertical;
  min-height: 2.5em;
  max-height: 14em;
}
</style>