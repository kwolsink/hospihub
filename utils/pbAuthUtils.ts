import { Collections } from "~~/shared/types/pocketbase-types"

const loginWithUsernameAndPassword = async (username: string, password: string) => {
  const nuxtApp = useNuxtApp()
  return await nuxtApp.$pb.collection(Collections.Users).authWithPassword(username, password)
}

const pbLogout = () => {
  const nuxtApp = useNuxtApp()
  nuxtApp.$pb.authStore.clear()
}

const getUserId = () => {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$pb.authStore.model?.id
}


export {loginWithUsernameAndPassword, pbLogout, getUserId}