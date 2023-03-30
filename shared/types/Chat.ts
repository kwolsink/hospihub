export default interface Chat {
  id: string,
  contact: string,
  lastMessage?: string,
  active: boolean,
}