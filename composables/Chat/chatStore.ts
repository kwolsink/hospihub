import { defineStore } from "pinia";
import { Collections, ChatsResponse, MessagesResponse, RecordIdString, ChatsRecord, MessagesRecord } from "~~/shared/types/pocketbase-types";



const useChatStore = defineStore('chatStore', {
  state: () => ({
    chats: [] as ChatsResponse[],
    messages: new Map<string, MessagesResponse[]>()
  }),
  getters: {
    getChats: (state) => { return state.chats },
    getChat: (state) => (chatid: string) => { return state.chats.find(c => c.id === chatid) },
    getMessages: (state) => (chatId: string) => { return state.messages.get(chatId) }
  },
  actions: {
    async loadChats() {
      const nuxtApp = useNuxtApp()
      const chatRecords = await nuxtApp.$pb.collection(Collections.Chats).getFullList<ChatsResponse>({ filter: `user1.id = "${getUserId()}" || user2.id = "${getUserId()}"`}) 
      const newChats = chatRecords.filter(r => !this.chats.some(c => c.id === r.id))
      this.chats.push(...newChats);
      return newChats
    },
    async createChat(otherUserId: string) {
      const nuxtApp = useNuxtApp()
      const chatRecord: ChatsRecord = {
        user1: nuxtApp.$pb.authStore.model?.id,
        user2: otherUserId,
        lastMessage: "",
        active: true
      }
      const newChat = await nuxtApp.$pb.collection(Collections.Chats).create<ChatsResponse>(chatRecord)
      this.chats.push(newChat)
      return newChat
    },
    async loadMessages(chatId: string) {
      const nuxtApp = useNuxtApp()
      const newMessages = await nuxtApp.$pb.collection(Collections.Messages).getFullList<MessagesResponse>({ filter: `chat = "${chatId}"` })
      this.messages.set(chatId, newMessages)
      return newMessages
    },
    async sendMessage(content: string, chatId: string) {
      if (this.messages.get(chatId) === undefined) {
        this.messages.set(chatId, [])
      }

      const nuxtApp = useNuxtApp()
      const message : MessagesRecord = {
        sender: nuxtApp.$pb.authStore.model?.id,
        chat: chatId,
        content
      }
      const sentMessage = await nuxtApp.$pb.collection(Collections.Messages).create<MessagesResponse>(message)
      this.messages.get(chatId)?.push(sentMessage)
      return sentMessage
    }
  }
}
)



export { useChatStore }