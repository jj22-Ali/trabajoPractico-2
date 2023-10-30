alert("Ejercicio 8");


do{

    numeroPiramide = parseInt(prompt("Ingrese hasta que numero quiere su piramide: "));

    if(numeroPiramide < 50){

    
        for(i = 1 ; i <= numeroPiramide ; i++){
    
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



