alert("Ejercicio 5");

let dni;
const letrasdni = "TRWAGMYFPDXBNJZSQVHLCKE";
let letra;

do {
    
    dni = parseInt(prompt("Ingrese un dni: "));

    if(dni > 0 || dni < 99999999){

        letra = letrasdni.charAt(dni % 23);
        console.log("La letra del DNI es: " + letra);
    }else{

        alert("Porfavor ingrese un numero correcto para dni")
    }


} while (confirm("¿Quieres intentar con otro dni?"));