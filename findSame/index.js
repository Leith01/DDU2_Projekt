const showCopies = document.getElementById("showCopies");
const resetButton = document.getElementById("ResetButton");
let previouslyClickedValue = null;

gridContainer.addEventListener("click", function(event) {
    if (event.target && event.target.getAttribute("class") === "grid-cell") {

        if (previouslyClickedValue !== null) {
            const allCells = gridContainer.querySelectorAll(".grid-cell");
            for (let cell of allCells) {
                if (cell.textContent  === previouslyClickedValue) {
                    cell.style.backgroundColor = "";
                }
            }
        }

        const cellValue = event.target.textContent;

        const allCells = gridContainer.querySelectorAll(".grid-cell");
        let copyCount = 0;
        for (let cell of allCells) {
            if (cell.textContent === cellValue) {
                cell.style.backgroundColor = "lightgreen";
                copyCount++;
            }
        }

        showCopies.textContent = `${copyCount} ${copyCount === 1 ? "copy" : "copies"} of the number ${cellValue}`;
        previouslyClickedValue = cellValue;
    }
});

resetButton.addEventListener("click", function() {
    const allCells = gridContainer.querySelectorAll(".grid-cell");
    for (let cell of allCells) {
        cell.style.backgroundColor = "";
    }

    showCopies.textContent = "Click on a number to find copies";
    previouslyClickedValue = null;
});