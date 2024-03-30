const container = document.querySelector("#container");
//variable that stores the number of squares per side
let n = prompt("enter a number for squares per side");
//variable for the width and height(container is 960x960)
let size = 960/n;
for (let i = 0; i < n*n; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = size + "px";
    div.style.height = size + "px";
    container.appendChild(div); 
}

