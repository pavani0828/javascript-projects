let subContainer = document.getElementById('subContainer')
let columnOne = document.createElement("div")
columnOne.classList.add("col-12")
subContainer.appendChild(columnOne)

let titleHeading = document.createElement("p")
titleHeading.textContent = "MOVIE TITLE"
columnOne.appendChild(titleHeading)

let title = document.createElement("input")
title.type = "text"
title.placeholder = "Enter a movie title"
title.id = "titleInput"
columnOne.appendChild(title)

let columnTwo = document.createElement("div")
columnTwo.classList.add("col-12")
subContainer.appendChild(columnTwo)

let reviewHeading = document.createElement("p")
reviewHeading.textContent = "YOUR REVIEW"
columnTwo.appendChild(reviewHeading)

let review = document.createElement("textarea")
review.id = "reviewTextarea"
review.placeholder = "Enter review"
review.setAttribute("rows", "5")
review.setAttribute("cols", "23")
columnTwo.appendChild(review)

let columnThree = document.createElement("div")
columnThree.classList.add("col-12")
subContainer.appendChild(columnThree)

let buttonContainer = document.createElement("div")
buttonContainer.classList.add("text-center")
columnThree.appendChild(buttonContainer)

let button = document.createElement("button")
button.textContent = "Add"
button.classList.add("btn", "btn-primary")
button.id = "addBtn"
buttonContainer.appendChild(button)

let columnFour = document.createElement("div")
columnFour.classList.add("col-12")
subContainer.appendChild(columnFour)

let reviewsContainer = document.createElement("div")
reviewsContainer.id = "reviewsContainer"
columnFour.appendChild(reviewsContainer)

button.onclick = function() {
    let titleText = document.createElement("p")
    titleText.textContent = "Movie Title: " + title.value
    let reviewText = document.createElement("p")
    reviewText.textContent = "Review: " + review.value
    if ((title.value) === "") {
        alert("enter input")
    } else if (review.value === "") {
        alert("enter input")
    } else {
        reviewsContainer.appendChild(titleText)
        reviewsContainer.appendChild(reviewText)
        title.value = ""
        review.value = ""
    }
}
