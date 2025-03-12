let hoursInputEl = document.getElementById('hoursInput')
let minutesInputEl = document.getElementById('minutesInput')
let convertBtnEl = document.getElementById('convertBtn')
let timeInSecondsEl = document.getElementById("timeInSeconds")
let errorMsgEl = document.getElementById('errorMsg')

function timeConverter() {
    let hours = hoursInputEl.value
    let minutes = minutesInputEl.value
    if (hours === "") {
        timeInSecondsEl.textContent = ""
        errorMsgEl.textContent = "please enter a valid hours"
    } else if (minutes === "") {
        timeInSecondsEl.textContent = ""
        errorMsgEl.textContent = "please enter a valid minutes"
    } else {
        let seconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60)
        errorMsgEl.textContent = ""
        timeInSecondsEl.textContent = seconds + "s"
        timeInSecondsEl.classList.add("seconds")
        hoursInputEl.value = ""
        minutesInputEl.value = ""
    }
}

convertBtnEl.addEventListener("click", timeConverter)
