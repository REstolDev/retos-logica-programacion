
/* 
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 

*/

const prompt = require("prompt-sync")();

function hangmanGame(secretWord) {
  //convertir la palabra en un array
  const wordArr = secretWord.split("");
  
  let resultArr = wordArr.map((e) => "_");
  //otra manerad de hacerlo 'let resultArr = "_".repeat(secretWord.length);'

  let cont = 5;

  //crear un loop
  //otra manera de hacerlo es 
  //while(cont>0 && wordArr.toString()===resultArr.toString()) y después un mensaje con if
  do {
    //pedir una letra
    let userInput = prompt("Adivina la letra:");

    //comprobar si existe y generar resultado
    index = wordArr.indexOf(userInput);
    let isFound=false;

      while(index!== -1){
        resultArr[index]= userInput;
        index= wordArr.indexOf(userInput, index+1);
        isFound= true;
      }
    
    if(isFound===false) cont--;
    
  //comprobar si la palabra ya esta completa
    if(secretWord===resultArr.toString()){
      return `Felicidades has completado el ahorcado, la palabra secreta era "${secretWord}"`;
    } 
    else{
      //mostrar palabra e intentos restantes
      console.log(`
      La palabra es: ${resultArr.join("")}
      Te quedan ${cont} intentos
      `);
    }
  }
  while(cont>0);

  return `Lo siento, has perdido!! La palabra secreta era "${secretWord}"`;
}

console.log(hangmanGame("ramonoter"));
