function showPokemon(pokemons){
    console.log("Los pokemon que tenemos son: ");
    pokemons.forEach(pokemon => {
            console.log(pokemon.nombre);   
    });
}

function showPokemonFuego(pokemons){
    console.log("Los pokemon que son de fuego son: ");
    pokemons.forEach(pokemon => {
        if(pokemon.tipo === "fuego"){
            console.log(pokemon.nombre);
        }     
    });
}

const pokemonFuego  =  (pokemons) => { return pokemons.filter(pokemon => pokemon.tipo === "fuego"); }


const arrayPokemon = [
    {
        nombre: "Charmander", 
        tipo: "fuego"
    }, 
                      
    {
        nombre: "Bulbasaur", 
        tipo: "planta"
    }, 
    {
        nombre: "Squirtle", 
        tipo: "agua"
    },
    {
        nombre: "Cyndaquil",
        tipo: "fuego"
    }
];

showPokemon(arrayPokemon);
showPokemonFuego(arrayPokemon);

console.log("Los pokemon de fuego son: ");
pokemonFuego(arrayPokemon).forEach(pokemon => {
    console.log(pokemon.nombre);
});

//console.log(pokemonFuego(arrayPokemon));


// for (let index = 0; index < arrayPokemon.length; index++) {
//     if(arrayPokemon[index].tipoDePokemon === "fuego"){
//         console.log(arrayPokemon[index].nombre);
//         console.log("¡Es un pokemon de fuego!");
//     }
    
// }

// arrayPokemon.forEach(pokemon => {
//     if(pokemon.tipoDePokemon === "fuego"){
//         console.log(pokemon.nombre);
//         console.log("¡Es un pokemon de fuego!");
//     }
        
// });


// for (const pokemon of arrayPokemon) {
//     if(pokemon.tipoDePokemon === "fuego"){
//         console.log(pokemon.nombre);
//         console.log("¡Es un pokemon de fuego!");
//     }
       
// }


// for (const pokemon in arrayPokemon) {
//     if (arrayPokemon[pokemon].tipoDePokemon === "fuego") {
//         console.log(arrayPokemon[pokemon].nombre);
//         console.log("¡Es un pokemon de fuego!");
//     }
// }

// //Solución con destructuring
// for (const { tipo } of arrayPokemon) {
//     tipo === "fuego" ? console.log("¡Es un pokemon de fuego!") : null;
// }