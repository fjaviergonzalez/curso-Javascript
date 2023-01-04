const gastos = JSON.parse(localStorage.getItem("gasto")) || [];

function addGasto(arrayContabilidad){
    let nuevoId = arrayContabilidad.length ? arrayContabilidad[arrayContabilidad.length - 1].id + 1 : 1;
    console.log(nuevoId);
    const nuevoConcepto = prompt("Introduce concepto: ");
    console.log(nuevoConcepto);
    const nuevoImporte = parseInt(prompt("Introduce el importe: "));
    console.log(nuevoImporte);
    
    const gasto = {id: nuevoId, concepto: nuevoConcepto, importe: nuevoImporte};   
    arrayContabilidad.push(gasto) ? console.log(`Gasto ${nuevoConcepto} introducido correctamente.`) : alert("Error");         
    localStorage.setItem("gasto", JSON.stringify(arrayContabilidad));      
}

function showGastos(){
    gastos.length > 0 ? console.log("Los gastos de este mes son: ") : console.log("No tienes gastos aún.");
    gastos.forEach(gasto => {
        console.log(`-id: ${gasto.id}) ${gasto.concepto}, importe ${gasto.importe}€`);
    });
    // for(let i=0; i<localStorage.length; i++) {
    //     let key = localStorage.key(i);
    //     let datos = JSON.parse(localStorage.getItem(key));   
    // }
    //console.log(datos.coste);
        //console.log(`${key}: ${localStorage.getItem(key)}`);
        //console.log(`-${key}: con concepto ${datos.concepto} y coste de ${datos.coste}€`);
}

function eliminarGasto(arrayContabilidad){
    const idAEliminar = parseInt(prompt("Introduzca el identificador del gasto que desea eliminar: "));
    const datosAEliminar = arrayContabilidad.find((gasto) => gasto.id === idAEliminar);
    const index =  arrayContabilidad.indexOf(datosAEliminar);
    const gastosActualizados = arrayContabilidad.splice(index,1);
    localStorage.setItem("gasto", JSON.stringify(gastosActualizados));
    return gastosActualizados;
    // if (localStorage.getItem(id)) {
    //     localStorage.removeItem(id);
    // }
}

function editarGasto(arrayContabilidad){
    const idAEditar = parseInt(prompt("Introduzca el id del gasto a editar: "));
    const gastosActualizados = arrayContabilidad
                      .map((gasto) => {
                        if(gasto.id === idAEditar){
                            console.log("OPCIONES: ");
                            console.log("1)Editar concepto: ");
                            console.log("2)Editar importe: ");
                            let opcion = parseInt(prompt("Escoja opción: "));
                            switch (opcion) {
                                case 1:
                                    const conceptoNuevo = prompt("introduce el nuevo concepto: ");
                                    gasto.concepto = conceptoNuevo;    
                                    break;
                                case 2:
                                    const importeNuevo = parseInt(prompt("introduce el nuevo importe: "));
                                    gasto.importe = importeNuevo;
                                    break;                               
                                default:
                                    break;
                            }
                        }                                        
                        console.log("concepto nuevo: " + gasto.concepto + "gasto nuevo: " + gasto.importe);
                      });
    localStorage.setItem("gasto", JSON.stringify(gastosActualizados));
    return gastosActualizados;


    // if(!localStorage.getItem(id)){
    //     console.log("¡Error! No existe ese gasto");
    // }
    // else {
    //     let datosGasto = JSON.parse(localStorage.getItem(id));
    //     datosGasto.coste = nuevoCoste;
    //     localStorage.setItem(id, JSON.stringify(datosGasto));
    // }
}

function mostrarMenu(){
    console.log("Opciones: ");
    console.log("1) Añadir un gasto:");
    console.log("2) Mostrar los gastos actuales: ");
    console.log("3) Eliminar un gasto: ");
    console.log("4) Editar un gasto: ");
    console.log("5) Salir");
}

let opcion = 0;
salida = false;
while (!salida) {
    mostrarMenu();
    opcion = parseInt(prompt("Escoge una opción: "));
    console.log("la opcion elegida es: " + opcion);
    switch (opcion) {
        case 1:
            addGasto(gastos);
            break;
        case 2:
            showGastos();
            break;
        case 3: 
            eliminarGasto(gastos);
            break;
        case 4: 
            editarGasto(gastos);
            break;    
        case 5:
            salida = true;
            localStorage.clear();
        default:
            break;
    }
} 
