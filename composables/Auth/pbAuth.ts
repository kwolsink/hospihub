

const usePBAuth = () => {
  const nuxtApp = useNuxtApp()
  let authToken = useState('token', () => "")

  nuxtApp.$pb.authStore.onChange((token, model) => {
    authToken.value = token
  })

  return authToken
}


export {usePBAuth}