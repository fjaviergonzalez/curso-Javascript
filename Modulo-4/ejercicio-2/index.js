const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];

  // Extraemos solo los nombres del array de objetos de usuarios
  const listaUsers = users.map((usuario) => usuario.name);
  console.log(listaUsers);

  // Creamos la lista no ordenada y la añadimos al body de nuestro HTML
  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  // Creamos cada uno de los hijos (li) de la lista no ordenada (ul) y le asignamos
  // a cada hijo su nombre de usuario
  for(let i = 0; i < listaUsers.length; i++){
    const li = document.createElement("li");
    li.textContent = listaUsers[i];
    console.log(li.textContent);
    ul.appendChild(li);
  }

  // Selecciona únicamente los elementos "li" de la lista no ordenada
  const elementos = document.querySelectorAll("li");

  // Si el usuario de la lista tiene el atributo "isPremium" verdadero, ponle el 
  // color de fondo dorado.
  elementos.forEach((elemento, indice) => {
    if (users[indice].isPremium)
      elemento.setAttribute("style", "background-color: gold;");
      //Otra opción:
      //elemento.style.cssText = "background-color: gold;";
  });

  // A todos los usuarios "premium", añádeles el título "Usuario Premium"
  elementos.forEach((elemento, indice) => {
    if (users[indice].isPremium){
      elemento.setAttribute("title", "Usuario Premium");
      //console.log(elemento.getAttribute("title"));
    }
  });

  

