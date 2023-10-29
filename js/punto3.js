alert("ejercicio 3");

let fraseCompleta = "";

do{

    let primerFrase = prompt("Ingrese una frase: ");

    if(fraseCompleta.length === 0){

        fraseCompleta += primerFrase;

    }else {
        
        fraseCompleta += "-" + primerFrase;
    }


}while(confirm("¿Quierer ingresar otra frase?"));

document.write("La frase completa es:" + fraseCompleta);
