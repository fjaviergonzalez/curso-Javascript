function empiezaPorA(palabras){
     return palabras.filter( palabra => { return palabra.startsWith('a') || palabra.startsWith('A') });
 }

const arrayPalabras = ["Francisco", "Javier", "animal", "corazon", "tren", "Arturo", "Asturias", "estufa", "aureo"];
console.log(empiezaPorA(arrayPalabras));

// console.log(arrayPalabras[0].startsWith('a')); //false
// console.log(arrayPalabras[5].startsWith('A')); //true
// console.log(arrayPalabras[5].startsWith('a')); //false

