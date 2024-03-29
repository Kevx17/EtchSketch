const container = document.querySelector("#container");


for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.backgroundColor = "blue";
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.border = "5px solid black";
    container.appendChild(div); 
}

