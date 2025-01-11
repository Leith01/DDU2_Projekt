document.addEventListener("DOMContentLoaded", function() {
    const sumAmount = document.getElementById("sumAmount");
    const gridContainer = document.getElementById("grid-container");
    const markedAmount = document.getElementById("markedAmount");
    const resetButton = document.getElementById("resetButton");

    let markedCells = [];

    function calculateSum() {
        const cells = gridContainer.getElementsByClassName("grid-cell");
        let totalSum = 0;

        for (let cell of cells) {
            totalSum += cell.textContent - 0; //omvandlar textinnehåll till tal genom att subrathera med 0
        }

        sumAmount.textContent = totalSum;
    }

    function calculateMarkedSum() {
        let markedSum = 0;

        for (let cell of markedCells) {
            markedSum += cell.textContent - 0;
        }

        markedAmount.textContent = markedSum;
    }

    function resetMarkedCells() {
        for (let cell of markedCells) {
            cell.style.backgroundColor = "";
        }

        markedCells = [];
        markedAmount.textContent = "-";
    }

    gridContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("grid-cell")) {
            const cell = event.target;

            if(cell.style.backgroundColor !== "green") {
                cell.style.backgroundColor = "green";

                markedCells.push(cell);
            }

            calculateMarkedSum();
        }
    });

    resetButton.addEventListener("click", function() {
        resetMarkedCells();
    });

    const createGridButton = document.getElementById("create-grid");
    createGridButton.addEventListener("click", function() {
        resetMarkedCells();
        calculateSum();
    });

    calculateSum();
});