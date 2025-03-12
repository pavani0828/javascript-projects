let twentySecondsBtnEl = document.getElementById('twentySecondsBtn')
let thirtySecondsBtnEl = document.getElementById('thirtySecondsBtn')
let fortySecondsBtnEl = document.getElementById('fortySecondsBtn')
let oneMinuteBtnEl = document.getElementById('oneMinuteBtn')
let timerTextEl = document.getElementById('timerText')

let intervalIdToClear = null

twentySecondsBtnEl.onclick = function() {
    clearInterval(intervalIdToClear)
    let count = 20
    timerTextEl.textContent = 20 + " seconds left"

    let intervalId1 = setInterval(function timeDisplayer() {
        count = count - 1
        timerTextEl.textContent = count + " seconds left"

        if (count === 0) {
            timerTextEl.textContent = "Your moment is complete"
            clearInterval(intervalId1)
        }
    }, 1000)
    intervalIdToClear = intervalId1
}

thirtySecondsBtnEl.onclick = function() {
    clearInterval(intervalIdToClear)
    let count = 30
    timerTextEl.textContent = 30 + " seconds left"

    let intervalId2 = setInterval(function timeDisplayer() {
        count = count - 1
        timerTextEl.textContent = count + " seconds left"

        if (count === 0) {
            timerTextEl.textContent = "Your moment is complete"
            clearInterval(intervalId2)
        }
    }, 1000)
    intervalIdToClear = intervalId2
}

fortySecondsBtnEl.onclick = function() {
    clearInterval(intervalIdToClear)
    let count = 40
    timerTextEl.textContent = 40 + " seconds left"

    let intervalId3 = setInterval(function timeDisplayer() {
        count = count - 1
        timerTextEl.textContent = count + " seconds left"

        if (count === 0) {
            timerTextEl.textContent = "Your moment is complete"
            clearInterval(intervalId3)
        }
    }, 1000)
    intervalIdToClear = intervalId3
}

oneMinuteBtnEl.onclick = function() {
    clearInterval(intervalIdToClear)
    let count = 60
    timerTextEl.textContent = 60 + " seconds left"

    let intervalId4 = setInterval(function timeDisplayer() {
        count = count - 1
        timerTextEl.textContent = count + " seconds left"

        if (count === 0) {
            timerTextEl.textContent = "Your moment is complete"
            clearInterval(intervalId4)
        }
    }, 1000)
    intervalIdToClear = intervalId4
}
