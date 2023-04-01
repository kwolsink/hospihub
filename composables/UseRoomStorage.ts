import {defineStore} from 'pinia'
import { RoomsResponse, Collections } from '~~/shared/types/pocketbase-types';

export const useRoomStorage = defineStore('roomStorage', {
  state: () => ({
    rooms: [] as RoomsResponse[],
  }),
  getters: {
    getRoom: (state) => (id : string) => {
      return state.rooms.find((room) => room.id === id);
    },
    getRooms: (state) => {
      return state.rooms;
    }
  },
  actions: {
    async fetchRooms()  {
      const nuxtApp = useNuxtApp()
      const fetchedRooms = await nuxtApp.$pb.collection(Collections.Rooms).getFullList<RoomsResponse>()
      const newRooms = fetchedRooms.filter(room => !this.rooms.some(r => room.id === r.id))
      this.rooms.push(...newRooms)
      return newRooms
    },
    async fetchRoom(id: string) {
      const nuxtApp = useNuxtApp()
      const fetchedRoom = await nuxtApp.$pb.collection(Collections.Rooms).getOne<RoomsResponse>(id)
      if (this.rooms.some(r => r.id === fetchedRoom.id)) this.rooms.push(fetchedRoom)
      return fetchedRoom;
    }
  }
})