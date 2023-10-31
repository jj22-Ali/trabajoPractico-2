    alert("Ejercicio 17")

    let frase = prompt("Ingrese una frase: ");
    let posicionVocal, vocal;
    
    for(i = 0; i <= frase.length - 1; i++){

        if(frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u" ){

            vocal = frase[i];
            posicionVocal = i;
            break;
        }

    }

    console.log("La vocal " + vocal + " está en la posición " + posicionVocal);