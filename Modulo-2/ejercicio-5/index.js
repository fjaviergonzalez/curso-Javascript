//Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
//Dime cual es la persona más joven del array.
//Dime cual es la persona más mayor del array.

function mayoresDeEdad(arrayPersonas){
    //let arrayMayores = [];
    // for (let i = 0; i < arrayPersonas.length; i++) {
    //     if(esMayorDeEdad(arrayPersonas[i].edad)) {
    //         arrayMayores.push(arrayPersonas[i]);
    //     }
    // }
    
    return arrayPersonas.filter( persona => persona.edad >= 18 );
}
     
function elMasJoven(arrayPersonas){
    let joven = arrayPersonas[0];
    // for (let i = 1; i < arrayPersonas.length; i++) {
    //     if(arrayPersonas[i].edad < joven.edad)
    //         joven = arrayPersonas[i];
    // }
    
    return arrayPersonas.reduce((joven, persona) => { 
        if (persona.edad < joven.edad){
           return persona;
        }
        return joven;
    });
    //return joven;
}


function elMasMayor(arrayPersonas){
    let mayor = arrayPersonas[0];
    // for (let i = 1; i < arrayPersonas.length; i++) {
    //     if(arrayPersonas[i].edad > mayor.edad)
    //         mayor = arrayPersonas[i];
    // }
    return arrayPersonas.reduce( (mayor, persona) => {
        if(persona.edad > mayor.edad){
            return persona;
        }
        return mayor;
    });
    //return mayor;
}

const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];
  
  const menor = mayoresDeEdad(personas);
  console.log("Las personas mayores de edad son: ");
  for (const persona of menor) {
    console.log(persona); 
  }

  const personaMenor = elMasJoven(menor);
  const personaMayor = elMasMayor(menor);
  console.log("El más joven es " + personaMenor.nombre + ", de edad " + personaMenor.edad);
  console.log("El más mayor es "+ personaMayor.nombre + ", de edad " + personaMayor.edad);