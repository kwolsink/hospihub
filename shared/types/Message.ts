import Chat from "./Chat";

export default interface Message {
  id: string,
  chat: Chat,
  sender: string,
  content: string,
  dateSent: Date,
}