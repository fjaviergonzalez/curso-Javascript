let arrayPokemon = ["Charmander", "Squirtle", "Bulbasaur"];
console.log("Los Pokémon iniciales que tienes son: " + arrayPokemon[0] + ", " + arrayPokemon[1] + ", " + arrayPokemon[2]);

console.log(arrayPokemon[0], arrayPokemon[1], arrayPokemon[2]);

//una opcion con 'join'
console.log(arrayPokemon.join(' '));

//Una opción con bucle for
for(let i = 0; i < arrayPokemon.length; i++){
    console.log(arrayPokemon[i]);
}

//Una opción con forEach
arrayPokemon.forEach((pokemon) => {
    console.log(pokemon);
});

for (let pokemon of arrayPokemon){
    console.log(pokemon);
}

for (let pokemon in arrayPokemon){
    console.log(arrayPokemon[pokemon]);
}
