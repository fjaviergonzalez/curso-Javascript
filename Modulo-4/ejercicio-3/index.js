const cuadrado = document.querySelector("div");
cuadrado.style.height = "100px";
cuadrado.style.width = "100px";
cuadrado.style.color = "white";
cuadrado.style.backgroundColor = "red";

const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];


document.body.onload = function() {
    // Un número entre 0 y 6
    let index = Math.floor(Math.random()*colors.length);
    cuadrado.style.backgroundColor = colors[index];
    switch (colors[index]) {
        case "red":
        case "green":
        case "blue":
            cuadrado.style.width = "100px";
            cuadrado.style.height = "100px";
            break;
        case "yellow":
        case "pink":
        case "purple":
            cuadrado.style.width = "200px";
            cuadrado.style.height = "200px";
            break;
        case "orange":
            cuadrado.style.width = "300px";
            cuadrado.style.height = "300px";
            break;
        default:
            break;
    }
}




