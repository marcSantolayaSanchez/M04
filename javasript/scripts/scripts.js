let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let numeroUsuario = 0
let numeroIntentos = 5
do {
    numeroIntentos --
    numeroUsuario = window.prompt("Hola pon un numero a ver si te acercas al mio");
        if(numeroUsuario > numeroSecreto && numeroUsuario != null){
        window.alert("Casi pero te pasaste malito, te quedan " + numeroIntentos)

    } else if(numeroUsuario < numeroSecreto && numeroUsuario != null){

        window.alert("Casi pero te falta unos numerines mister, te quedan " + numeroIntentos)

    }

    else if(numeroSecreto == numeroUsuario){
        window.alert("Diste con el numero correcto mi estimado cliente")

    }
    else{
        window.alert("ERROR GROSERIAS LAS JUSTAS")
    }

    if(numeroIntentos == 0){
        window.alert("THIS BOMBOCLAT NO INTENTOS")
    }
 
} while (numeroSecreto != numeroUsuario && numeroUsuario != null && numeroIntentos !=0);
    
