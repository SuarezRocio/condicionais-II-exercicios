/**
 * Exercício 2

Vamos recriar o exercício Nacionalidade da aula de condicionais I, utilizando switch-case. No arquivo script.js existe uma versão do
 código já escrita, mas você pode colar o exercício que você fez na última
  prática!

-> Relembrando o enunciado.

Crie uma função que receba do usuário sua nacionalidade, utilize um prompt 
que diga: "Escreva aqui sua nacionalidade" e guarde o valor 
da resposta em uma const nacionalidade.

Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

    brasileira;
    argentina;
    uruguaia;
    chilena;
    colombiana;

Crie uma estrutura com o switch-case que verifique se a nacionalidade 
guardada na const nacionalidade, é igual a cada uma das nacionalidades
 acima, e caso seja, imprima a nacionalidade no console. O programa deve 
 imprimir "nacionalidade não encontrada" caso o valor de nacionalidade 
 não corresponda a nenhum dos valores.
 */
/*
let brasileira;
let argentina;
let uruguaia;
let chilena;
let colombiana; 
*/
//let booleano = true;


const nacionalidade = prompt("digite su nacionalidad");

switch(nacionalidade){
	case "brasileira":
		console.log("a pessoa e de Brasil")
		break;
	case "argentina":
		console.log("a pessoa e de Argentina")
		break;
	case "uruguaia":
		console.log("a pessoa e de Uruguai")
		break;
	case "chilena":
		console.log("a pessoa e de Chilena")
		break;
	case "colombiana":
		console.log("a pessoa e de Colombia")
		break;
	default:
		console.log("nacionalidade não encontrada");	
}

console-log(nacionalidade)   