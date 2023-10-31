alert("Ejercicio 14")

 texto = prompt("Ingrese una cadena de texto: ");

let textoConguiones = " ";
 i;

for(i = 0 ; i <= texto.length; i++){

    textoConguiones = textoConguiones + texto[i];

    if(i < texto.length - 1 ){
        textoConguiones += "-";
    }
}

console.log("Cadena con signos '-': " + textoConguiones);
