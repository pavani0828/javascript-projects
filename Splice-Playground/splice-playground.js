let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInput = document.getElementById('startIndexInput')
let deleteCountInput = document.getElementById('deleteCountInput')
let itemToAddInput = document.getElementById('itemToAddInput')

let spliceBtn = document.getElementById('spliceBtn')
let updatedArray = document.getElementById('updatedArray')

spliceBtn.onclick = function() {
    let start = (startIndexInput.value)
    console.log(start)
    let deleteCount = parseInt(deleteCountInput.value)
    let itemToAdd = itemToAddInput.value
    if (start === "") {
        alert("enter start index")
    } else {
        arr.splice(parseInt(start), deleteCount, itemToAdd)
        updatedArray.textContent = JSON.stringify(arr)
    }
}
