const repeatedAmount = document.getElementById("repeatedAmount");
const numbersNotInPlace = document.getElementById("numbers");

function getMostRepeatedNumbers(cells) {
    const count = {};

    for (let cell of cells) {
        const number = cell.textContent;
        if(number) {
            count[number] = (count[number] || 0) + 1;
        }
    }

    let maxCount = 0;
    for (const num in count) {
        if (count[num] > maxCount) {
            maxCount = count[num];
        }
    }

    const mostRepeated = [];
    for (const num in count) {
        if (count[num] === maxCount) {
            mostRepeated.push(num)
        }
    }

    return {mostRepeated, maxCount};
}

function updateRepeatedNumbers() {
    const cells = document.querySelectorAll(".grid-cell");
    const {mostRepeated, maxCount} = getMostRepeatedNumbers(cells)

    if (mostRepeated.length > 0) {
        let repeatedText = "";
        let first = true;

        for (let repeated of mostRepeated) {
            if (!first) {
                repeatedText += ", ";
            }
            repeatedText += repeated;
            first = false;
        }
        repeatedText += ` (Repeated ${maxCount} times)`;
        repeatedAmount.textContent = repeatedText;
    } else {
        repeatedAmount.textContent = "-";
    }
}

function highlightMostRepeatedNumbers() {
    const cells = document.querySelectorAll(".grid-cell");
    const {mostRepeated} = getMostRepeatedNumbers(cells);

    for (let cell of cells) {
        cell.style.backgroundColor = "";
    }

    for (let cell of cells) {
        for (let repeated of mostRepeated) {
            if (cell.textContent === repeated) {
                cell.style.backgroundColor = "turquoise";
                break;
            }
        }
    }
}

function updateMissinNumbers() {
    const cells = document.querySelectorAll(".grid-cell");
    const allNumbers = [];
    for (let i = 1; i <= 99; i++) {
        allNumbers.push(i);
    }

    const numbersInGrid = [];
    for (let cell of cells) {
        const number = cell.textContent;
        if (number) {
            let exists = false;
            for (let num of numbersInGrid) {
                if (num === number) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                numbersInGrid.push(number);
            }
        }
    }

    const missingNumbers = [];
    for (let num of allNumbers) {
        const currentNumber = "" + num;
        let found = false;

        for (let gridNum of numbersInGrid) {
            if (gridNum === currentNumber) {
                found = true;
                break;
            }
        }
        if (!found) {
            missingNumbers.push(currentNumber);
        }
    }
    
    if (missingNumbers.length > 0) {
        let missingText = "";
        let first  = true;

        for (let missingNum of missingNumbers) {
            if (!first) {
                missingText += ", ";
            }
            missingText += missingNum;
            first = false;
        }

        numbersNotInPlace.textContent = missingText;
    } else {
        numbersNotInPlace.textContent = "-";
    }
}


createGridButton.addEventListener("click", function () {
    updateRepeatedNumbers();
    updateMissinNumbers();
    highlightMostRepeatedNumbers();
});