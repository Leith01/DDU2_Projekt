const addUpToNumInput = document.getElementById("addUpToNum"); 
const findTwoCellsButton = document.getElementById("findTwoCells"); 

function getCellValues(allCells) {
    const cellValues = [];
    for (let cell of allCells) {
        let cellValue = cell.textContent;
        cellValues.push(+cellValue); 
    }
    return cellValues;
}

function highlightCells(allCells, i, j) {
    for (let cell of allCells) {
        cell.style.backgroundColor = "";
    }
    allCells[i].style.backgroundColor = "lightgreen";
    allCells[j].style.backgroundColor = "lightgreen";
}

function findCellsWithSum(cellValues, targetNumber, allCells) {
    for (let i = 0; i < cellValues.length; i++) {
        for (let j = i + 1; j < cellValues.length; j++) {
            if (cellValues[i] + cellValues[j] == targetNumber) {
                highlightCells(allCells, i, j);
                return true;
            }
        }
    }
    return false;
}

findTwoCellsButton.addEventListener("click", () => {
    const targetNumber = addUpToNumInput.value; 

    const allCells = gridContainer.querySelectorAll(".grid-cell");
    const cellValues = getCellValues(allCells);

    if (!findCellsWithSum(cellValues, targetNumber, allCells)) {
        alert("No two cells add up to the given number");
    }
});


