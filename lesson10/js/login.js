import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

import { saveUserToLocalStorage, getUserFromLocalStorage } from "./helper.js"

const logInGoogleAccountButton = document.getElementById('btn')
const auth = getAuth();
    
function signInGoogleAccount() {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      saveUserToLocalStorage(user)
      window.location.href=(`./chat.html?uid=${user.uid}`)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage)
  });
}


function onAuthenticationListener(user) {
  console.log(user);
  if (user) {
    console.log('login')
     window.location.href=(`./chat.html?uid=${user.uid}`) 
  }
}

// add event
logInGoogleAccountButton.addEventListener('click', signInGoogleAccount)


// chuc nang remember me
onAuthStateChanged(auth,onAuthenticationListener);

// if (currentUser) { 
//   console.log('login succes')
//   window.location.href=(`./chat.html?uid=${currentUser.uid}`) 
// }