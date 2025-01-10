const newRandomNumberButton = document.getElementById("newRandomNumber");
const randomNumberDisplay = document.getElementById("randomNumber");
const removeButton = document.getElementById("remove");
const removedNumberDisplay = document.getElementById("removedNumber");

let selectedNumber = null;

newRandomNumberButton.addEventListener("click", function () {
    const cells = document.getElementsByClassName("grid-cell");
    const availableCells = [];

    for (let cell of cells) {
        if (cell.textContent !== "X") {
            availableCells.push(cell);
        }
    }

    if (availableCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        selectedNumber = availableCells[randomIndex].textContent;
        randomNumberDisplay.textContent = selectedNumber;
    }
}); 

removeButton.addEventListener("click", function() {
    const cells = document.getElementsByClassName("grid-cell");
    let found = false;

    for (let cell of cells) {
        if (cell.textContent === selectedNumber) {
            cell.textContent = "X";
            removedNumberDisplay.textContent = selectedNumber;
            found = true;
            break;
        }
    }

    selectedNumber = null;
    randomNumberDisplay.textContent = "-";
}) 