import { Record } from "pocketbase";
import Room from "~~/shared/types/Room";

const mapRecordToRoom = (record: Record) => {
  const room: Room = {
    id: record.id,
    title: record.title,
    description: record.description,
    rent: record.rent,
    deposit: record.deposit,
    avaialbleFrom: record.avaialbleFrom,
    active: record.active,
    city: record.city,
    owner: record.owner,
    images: record.images,
    createdAt: record.createdAt,
    updatedAt: record.updatedAt,
    amountOfRoommates: record.amountOfRoommates,
  };
  return room;
}

export {mapRecordToRoom}