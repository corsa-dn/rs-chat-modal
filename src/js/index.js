const messageArea = document.querySelector('.modal--messages');
let sendMessageBtn = document.querySelector('#send-msg');

const scrollToBottom = function() {
    const scrollHeight = messageArea.scrollHeight;
    messageArea.scrollTop = scrollHeight + 5;
};

scrollToBottom();

const ta = document.querySelector('.modal--input-area textarea');

ta.addEventListener('keyup', (e) => {
    if (ta.scrollTop > 0) {
        ta.rows = 6;
        if (ta.scrollTop > 0) {
            ta.style.overflowY = 'scroll';
        }
    }
    if (ta.value.length == 0) {
        ta.rows = 4;
        ta.style.overflowY = 'hidden';
    }
})

sendMessageBtn.addEventListener('click', (e) => {

    let messageText = document.querySelector('.modal--input-area textarea').value,
        messageTimestamp = new Date().toLocaleString().split(',');
    // console.log(messageText);

    if (messageText.length > 0) {
        let newMessage = document.createElement('div');
        newMessage.classList.add('modal-message', 'message-sended', 'new-message');
        newMessage.innerHTML = `
        <img src="./img/avatar2.jpg" alt="">
            <div class="message-content">
                <p>
                    ${messageText}
                </p>
                <span>${messageTimestamp[1]}</span>
            </div>
        `;
        // console.log(newMessage);
        messageArea.appendChild(newMessage);
        document.querySelector('.modal--input-area textarea').value = '';
        ta.rows = 4;
        ta.style.overflowY = 'hidden';
        scrollToBottom();
    } else {
        return false;
    }
});
