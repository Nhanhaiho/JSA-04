export function saveUserToLocalStorage(user) {
localStorage.setItem('user',JSON.stringify(user));    
}

export function getUserFromLocalStorage() {
    const user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

function generatorMessageElement(msg, senderId) {
  console.log(senderId)
    return `
    <li class="flex  mb-4 ${msg.senderId===senderId && 'justify-end'} items-center">
        <div class="mr-2">
          <img class="w-12 h-auto rounded-full oject-cover"
            src="${msg.avatar}" alt="">
          <p class="mt-2 text-xs font-bold text-center">9:00</p>
        </div>
        <p class="p-2 bg-gray-300 rounded-md">"${msg.content}"</p>
      </li>
      `;
  
  }

  
  


export function renderMessages(messages, container,senderId) {
  let messageHtml = "";
  for (let msg of messages) {
    messageHtml +=  generatorMessageElement(msg,senderId);
  }
  container.innerHTML = messageHtml;
}
