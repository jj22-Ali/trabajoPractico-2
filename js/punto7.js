alert("Ejercicio 7");

let numeroPiramide;

do{

    numeroPiramide = parseInt(prompt("Ingrese hasta que numero quiere su piramide: "));

    if(numeroPiramide < 50){

    
        for(i = numeroPiramide ; i >= 1 ; i--){
    
            for(j = 1 ; j <= i; j++){
    
                document.write(i)
    
            }
        
            document.write("<br>");
    
        }
        
        break;
    
    }else{
    
        alert("Porfavor ingrese numeros menores a 50");
    
    }

}while(confirm("¿Quieres intentarlo otra vez?"));




