// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import { doc, getFirestore, getDoc, collection, setDoc, serverTimestamp, updateDoc, runTransaction, addDoc, arrayUnion, arrayRemove,getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzmWyfNoXnrmtHUDxLnggTX2PgHdan0KI",
  authDomain: "kyn-merch.firebaseapp.com",
  projectId: "kyn-merch",
  storageBucket: "kyn-merch.appspot.com",
  messagingSenderId: "889759378297",
  appId: "1:889759378297:web:570150966590ad73db5da8",
  measurementId: "G-CL2H67Z764"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app= firebase.initializeApp(firebaseConfig);
} else {
    app=firebase.app()
}
const db = getFirestore()
export const createOrder = async (data) => {
    const ref = doc(collection(db,'orders'))
    const {order} = data
    console.log(data)
    try{
        await setDoc(ref, {
        orders:data
        })
    } catch(err){
        console.log(err.message)
    }
    

} 



