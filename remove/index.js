const newRandomNumberButton = document.getElementById("newRandomNumber");
const randomNumberDisplay = document.getElementById("randomNumber");
const removeButton = document.getElementById("remove");
const removedNumberDisplay = document.getElementById("removedNumber");

let selectedNumber = null;

newRandomNumberButton.addEventListener("click", function () {
    removedNumberDisplay.textContent = "-";

    const randomNumber = Math.floor(Math.random() * 99) + 1;
    selectedNumber = randomNumber;
    randomNumberDisplay.textContent = randomNumber

    const cells = document.getElementsByClassName("grid-cell");
    for (let cell of cells) {
        if (Number(cell.textContent) === randomNumber) {
            cell.style.backgroundColor = "orange";
        } else if (cell.textContent !== "X") {
            cell.style.backgroundColor = "";
        }
    }
}); 

removeButton.addEventListener("click", function() {
    if(selectedNumber === null) {
        removedNumberDisplay.textContent = "No number selected";
        return;
    }

    const cells = document.getElementsByClassName("grid-cell");
    let count = 0;

    for (const cell of cells) {
        if (cell.textContent == selectedNumber) {
            cell.textContent = "X";
            cell.style.backgroundColor = "red";
            count++;
        }
    }

    if (count > 0) {
        removedNumberDisplay.textContent = selectedNumber + " removed " + count + " time" + (count > 1 ? "s" : "");
    } else {
        removedNumberDisplay.textContent = selectedNumber + " nothing removed";
    }

    selectedNumber = null;
    randomNumberDisplay.textContent = "-";
}) 