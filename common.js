const gridContainer = document.getElementById("grid-container");
const createGridButton = document.getElementById("create-grid");
const cellCountInput = document.getElementById("cell-count");
const header = document.querySelector("header");

function fillGrid(gridElement, numberOfCells) {
    gridElement.innerHTML = "";
    for (let i = 0; i < numberOfCells; i++) {
        const cell = document.createElement("div");
        cell.textContent = getRandomNumber();
        cell.classList.add("grid-cell");
        gridElement.appendChild(cell);
    }
}

function getGridCells(gridElement) {
    return gridElement.querySelector(".grid-cell");
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function createHomeLink(parentElement) {
    const homeLink = document.createElement("a");
    homeLink.id = "home-link";
    homeLink.href = "index.html";
    homeLink.textContent = "Home";
    parentElement.appendChild(homeLink);
}

createGridButton.addEventListener("click", function() {
    const cellCount = cellCountInput.value;

    if (cellCount !== "" && cellCount > 0 && Number(cellCount) == cellCount) {
        fillGrid(gridContainer, Number(cellCount));
    } else {
        alert("Please enter a valid number!");
    }
});

if (!document.getElementById("home-link")) {
    createHomeLink(header);
}