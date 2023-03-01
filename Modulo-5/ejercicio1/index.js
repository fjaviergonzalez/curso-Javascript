const img = document.createElement('img');
img.src = 'https://via.placeholder.com/150';
img.alt = 'Imagen de ejemplo';

const app = document.querySelector(".app");
//Inserta la imagen como el tercer hijo, esto es, después del párrafo 1 y del párrafo 2
app.append(img);

// Fuente: https://developer.mozilla.org/es/docs/Web/API/Node/insertBefore
// Obtener una referencia al elemento en el que se quiere insertar un nuevo nodo
const elementoPadreApp = document.querySelector('.app');
// Obtiene una referencia al primer hijo del div con la clase .app (el primer párrafo)
const primerHijo = elementoPadreApp.firstChild;
// Insertar el nuevo elemento antes que el primer hijo
elementoPadreApp.insertBefore(img, primerHijo);


// OPCION 1: Usando un id = "childElement" en el párrafo segundo para tomarlo como referencia
// (En el enunciado no se dice que se pueda usar un id, así que la descarto)
/* <div class="app">
    <p>Soy un párrafo</p>
    <p id="childElement">Soy otro párrafo</p>
</div> */

// Obtener una referencia al elemento, antes de donde queremos insertar el elemento
// var parrafo2 = document.getElementById("childElement");
// // Obtener una referencia al nodo padre
// var parrafoPadre = parrafo2.parentNode;

// // Inserta un nuevo elemento en el DOM antes de sp2
// parrafoPadre.insertBefore(img, parrafo2);



// OPCION 2 (la buena): Usando los párrafos sin clases
// Seleccionamos los dos párrafos 
const parrafos = elementoPadreApp.getElementsByTagName("p");
// Como es un HTMLCollection, escogemos la posición 1, que es el 2º párrafo
const segundoParrafo = parrafos[1];
// Para que funcione "insertBefore", tenemos que seleccionar el nodo padre 
// del segundo párrafo (el primer párrafo) con "parentNode"
const primerParrafo = segundoParrafo.parentNode;
// Insertamos la imagen entre el primer y el segundo párrafo.
primerParrafo.insertBefore(img, segundoParrafo);







