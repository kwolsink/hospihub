import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth"


export const useFireBase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInWithGoogle = () => signInWithPopup(auth, provider).then((result) => {
  })


  const uid = ref();
  const username = ref();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid.value = user?.uid;
      username.value = user?.displayName;
    } else {
      uid.value = null;
      username.value = null;
    }
  });

  const isAuthenticated = () => {return uid.value != null;}



  return { signInWithGoogle, isAuthenticated}
}





