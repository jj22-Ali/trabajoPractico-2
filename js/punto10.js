alert("Ejercicio 10");

let filas = parseInt(prompt("Ingrese la cantidad de filas: "));
let columnas = parseInt(prompt("Ingrese la cantidad de columna: "));

let total = filas * columnas;
let indiceFilas, indiceColumnas;

document.write("<table><tbody>")
for(indiceFilas=0; indiceFilas < filas; indiceFilas++){
    document.write("<tr>")
    for(indiceColumnas=0; indiceColumnas < columnas; indiceColumnas++){

        document.write("<td>" + total + "</td>");
        total--;

    }
    document.write("</tr>")
}
document.write("</tbody></table>")


