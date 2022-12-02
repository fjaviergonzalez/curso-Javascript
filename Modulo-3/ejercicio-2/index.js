function compruebaPin(){
    let numIntentos = 1;
    let pinCorrecto = "1234";
    let pin = 0;

    do {
        pin = prompt('Introduce el PIN:');
        if (pin === pinCorrecto){
            console.log("Eso fue correcto!");
            break;
        }
        else {
            console.log("Lo siento, eso estaba mal!");
        }
        numIntentos++; 

    } while (numIntentos<4);
}

function compruebaPin2() {
    let pinCorrecto = "1234";
    let pin = 0;

    do {
        pin = prompt('Introduce el PIN o "salir" para desistir:');
        if (pin === pinCorrecto){
            console.log("Eso fue correcto!");
            break;
        }
        else if(pin !== "salir") {
            console.log("Lo siento, eso estaba mal!");
        }
    } while (pin !== "salir");
}



compruebaPin();
compruebaPin2();