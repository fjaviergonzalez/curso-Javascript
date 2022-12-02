function esPalindromo(palabra){
    const sinEspacios = palabra.toLowerCase().split(" ").join("");
    const palabraInvertida = sinEspacios.split("").reverse().join("");
    return sinEspacios === palabraInvertida;
}

function sonPalindromos(palabras){
    console.log("Las palabras/frases que son palíndromos son: ");
    palabras.forEach(palabra => {
        if(esPalindromo(palabra))
            console.log(palabra); 
    });
}


function sonPalindromosConMap(palabras){
    console.log("Si usamos map(), son palíndromos: ");
    palabras.map((palabra) => { if (esPalindromo(palabra)) console.log(palabra);});
}

console.log(esPalindromo("dabale arroz a la zorra el abad"));
console.log(esPalindromo("como poco coco como poco coco compro"));
console.log(esPalindromo("arra"));

const arrayPalabras = ["arra", "idea", "erre", "Ojo", "casa", "arroz y zorra", "Son robos o sobornos"]; 
sonPalindromos(arrayPalabras);
sonPalindromosConMap(arrayPalabras);
