let formEl = document.getElementById('bookmarkForm')
let siteNameEl = document.getElementById('siteNameInput')
let siteUrlEl = document.getElementById('siteUrlInput')
let submitBtnEl = document.getElementById('submitBtn')
let siteNameErrMsgEl = document.getElementById('siteNameErrMsg')
let siteUrlErrMsgEl = document.getElementById('siteUrlErrMsg')
let bookMarksListEl = document.getElementById('bookmarksList')

siteNameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*"
    } else {
        siteNameErrMsgEl.textContent = ""
    }
})

siteUrlEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*"
    } else {
        siteUrlErrMsgEl.textContent = ""
    }
})

function validation(name, url) {
    if (name === "") {
        siteNameErrMsgEl.textContent = "Required*"
    }
    if (url === "") {
        siteUrlErrMsgEl.textContent = "Required*"
    }
}

function createAndAppendBookmark(name, url) {
    let list = document.createElement("li")
    list.style.listStyleType = "none"

    let nameEl = document.createElement("p")
    nameEl.textContent = name
    nameEl.classList.add("site-name")
    list.appendChild(nameEl)

    let urlEl = document.createElement("a")
    urlEl.href = url
    urlEl.textContent = url
    urlEl.target = "_blanck"
    list.appendChild(urlEl)

    bookMarksListEl.appendChild(list)
}

formEl.addEventListener("submit", function(event) {
    event.preventDefault()
    let siteName = siteNameEl.value
    let siteUrl = siteUrlEl.value
    validation(siteName, siteUrl)
    if (siteName !== "" && siteUrl !== "") {
        createAndAppendBookmark(siteName, siteUrl)
        siteNameEl.value = ""
        siteUrlEl.value = ""
    }
})
