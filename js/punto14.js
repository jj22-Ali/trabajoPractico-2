alert("Ejercicio 14")

let texto = prompt("Ingrese una cadena de texto: ");

let textoConguiones = " ";
let i;

for(i = 0 ; i <= texto.length; i++){

    textoConguiones = textoConguiones + texto[i];

    if(i < texto.length - 1 ){
        textoConguiones += "-";
    }
}

console.log("Cadena con signos '-': " + textoConguiones);
