let timerEl = document.getElementById('timer')
let quoteDisplayEl = document.getElementById('quoteDisplay')
let quoteInputEl = document.getElementById('quoteInput')
let resultEl = document.getElementById('result')
let submitBtnEl = document.getElementById('submitBtn')
let resetBtnEl = document.getElementById('resetBtn')
let spinnerEl = document.getElementById('spinner')

let count = 0
let time = null

function displayQuote(content) {
    count = 0
    spinnerEl.classList.add("d-none")
    quoteDisplayEl.textContent = content
    time = setInterval(function() {
        count = count + 1
        timerEl.textContent = count
    }, 1000)
}

let options = {
    method: "GET"
}
let url = "https://apis.ccbp.in/random-quote"
fetch(url, options)
    .then(function(response) {
        return response.json()
    })
    .then(function(jsonData) {
        let {
            content
        } = jsonData
        displayQuote(content)
    })

submitBtnEl.addEventListener("click", function() {
    if (quoteDisplayEl.textContent === quoteInputEl.value) {
        resultEl.textContent = "You typed in " + count + " seconds"
        clearInterval(time)
    } else {
        resultEl.textContent = "You typed incorrect sentence"
    }
})

resetBtnEl.addEventListener("click", function() {
    spinnerEl.classList.remove("d-none")
    clearInterval(time)
    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/random-quote"
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let {
                content
            } = jsonData
            displayQuote(content)
        })

})
