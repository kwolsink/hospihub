/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Chats = "chats",
	Messages = "messages",
	Rooms = "rooms",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ChatsRecord = {
	user1: RecordIdString
	user2: RecordIdString
	lastMessage?: string
	active: boolean
}

export type MessagesRecord = {
	sender: RecordIdString
	chat: RecordIdString
	content: string
}

export type RoomsRecord = {
	title: string
	rent?: number
	deposit?: number
	availableFrom?: IsoDateString
	active: boolean
	owner: RecordIdString
	images?: string[]
	amountOfRoommates?: number
	description?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ChatsResponse<Texpand = unknown> = ChatsRecord & BaseSystemFields<Texpand>
export type MessagesResponse<Texpand = unknown> = MessagesRecord & BaseSystemFields<Texpand>
export type RoomsResponse<Texpand = unknown> = RoomsRecord & BaseSystemFields<Texpand>
export type UsersResponse = UsersRecord & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	chats: ChatsRecord
	messages: MessagesRecord
	rooms: RoomsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	chats: ChatsResponse
	messages: MessagesResponse
	rooms: RoomsResponse
	users: UsersResponse
}