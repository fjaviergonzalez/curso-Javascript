const arrayPokemon = [
    {
        nombre: "Charmander", 
        tipoDePokemon: "fuego"
    }, 
                      
    {
        nombre: "Bulbasaur", 
        tipoDePokemon: "planta"
    }, 
    {
        nombre: "Squirtle", 
        tipoDePokemon: "agua"
    }
];


for (let index = 0; index < arrayPokemon.length; index++) {
    if(arrayPokemon[index].tipoDePokemon === "fuego"){
        console.log(arrayPokemon[index].nombre);
        console.log("¡Es un pokemon de fuego!");
    }
    
}

arrayPokemon.forEach(pokemon => {
    if(pokemon.tipoDePokemon === "fuego"){
        console.log(pokemon.nombre);
        console.log("¡Es un pokemon de fuego!");
    }
        
});


for (const pokemon of arrayPokemon) {
    if(pokemon.tipoDePokemon === "fuego"){
        console.log(pokemon.nombre);
        console.log("¡Es un pokemon de fuego!");
    }
       
}


for (const pokemon in arrayPokemon) {
    if (arrayPokemon[pokemon].tipoDePokemon === "fuego") {
        console.log(arrayPokemon[pokemon].nombre);
        console.log("¡Es un pokemon de fuego!");
    }
}

//Solución con destructuring
for (const { tipo } of arrayPokemon) {
    tipo === "fuego" ? console.log("¡Es un pokemon de fuego!") : null;
}