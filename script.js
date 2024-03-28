const container = document.querySelector("#container");


for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.backgroundColor = "blue";
    div.style.height = "100px";
    div.style.width = "100px";
    container.appendChild(div); 
}

