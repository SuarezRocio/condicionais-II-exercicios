/**Exercício 1

Crie um código que receba um número por prompt e verifique se um número é divisível por 2 ou por 3

Faça isso:

    Utilizando ifs aninhados

    if(expressao){
        if(expressao){

        }
    }

    Utilizando um operador lógico para unir duas operações relacionais

    if(expressao && expressao){ //&& para E
    //expressao || expressao para OU     
    
    } */

    const numero = prompt("receba um número");
    const res = 0
    const resDois = 1
    
    /*if(numero % 2 && res ===0 ){
        if(numero % 3 && resDois === 1){
            alert("")
        }
    }*/
    
    
    if((numero % 2 && res ===0) || (numero % 3 && resDois === 1)){
        console.log("é divisível por dois ou por três parabéns")
    }else{
        console.log("desculpe, não é divisível por dois ou três")
    }