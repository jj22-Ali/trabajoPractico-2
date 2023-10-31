alert("Ejercicio 16");

let cadenaTexto = prompt ("Ingrese cualquier texto: ");

let cadenaAlreves = "";
i;

for(i = cadenaTexto.length - 1; i >= 0 ; i--){

    cadenaAlreves += cadenaTexto[i];

}

console.log("La cadena quedaria: " + cadenaAlreves);