let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainer = document.getElementById('chatContainer')
let userInput = document.getElementById('userInput')
let sendMsgBtn = document.getElementById('sendMsgBtn')

function msgFromChatbot() {
    let listLength = chatbotMsgList.length
    let index = Math.ceil((Math.random() * listLength) - 1)
    let chatbotMsg = chatbotMsgList[index]

    let botChatContainer = document.createElement("div")
    botChatContainer.classList.add("msg-from-chatbot-container")
    chatContainer.appendChild(botChatContainer)

    let message = document.createElement("span")
    message.textContent = chatbotMsg
    message.classList.add("msg-from-chatbot")
    botChatContainer.appendChild(message)

}

sendMsgBtn.onclick = function() {
    let msg = userInput.value
    let userChatContainer = document.createElement("div")
    userChatContainer.classList.add("msg-to-chatbot-container")
    chatContainer.appendChild(userChatContainer)

    let message = document.createElement("span")
    message.textContent = msg
    message.classList.add("msg-to-chatbot")
    userChatContainer.appendChild(message)

    userInput.value = ""
    msgFromChatbot()
}
