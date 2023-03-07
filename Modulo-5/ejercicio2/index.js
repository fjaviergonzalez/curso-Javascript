// Crea 2 listas, una para carnívoros y otra para herbívoros.
// Intenta evitar el reflow a la hora de añadir elementos a las listas.
// Quiero que se le añada la clase carnivore a los carnívoros y la clase herbivore a los herbívoros.
// A los carnívoros quiero que se les añada un emoji 🍖 y a los herbívoros🌱. Al final de cada nombre.


const animals = [
    { name: 'Lion King', isCarnivore: true },
    { name: 'Plant', isCarnivore: false },
    { name: 'Ant', isCarnivore: true },
    { name: 'Bee', isCarnivore: true },
    { name: 'Mouse', isCarnivore: true },
  ];

// Creamos dos arrays de animales, uno filtrando animales carnívoros y otro de herbívoros
 const carnivoros = animals.filter(animal => animal.isCarnivore).map(animal => animal.name);
 const herbivoros = animals.filter(animal => !animal.isCarnivore).map(animal => animal.name);

 // Creamos el fragment, creamos una lista de carnívoros y le asignamos a esa lista
 // la clase "carnivore" mediante toggle (si no existe la crea; si existe la elimina)
 const fragment = document.createDocumentFragment();
 let ulCarnivoros = document.createElement("ul");
 ulCarnivoros.classList.toggle('carnivore');

 // Recorremos el array de carnívoros añadiendo, por cada elemento de éste,
 // el nombre del animal y el emoji correspondiente,a la lista de carnívoros.
 carnivoros.forEach( (animal) => {
    const li = document.createElement("li");
    li.textContent = animal + "🍖";
    console.log(li.textContent);
    ulCarnivoros.append(li);
 });

// Se añade la lista de carnívoros al fragment, que actualizará la pantalla
// una vez se haya añadido la lista de herbívoros
 fragment.append(ulCarnivoros);

  // creamos una lista de herbívoros y le asignamos a esa lista
 // la clase "hervibore" mediante toggle (si no existe la crea; si existe la elimina)
 let ulHerbivoros = document.createElement("ul");
 ulHerbivoros.classList.toggle('herbivore');

  // Recorremos el array de herbívoros añadiendo, por cada elemento de éste,
 // el nombre del animal y el emoji correspondiente,a la lista de herbívoros.
 herbivoros.forEach( (animal) => {
    const li = document.createElement("li");
    li.textContent = animal + "🌱";
    console.log(li.textContent);
    ulHerbivoros.append(li);
 });

 // Se añade la lista de herbívoros al fragment para actualizar la pantalla
// una vez se haya añadido éste a la clase "board".
 fragment.append(ulHerbivoros);

 // Finalmente, añadimos el fragment a la clase "board" 
 // para que actualice la pantalla con los cambios: una lista
 // de carnívoros y otra de herbívoros.
const board = document.querySelector(".board");
board.append(fragment);