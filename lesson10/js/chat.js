import {
 getAuth,
 signOut,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

import { renderMessages, getUserFromLocalStorage } from "./helper.js";
import { mockData } from "./mockData.js";
import { saveMessagetoCollection } from "./firebase-helper.js";

const auth = getAuth();

const currentUser = getUserFromLocalStorage();
const senderId = currentUser.uid;

const msgContainer = document.querySelector('#msgContainer')
const myForm = document.querySelector('#myform')

renderMessages(mockData,msgContainer,senderId)


const logout = document.getElementById('logout')

logout.addEventListener('click', () => {
    signOut(auth);
    window.location.href ="./index.html";
});

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(currentUser)
  //  console.log(e.target.messageValue.value) lay ra dc cai the input
    const newMsg = {
    avatar:currentUser.photoURL,
    content: e.target.messageValue.value,
    createdAt: new Date().valueOf(),
    senderId: senderId,
  }
  saveMessagetoCollection(newMsg)
    // console.log(newMsg)
})