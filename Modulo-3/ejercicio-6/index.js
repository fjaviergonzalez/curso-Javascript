// Crea una función que reciba un array de strings y devuelva un array con las strings 
// ordenadas alfabéticamente de menor a mayor.
function ordenaStrings(arrayStrings){
    return arrayStrings.sort( function(a,b){
        if (a<b) return -1;
        if (a>b) return 1;
        return 0;
    });
}

function ordenaStrings2(arrayStrings){
    return arrayStrings.sort( (a,b) => a.localeCompare(b) );
}

const palabras = ["perro", "casa", "buitre", "taburete", "Ginés", "vasija", "puerta", "Andrés"];
console.log(ordenaStrings(palabras));
console.log(ordenaStrings2(palabras));


// Dado el siguiente array de numeros, crea una función que devuelva un array sin los números duplicados.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function eliminaDuplicados(arrayNums){
    return [...new Set(arrayNums)];
}

console.log(eliminaDuplicados(numbers));




// Dado el siguiente array de objetos, crea una función que devuelva un array sin los objetos duplicados.
function sinDuplicados(arrayObjetos){
    const stringUsers = arrayObjetos.map( (user) => JSON.stringify(user) ); 
    //console.log(stringUsers);
    const stringUsersUnicos = [...new Set(stringUsers)];
    //console.log(stringUsersUnicos);
    return stringUsersUnicos.map( (user) => JSON.parse(user) );
}


const users = [
    {
      name: 'Juan',
      age: 25,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'María',
      age: 30,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pedro',
      age: 20,
      city: 'Madrid',
      hobbies: ['fútbol', 'programar'],
    },
    {
      name: 'Laura',
      age: 35,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pablo',
      age: 27,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'Juan',
      age: 25,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'María',
      age: 30,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pedro',
      age: 20,
      city: 'Madrid',
      hobbies: ['fútbol', 'programar'],
    },
    {
      name: 'Laura',
      age: 35,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pablo',
      age: 35,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
  ];


console.log(sinDuplicados(users));