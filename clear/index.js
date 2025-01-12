const fillCleared = document.getElementById("fillCleared");

gridContainer.addEventListener("mouseover", function(event) {
    if (event.target.className === "grid-cell"  && event.target.style.backgroundColor !== "red") {
        event.target.style.backgroundColor = "lightblue";
    } else if (event.target.style.backgroundColor === "red") {
        event.target.style.backgroundColor = "orange";
    }
});

gridContainer.addEventListener("mouseout", function(event) {
    if (event.target.className === "grid-cell") {
        if (event.target.style.backgroundColor === "lightblue") {
            event.target.style.backgroundColor = ""; 
        } else if (event.target.style.backgroundColor === "orange") {
            event.target.style.backgroundColor = "red";
        }
    }
});

gridContainer.addEventListener("click", function(event) {
    const clickedCell = event.target;

    if (clickedCell.className === "grid-cell") {
        console.log("cell clicked");

        if (clickedCell.className === "grid-cell") {
            if (clickedCell.style.backgroundColor === "orange") {
                clickedCell.style.backgroundColor = "";
                clickedCell.textContent = getRandomNumber();
            } else {
                clickedCell.style.backgroundColor = "red";
                clickedCell.textContent = "";
            }
        }
    }
});

fillCleared.addEventListener("click", function() {
    const gridCells = document.querySelectorAll(".grid-cell");

    for (const cell of gridCells) {
        if (cell.style.backgroundColor === "red") {
            cell.style.backgroundColor = ""; 
            cell.textContent = getRandomNumber(); 
        }
    }
});
