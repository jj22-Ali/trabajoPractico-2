alert("ejercicio 9");

let i,j;

for(i = 1 ; i <= 500; i++){

    for(j = 1; j <= 1; j++){
    
        if(i % 4 == 0 && i % 9 == 0){

            document.write(i + " multiplo de 4 y de 9")

        }else{

            if(i % 4 == 0){

                document.write(i + " multiplo de 4")

            }else{

                if(i % 9 == 0){

                    document.write(i + " multiplo de 9")

                }else{
                    document.write(i)
                }
            }

        }

    }

    document.write("<br>");

}