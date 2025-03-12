let fromUserInputEl = document.getElementById('fromUserInput')
let toUserInputEl = document.getElementById('toUserInput')
let counterTextEl = document.getElementById('counterText')
let startBtnEl = document.getElementById('startBtn')

startBtnEl.onclick = function() {
    let counter = parseInt(fromUserInputEl.value)
    counterTextEl.textContent = counter
    if (fromUserInputEl.value !== "" && toUserInputEl.value !== "" && parseInt(fromUserInputEl.value) < parseInt(toUserInputEl.value)) {
        let intervalId = setInterval(function textInput() {
            counter = counter + 1
            counterTextEl.textContent = counter

            if (parseInt(toUserInputEl.value) === counter) {
                clearInterval(intervalId)
            }
        }, 1000)

    } else {
        alert("enter a number")
        return
    }

}
