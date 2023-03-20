import City from "./City";


interface Room {
  owner: string,
  id: string,
  metadata: RoomMetadata
}

interface RoomMetadata {
  title: string,
  description: string,
  images: string[],
  city: City,
  rent: number,
  amountOfRoommates: number
}


export {Room, RoomMetadata}