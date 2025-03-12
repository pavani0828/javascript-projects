let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById('wordsContainer')
let errorMsgEl = document.getElementById('errorMsg')
let userInputEl = document.getElementById('userInput')
let addBtnEl = document.getElementById('addBtn')

function addInputMsg() {

}

addBtnEl.onclick = function() {
    let message = userInputEl.value
    let size = Math.ceil(Math.random() * 100)
    console.log(message)
    if (message === "") {
        errorMsgEl.textContent = "Please enter a word!"
    } else {
        let msgEl = document.createElement("span")
        msgEl.style.fontSize = size + "px"
        msgEl.textContent = message
        wordsContainerEl.appendChild(msgEl)
        userInputEl.value = ""
        errorMsgEl.textContent = ""
    }
}
