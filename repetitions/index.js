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

createGridButton.addEventListener("click", function () {
    updateRepeatedNumbers();
})