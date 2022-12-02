function sonDeMadrid(arrayPersonas){
    return arrayPersonas.filter( (persona) => persona.city === "Madrid");
}

function mayorDe25(arrayPersonas){
    return arrayPersonas.filter( (persona) => persona.age > 25);
}

function deMadridYMayorDe25(arrayPersonas){
    return arrayPersonas.filter( (persona) => persona.city === "Madrid" && persona.age > 25);
}

function likesProgramming(arrayPersonas){
    return arrayPersonas.find( (persona) => persona.hobbies.includes("programar") );
}

function sumaEdades(arrayPersonas){
    return arrayPersonas.reduce( (suma, persona) => {
        return suma + persona.age;
    }, 0 );
}

//Crea un nuevo array solo con la ciudad de cada persona y su primer hobby
function ciudadesYHobbies(arrayPersonas){
    return arrayPersonas.map( (persona)=> ({city: persona.city, hobbies: persona.hobbies[0]})) ;
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
  ];


console.log(sonDeMadrid(users));
console.log(mayorDe25(users));
//console.table(sonDeMadrid(users));
console.log(deMadridYMayorDe25(users));
console.log(likesProgramming(users));
console.log(sumaEdades(users));
console.log(ciudadesYHobbies(users));

