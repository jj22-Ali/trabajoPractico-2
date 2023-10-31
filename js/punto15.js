alert("Ejercicio 15");

texto = prompt("Ingrese el texto: ");
let textomin = texto.toLowerCase();

let contadorVocales = 0;

i;

for (i = 0; i < textomin.length; i++) {
    if ('a' == textomin[i] || 'e' == textomin[i] || 'i' == textomin[i] || 'o' == textomin[i] || 'u' == textomin[i]) {
        contadorVocales++;
    }
}

console.log("La cantidad de vocales es de: " + contadorVocales);