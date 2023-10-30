alert("ejercicio 11");

let edades = []; 
let nombres = [];
let i;
let edad, nombre;


for(i = 0; i < 3; i++){

    edad = parseInt(prompt("Ingrese la edad: "));
    nombre = prompt("Ingrese el nombre: ");

    edades.push(edad);
    nombres.push(nombre);

}

let maxEdad = Math.max(...edades);
let indice = edades.indexOf(maxEdad);
let nombreMayor = nombres[indice];

console.log("La persona con mayor edad es " + nombreMayor + " con una edad de: " + maxEdad + " años");
