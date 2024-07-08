import { addMessage, chatBox, textarea } from './index.js';

function replacePlaceholderWithBr(text) {
    return text.replace(/br/g, '<br/>');
}


function sendMessage() {
    const imageUrlGuest = '../asset/img/guestchat.svg';
    const imageUrlBot = '../asset/img/herochat.svg';

    const userMessage = textarea.value.trim();
    if (userMessage !== '') {
        addMessage(userMessage, 'user-chat', imageUrlGuest);

        fetch('https://95ad-223-255-229-75.ngrok-free.app/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        })
            .then(response => response.json())
            .then( data => {
                let botMessage = data.response;
                botMessage = replacePlaceholderWithBr(botMessage);
                addMessage(botMessage, 'bot-respond', imageUrlBot);
            })
            .catch(error => console.error('Error:', error));

        textarea.value = '';
    }
}
export { sendMessage };