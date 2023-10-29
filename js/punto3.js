alert("ejercicio 3");

let cadenaDeTexto = [];

while(true){

    cadenaDeTexto = prompt("Ingrese cualquier texto: ");
    cadenaDeTexto.push(cadenaDeTexto);

    const confirmacion = confirm("¿Quieres seguir agregando más texto?");

    if (confirmacion === false){
        break;
    }

}
