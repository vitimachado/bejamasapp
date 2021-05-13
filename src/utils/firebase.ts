import firebase from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyBDgB5b_Zxt3qJ952fwu-9VlR0S66o6FV0",
  authDomain: "get-servicos.firebaseapp.com",
  databaseURL: "https://get-servicos.firebaseio.com",
  projectId: "get-servicos",
  storageBucket: "get-servicos.appspot.com",
  messagingSenderId: "335315596352",
  appId: "1:335315596352:web:1aaff95cdb7ecb92"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export { firestore }
