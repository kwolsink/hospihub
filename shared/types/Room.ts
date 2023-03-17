import City from "./City";


interface Room {
  id: string,
  title: string,
  description?: string,
  images: string[],
  city: City,
  rent: number,
  amountOfRoommates: number
}

export default Room;