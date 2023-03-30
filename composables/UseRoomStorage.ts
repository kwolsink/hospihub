import {defineStore} from 'pinia'
import Room from '~~/shared/types/Room';



export const useRoomStorage = defineStore('roomStorage', {
  state: () => ({
    rooms: [] as Room[],
  }),
  getters: {
    room: (state) => (id : string) => {
      return state.rooms.find((room) => room.id === id);
    },
    getRooms: (state) => {
      return state.rooms;
    }
  },
  actions: {
    async fetchRooms()  {
      const nuxtApp = useNuxtApp()
      const roomRecords = await nuxtApp.$pb.collection('rooms').getList(1, 50)
      this.rooms = roomRecords.items.map((roomRecord) => mapRecordToRoom(roomRecord))
      return this.rooms
    }
  }
})