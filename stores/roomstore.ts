import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { defineStore } from 'pinia'
import { useFirestore } from '~~/composables/useFirebase';

import rooms from '~~/samples/rooms'
import {Room, RoomData, RoomMetadata} from '~~/shared/types/Room'
import { useRoomCrudStore } from './RoomFirestoreCrudStore'


const crudStore = useRoomCrudStore();

export const useRoomStore =  defineStore('rooms', {
  state: () => ({ rooms: [] as Room[]}),
  actions: {
    fetchRooms() {
      // fetch all rooms
      this.rooms = rooms
    },
    fetchSingleRoomAndReplace(id : string) {
      this.rooms = []
      // fetch single room
    },
    async createRoom(roomData : RoomData) {
      const timestamp = serverTimestamp();
      try {
        await addDoc(collection(useFirestore().db, "rooms"), {
          data: roomData,
          createdOn: timestamp,
          updatedOn: timestamp
        } as RoomMetadata);
        return true;
      } catch (e) {
        console.log("Error adding document: ", e)
        return false;
      }
    },
  },
  getters: {
    getRoomById: (state) => {
      return (roomId : string) => state.rooms.find((room) => room.id == roomId)
    }
  }
})