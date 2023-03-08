// Crea una card para cada usuario.
// Como atributo alt de la imagen, quiero que se le añada el nombre del usuario.
// Puedes usar los estilos que están en el template o crear tus propios estilos. 
// Además organiza el código CSS como creas conveniente.

const users = [
    {
      name: 'John Doe',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/men/38.jpg',
    },
    {
      name: 'Jane Doe',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/women/74.jpg',
    },
    {
      name: 'John Smith',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Jane Smith',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/women/92.jpg',
    },
  ];

const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();
const cardsTemplate =  document.querySelector("#cardsTemplate");

/* <div class="card">
    <img src="https://via.placeholder.com/150" alt="Imagen de ejemplo" />
    <h2>Nombre</h2>
    <p>Descripción</p>
</div> */

const imgItems = cardsTemplate.content.querySelector("img");
const nameItems = cardsTemplate.content.querySelector("h2"); 
const descriptionItems = cardsTemplate.content.querySelector("p");

// Vamos rellenando el template con los datos proporcionados por 
// el array de objetos "users" para formar cada card con su imagen, 
// nombre y descripción.

users.forEach((img) => {
    imgItems.src = img.img;
    nameItems.textContent = img.name;
    descriptionItems.textContent = img.description;
    // Para que se vean los cambios del template, hay que clonarlo
    // primero y luego hacer un append de su "content" al fragment
    const clone = cardsTemplate.cloneNode(true);
    fragment.append(clone.content);
});

// Añadimos el fragment, que contiene todos los datos del template, al container
container.append(fragment);