import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth"


export const useFireBase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => signInWithPopup(auth, provider)
  const currentUser = ref()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser.value = user
    } else {
      currentUser.value = null;
    }
  });

  const signOut = async () => {
    await auth.signOut()
  };


  return { signInWithGoogle, currentUser, signOut }
}





