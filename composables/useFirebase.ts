import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

export const useFirebaseAuth = () => {
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


export const useFirestore = () => {
  const db = getFirestore();


  return {db}
}





