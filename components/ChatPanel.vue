<template>
  <div class="panel chatpanel">
    <p class="panel-heading">
      {{ chatTitle }}
    </p>
    <p class="panel-block chat-content-window" id="chatWindow">
    <div class="is-flex is-flex-direction-column message-container">
      <div v-for="message in messages" class="message" :class="getMessageStyle(message)">
        {{ message.content }}
      </div>
    </div>

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


// set scroll from top

onMounted(() => {
  const chatWindow = document.getElementById("chatWindow")
  if (chatWindow) {
    chatWindow.scrollTop = chatWindow?.scrollHeight;
  }
})




const props = defineProps({
  chat: {
    type: Object as PropType<Chat>,
    required: true
  }
})
// for testing purposes
const ownId = 1;
const messages = [
  {
    "senderId": 1,
    "content": "hee hoe gaat het? ik vroeg mij af of de kamer nog beschikbaar was sadfjsdfjdslfkjsad flljkadsfkjas jfklja sdkfjdasf sadjkfl sdjlafjdsalf kjdslaf lkfjdaslkfaj dflkdasj fklsdajf ",
  },
  {
    "senderId": 2,
    "content": "hee het gaat goed, ja hij is nog beschikbaar"
  },
  {
    "senderId": 1,
    "content": "hee hoe gaat het? ik vroeg mij af of de kamer nog beschikbaar was sadfjsdfjdslfkjsad flljkadsfkjas jfklja sdkfjdasf sadjkfl sdjlafjdsalf kjdslaf lkfjdaslkfaj dflkdasj fklsdajf ",
  },
  {
    "senderId": 1,
    "content": "hee hoe gaat het? ik vroeg mij af of de kamer nog beschikbaar was sadfjsdfjdslfkjsad flljkadsfkjas jfklja sdkfjdasf sadjkfl sdjlafjdsalf kjdslaf lkfjdaslkfaj dflkdasj fklsdajf ",
  },
  {
    "senderId": 1,
    "content": "hee hoe gaat het? ik vroeg mij af of de kamer nog beschikbaar was sadfjsdfjdslfkjsad flljkadsfkjas jfklja sdkfjdasf sadjkfl sdjlafjdsalf kjdslaf lkfjdaslkfaj dflkdasj fklsdajf ",
  },
  {
    "senderId": 1,
    "content": "hee hoe gaat het? ik vroeg mij af of de kamer nog beschikbaar was sadfjsdfjdslfkjsad flljkadsfkjas jfklja sdkfjdasf sadjkfl sdjlafjdsalf kjdslaf lkfjdaslkfaj dflkdasj fklsdajf ",
  },
  {
    "senderId": 1,
    "content": "hee hoe gaat het? ik vroeg mij af of de kamer nog beschikbaar was sadfjsdfjdslfkjsad flljkadsfkjas jfklja sdkfjdasf sadjkfl sdjlafjdsalf kjdslaf lkfjdaslkfaj dflkdasj fklsdajf ",
  },
]

const chatMessages = ref(messages)


const chatTitle = computed(() => {
  return `Chat met ${props.chat.contact}`
})

const getMessageStyle = (message: any) => {

  if (message.senderId === ownId) {
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