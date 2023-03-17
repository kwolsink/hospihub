import Room from "../shared/types/Room"
import City from "../shared/types/City"


const room1: Room = {
  id: "1",
  title: "Cozy Room in the Heart of Amsterdam",
  description: "This spacious and cozy room is located in the heart of Amsterdam, just a stone's throw away from the city's best restaurants and bars.",
  images: ["room.jpeg", "room.jpeg"],
  city: City.Amsterdam,
  rent: 1000,
  amountOfRoommates: 1
}

const room2: Room = {
  id: "2",
  title: "Spacious Apartment in Utrecht",
  description: "This modern and spacious apartment is located in Utrecht, just a few minutes' walk from the city center.",
  images: ["room.jpeg"],
  city: City.Utrecht,
  rent: 1500,
  amountOfRoommates: 2
}

const room3: Room = {
  id: "3",
  title: "Bright Room in Delft",
  description: "This bright and airy room is located in Delft, just a short walk from the historic city center.",
  city: City.Delft,
  rent: 800,
  amountOfRoommates: 1,
  images: ["room.jpeg"]
}

export default [room1, room2, room3]