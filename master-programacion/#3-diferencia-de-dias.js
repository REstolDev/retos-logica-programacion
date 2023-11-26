/*Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23

How to:
- convertir fechas a milisegundos
- calcular diferencia
- convertir resultado a dias
 
*/

function calculateDaysDifference(date1,date2){

    let MilisSecsDate1= new Date(date1).getTime();
    let MilisSecsDate2 = new Date(date2).getTime();
    let timeDifference = Math.max(MilisSecsDate1 , MilisSecsDate2) - Math.min(MilisSecsDate1 , MilisSecsDate2);

    console.log(timeDifference / (1000*60*60*24));
}
calculateDaysDifference('Dec 3, 2023', 'Dec 23, 2023');  // Salida: 23

//Mejo solución
// usar absolute en el math para que me de siempre un valor positivo en vez de aclular min y max
//Comprobar que los argumentos no sean ya un formato tipo  Date
//redondear siempre el resultado

function calculateDaysDifference2(date1,date2){
    date1 = date1 instanceof Date ? date1 : new Date(date1);
    date2 = date2 instanceof Date ? date2 : new Date(date2);

    if(isNaN(date1) || isNaN(date2)) return 'Introduce un formato de fecha válido';
    let timeDifference = Math.abs(date1.getTime() - date2.getTime());

    return Math.floor(timeDifference / (1000*60*60*24));
}

console.log(calculateDaysDifference2('Dec 26, 2023', 'Dec 23, 2023'));  // Salida: 23
console.log(calculateDaysDifference2('2023/13', 'Dec 23, 2023'));  // Salida: 23
