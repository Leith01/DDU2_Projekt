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
    if (event.target.className === "grid-cell") {
        event.target.style.backgroundColor = "red";
        event.target.textContent = "";
    }
});