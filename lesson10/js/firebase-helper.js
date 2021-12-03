import {
    getFirestore,
    addDoc,
    collection,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"

const db = getFirestore();
const messageRef = collection(db, "messages");

export function saveMessagetoCollection(msg) {
   addDoc(messageRef,msg)
}

// luu vao database
// mysql && nosql

//nosql 
// collections
// document :{
    // uid document
//}