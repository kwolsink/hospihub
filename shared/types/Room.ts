import { Timestamp } from "firebase/firestore";
import City from "./City";


interface Room {
  id: string,
  metadata: RoomMetadata,
}

interface RoomMetadata {
  createdOn: Timestamp,
  updatedOn: Timestamp,
  data: RoomData
}

interface RoomData {
  owner: string,
  title: string,
  description: string,
  images: string[],
  city: City,
  rent: number,
  amountOfRoommates: number
}


export {Room, RoomMetadata, RoomData}