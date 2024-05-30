import { sendMessage } from './sendMessage.js';

const textarea = document.getElementById('input');
const chatBox = document.querySelector('.chat-box');
const sendButton = document.getElementById("kirim");


function addMessage(message, className, imageUrl) {
    const li = document.createElement('li');
    const backgroundBot = document.querySelector('.background-bot')
    li.classList.add('chat', className);

    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.classList.add('avatar');
        li.appendChild(img);
    }

    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    li.appendChild(messageElement);

    
    chatBox.appendChild(li);
    chatBox.scrollTop = chatBox.scrollHeight;
}


sendButton.addEventListener('click', () => {
    if (textarea.value === '') {
        alert('Anda belum Menginputkan sesuatu')
    } else {
        sendMessage()
    }
})

textarea.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});

textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px'; 
});

document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.querySelector('.chat-container');
    const chatPopUp = document.querySelector('.chat-pop-up');
    const closeButton = document.querySelector('.close-chat');
    const clearButton = document.querySelector('.clear-chat');

    chatPopUp.addEventListener('click', function() {
        chatContainer.style.display = 'block'; 
        chatPopUp.style.display = 'none'; 
    });
    
    closeButton.addEventListener('click', function() {
        chatContainer.style.display = 'none'; 
        chatPopUp.style.display = 'block'; 
    });

    clearButton.addEventListener('click', function() {
        chatBox.innerHTML = '';
    }) 
});



export { textarea, chatBox , addMessage};





// const textarea = document.getElementById('input');
// const chatBox = document.querySelector('.chat-box');
// const sendButton = document.getElementById("kirim");
// const clearButton = document.getElementById("hapus");

// const imageUrlGuest = '../asset/img/guestchat.svg';
// const imageUrlBot = '../asset/img/herochat.svg';


// function sendMessage() {
//     const userMessage = textarea.value.trim();
//     if (userMessage !== '') {
//         addMessage(userMessage, 'user-chat' , imageUrlGuest);


//         // Mengirim permintaan ke backend yang berjalan di server
//         fetch('http://localhost:5000/ask', { 
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ message: userMessage })
//         })
//             .then(response => response.json())
//             .then(data => {
//                 const botMessage = data.response;
//                 addMessage(botMessage, 'bot-respond' , imageUrlBot);
//             })
//             .catch(error => console.error('Error:', error));

//         textarea.value = '';
//     }
// }

// // Fungsi untuk menambahkan pesan ke chat box
// function addMessage(message, className, imageUrl) {
//     const li = document.createElement('li');
//     li.classList.add('chat', className);

//     // Menambahkan gambar profil
//     if (imageUrl) {
//         const img = document.createElement('img');
//         img.src = imageUrl;
//         img.classList.add('avatar');
//         li.appendChild(img);
//     }

//     const messageElement = document.createElement('p');
//     messageElement.textContent = message;
//     li.appendChild(messageElement);

//     chatBox.appendChild(li);
//     chatBox.scrollTop = chatBox.scrollHeight;
// }


// clearButton.addEventListener('click', () => {
//     chatBox.innerHTML = '';
// });

// sendButton.addEventListener('click', () => {
//     if (textarea.value === '') {
//         alert('Anda belum Menginputkan sesuatu')
//     } else {
//         sendMessage()
//     }
// })

// textarea.addEventListener('input', function () {
//     this.style.height = 'auto';
//     this.style.height = (this.scrollHeight) + 'px';
// });

// textarea.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         sendMessage();
//     }
// });
