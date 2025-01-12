const fillCleared = document.getElementById("fillCleared");

gridContainer.addEventListener("mouseover", function(event) {
    if (event.target.className === "grid-cell") {
        event.target.style.backgroundColor = "lightblue";
    }
});

gridContainer.addEventListener("mouseout", function(event) {
    if (event.target.className === "grid-cell") {
        event.target.style.backgroundColor = "";
    }
});