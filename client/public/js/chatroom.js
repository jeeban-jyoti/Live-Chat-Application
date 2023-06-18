
const socket = io("http://localhost:8000")

const form = document.getElementById('sendMessage')
const msgbox = document.getElementById('msgbox')
const msgtext = document.getElementById('send-message')
var room = document.getElementById('roomCode')

const username = prompt('enter username:')

var connectionData = {
    name: username,
    room: room.innerHTML
}

socket.emit('new-user-joined', connectionData)

form.addEventListener("submit", (e) => {
    e.preventDefault()

    data = {
        name: username,
        message: msgtext.value,
        room: room.innerHTML
    }

    socket.emit('send', data)
    msgtext.value = ''

})

socket.on('user-joined-prompt', (name)=>{
    let msg = document.createElement('div')
    msg.classList.add('blocks')
    msg.textContent = name + ' joined the chat'
    msgbox.appendChild(msg)
})

socket.on('message-prompt', (data)=>{
    let user = data.name
    let message = data.message
    let msg = document.createElement('div')
    msg.classList.add('blocks')
    if(user == username){
        msg.innerHTML= '<b style="color: #a0cda1">' + user + ':</b> ' + message        
    }
    else{
        msg.innerHTML= '<b style="color:black">' + user + ':</b> ' + message
    }
    msgbox.appendChild(msg)
})