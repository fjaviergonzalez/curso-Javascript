const parrafos = document.querySelectorAll('p');
parrafos.forEach(parrafo => {
    console.log(parrafo.textContent);
});

let claseParrafo = document.getElementsByClassName("parrafo");
console.log(claseParrafo);

for (let i = 0; i < claseParrafo.length; i++){
    claseParrafo[i].textContent = "Hola Mundo!";
    console.log(claseParrafo[i].textContent);
}


// CUIDADO: cssText sobreescribe el resto de estilos ya definidos previamente
for (let i = 0; i < claseParrafo.length; i++){
    claseParrafo[i].style.cssText = "background-color: red;";
}

for (let i = 0; i < claseParrafo.length; i++){
    const span =  document.createElement("span");
    span.textContent = "Infiltrado";
    claseParrafo[i].appendChild(span);
}