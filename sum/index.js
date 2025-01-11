document.addEventListener("DOMContentLoaded", function() {
    const sumAmount = document.getElementById("sumAmount");
    const gridContainer = document.getElementById("grid-container");

    let markedCells = [];

    function calculateSum() {
        const cells = gridContainer.getElementsByClassName("grid-cell");
        let totalSum = 0;

        for (let cell of cells) {
            totalSum += cell.textContent - 0; //omvandlar textinnehåll till tal genom att subrathera med 0
        }

        sumAmount.textContent = totalSum;
    }

    gridContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("grid-cell")) {
            const cell = event.target;

            if(cell.style.backgroundColor !== "green") {
                cell.style.backgroundColor = "green";

                markedCells.push(cell);
            }
        }
    });

    const createGridButton = document.getElementById("create-grid");
    createGridButton.addEventListener("click", function() {
        calculateSum();
    });

    calculateSum();
});