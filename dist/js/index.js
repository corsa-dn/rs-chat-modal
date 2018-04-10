"use strict";

var messageArea = document.querySelector('.modal--messages');
var sendMessageBtn = document.querySelector('#send-msg');

var scrollToBottom = function scrollToBottom() {
  var scrollHeight = messageArea.scrollHeight;
  messageArea.scrollTop = scrollHeight + 5;
};

scrollToBottom();
var ta = document.querySelector('.modal--input-area textarea');
ta.addEventListener('keyup', function (e) {
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
});
sendMessageBtn.addEventListener('click', function (e) {
  var messageText = document.querySelector('.modal--input-area textarea').value,
      messageTimestamp = new Date().toLocaleString().split(' ');

  if (messageText.length > 0) {
    var newMessage = document.createElement('div');
    newMessage.classList.add('modal-message', 'message-sent', 'new-message');
    newMessage.innerHTML = "\n        <img src=\"./img/avatar2.jpg\" alt=\"\">\n            <div class=\"message-content\">\n                <p>\n                    ".concat(messageText, "\n                </p>\n                <span>").concat(messageTimestamp[1], "</span>\n            </div>\n        ");
    messageArea.appendChild(newMessage);
    document.querySelector('.modal--input-area textarea').value = '';
    ta.rows = 4;
    ta.style.overflowY = 'hidden';
    scrollToBottom();
  } else {
    return false;
  }
});