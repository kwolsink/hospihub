import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"


export const useFireBase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInWithGoogle = () => signInWithPopup(auth, provider).then((result) => {
    console.log("logged in!")
  })

  return { signInWithGoogle }
}



