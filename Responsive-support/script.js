let browserWindowSpan = document.getElementById("spanBrowserWindowWidth");
let whiteArea = document.getElementById("workingArea");
let whiteAreaSpan = document.getElementById("spanWhiteAreaWidth");
let chat = document.getElementById("chat");
let chatWidthSpan = document.getElementById("spanChatWidth");


window.addEventListener('resize', function() {
    let browserWindow = window.innerWidth;
    let widthwhiteArea = whiteArea.offsetWidth;
    let widthChat = chat.offsetWidth;
    browserWindowSpan.innerHTML = `Browser width: ${browserWindow}px`;
    whiteAreaSpan.innerHTML = `White area width: ${widthwhiteArea}px`;
    chatWidthSpan.innerHTML = `Chat area width: ${widthChat}px`;
  });

let browserWindow = window.innerWidth;
let widthwhiteArea = whiteArea.offsetWidth;
let widthChat = chat.offsetWidth;
browserWindowSpan.innerHTML = `Browser width: ${browserWindow}px`;
whiteAreaSpan.innerHTML = `White area width: ${widthwhiteArea}px`;
chatWidthSpan.innerHTML = `Chat area width: ${widthChat}px`;