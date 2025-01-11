document.addEventListener("DOMContentLoaded", function() {
    const sumAmount = document.getElementById("sumAmount");

    function calculateSum() {
        const gridContainer = document.getElementById("grid-container");
        const cells = gridContainer.getElementsByClassName("grid-cell");
        let totalSum = 0;

        for (let cell of cells) {
            totalSum += cell.textContent - 0; //omvandlar textinnehåll till tal genom att subrathera med 0
        }

        sumAmount.textContent = totalSum;
    }

    const createGridButton = document.getElementById("create-grid");
    createGridButton.addEventListener("click", function() {
        calculateSum();
    });

    calculateSum();
});