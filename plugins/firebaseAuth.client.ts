import {initializeApp} from 'firebase/app'

export default defineNuxtPlugin((NuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAfIlUY_3ERtz2OjjEwdf8IBm7x-NJO20o",
    authDomain: "hospihub-59ee1.firebaseapp.com",
    projectId: "hospihub-59ee1",
    storageBucket: "hospihub-59ee1.appspot.com",
    messagingSenderId: "644365195204",
    appId: "1:644365195204:web:a8b51680654d60845c3691",
    measurementId: "G-425HDZDX4Q"
  };

  const app = initializeApp(firebaseConfig);

})
