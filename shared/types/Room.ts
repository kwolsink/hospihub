import City from "./City";


export default interface Room {
  id: string,
  title: string,
  description: string,
  rent: number,
  deposit: number,
  avaialbleFrom: Date,
  active: boolean,
  city: City,
  owner: string,
  images: string[],
  createdAt: Date,
  updatedAt: Date,
  amountOfRoommates: number,
}
