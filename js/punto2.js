alert("Ejercicio 2");

let nota = parseInt(prompt("Ingrese la nota del examen:"))

if(nota >= 0 && nota <= 2){
    alert("nota: Muy deficiente");
}else {

    if (nota >= 3 && nota <=4){
        alert("nota: Insuficiente");
    } else {
        if (nota >= 5 && nota <=6){
            alert("nota: suficiente");
        } else {
            if (nota === 7 ){
                alert("nota: Bien");
            } else {
                if (nota >= 8 && nota <=9){
                    alert("nota: Notable");
                } else {
                    if (nota === 10){
                        alert("nota: Sobresaliente");
                    } else {
                        if ( nota < 0 || nota > 10){
                            alert("Número erróneo");
                        } else {
                            alert("Introduzca un número válido")
                        }
                    }
                }
            }
        }
    }
} 
