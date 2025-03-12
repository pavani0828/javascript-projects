let jokeTextEl = document.getElementById('jokeText')
let jokeBtnEl = document.getElementById('jokeBtn')
let spinnerEl = document.getElementById('spinner')

function getRequestMethod() {
    spinnerEl.classList.toggle("d-none")
    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/jokes/random"
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            console.log(jsonData)
            spinnerEl.classList.toggle("d-none")
            jokeTextEl.textContent = JSON.stringify(jsonData.value)
        })
}

jokeBtnEl.addEventListener("click", getRequestMethod)
