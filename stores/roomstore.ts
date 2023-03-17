import { defineStore } from 'pinia'

import rooms from '~~/samples/rooms'
import Room from '~~/shared/types/Room'

export const useRoomStore = defineStore('rooms', {
  state: () => ({ rooms: [] as Room[]}),
  actions: {
    fetchRooms() {
      this.rooms = rooms
    },
  },
  getters: {
    getRoomById: (state) => {
      return (roomId : string) => state.rooms.find((room) => room.id == roomId)
    }
  }
})