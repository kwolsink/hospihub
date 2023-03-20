import { defineStore } from 'pinia'

import rooms from '~~/samples/rooms'
import {Room} from '~~/shared/types/Room'


export const useRoomStore = defineStore('rooms', {
  state: () => ({ rooms: [] as Room[]}),
  actions: {
    fetchRooms() {
      // fetch all rooms
      this.rooms = rooms
    },
    fetchSingleRoomAndReplace(id : string) {
      this.rooms = []
      // fetch single room
    }
  },
  getters: {
    getRoomById: (state) => {
      return (roomId : string) => state.rooms.find((room) => room.id == roomId)
    }
  }
})