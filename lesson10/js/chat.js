import {
 getAuth,
 signOut,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

import { renderMessages } from "./helper.js";
import { mockData } from "./mockData.js";

const auth = getAuth();
const urlParams = new URLSearchParams(window.location.search);
const senderId = urlParams.get('uid');

const msgContainer = document.querySelector('#msgContainer')

renderMessages(mockData,msgContainer,senderId)


const logout = document.getElementById('logout')

logout.addEventListener('click', () => {
    signOut(auth);
    window.location.href ="./index.html";
});