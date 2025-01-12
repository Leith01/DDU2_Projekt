gridContainer.addEventListener("click", function(event) {
    if (event.target && event.target.getAttribute("class") === "grid-cell") {
        const cellValue = event.target.textContent;

        const allCells = gridContainer.querySelectorAll(".grid-cell");
        for (let cell of allCells) {
            if (cell.textContent === cellValue) {
                cell.style.backgroundColor = "lightgreen";
            }
        }
    }
});