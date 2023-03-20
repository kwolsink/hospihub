import { defineStore } from "pinia";
import { useFirestore } from "~~/composables/useFirebase";
import { RoomData, RoomMetadata } from "~~/shared/types/Room";
import { addDoc, collection, serverTimestamp, setDoc } from "firebase/firestore";


export const useRoomCrudStore = defineStore('rooms', {
  actions: {
    async createRoom(roomData : RoomData) {
      const timestamp = serverTimestamp();
      try {
        await addDoc(collection(useFirestore().db, "rooms"), {
          data: roomData,
          createdOn: timestamp,
          updatedOn: timestamp
        } as RoomMetadata);
      } catch (e) {
        console.log("Error adding document: ", e)
      }
    }
  }

});