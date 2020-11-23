const socket = io()
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

console.log(messageContainer)

const name = prompt('What is your name?')

appendMessage('You Joined')
socket.emit('new-user', name)

socket.on('user-connect', name =>{
    appendMessage(`${name} has connected.`)
})

socket.on('chat-message', data => {
    console.log(data)
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    console.log(messageElement)
    messageContainer.append(messageElement)
  }