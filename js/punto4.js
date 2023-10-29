alert("Ejericio 4");

let acum = 0;

do{

    let numero = parseInt(prompt("Ingrese un numero: "));
    acum += numero;

}while(confirm("¿desde agregar más numeros?"));

document.write("la cantidad acumulada es de: " + acum);