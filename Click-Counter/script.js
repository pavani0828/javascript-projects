let counterValue = document.getElementById("counterValue")

let clickCount = localStorage.getItem("clickCount")

if (clickCount === null) {
    counterValue.textContent = 0;
} else {
    counterValue.textContent = clickCount;
}

function onIncrementCount() {
    let previousValue = counterValue.textContent;
    let updatedCounterValue = parseInt(previousValue) + 1;

    localStorage.setItem("clickCount", updatedCounterValue)
    counterValue.textContent = updatedCounterValue
}
