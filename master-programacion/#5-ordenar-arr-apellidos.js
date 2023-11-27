/*
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  
 
*/

function orderFromLastname(arrNames){
    
    //** Soluiton 1 **/
    // arrNames = arrNames.map(e => e.split(" ") );
    // arrNames.sort((a,b) => {
    //     if(a[1]<b[1]) return -1;
    //     if(a[1]>b[1]) return 1;
    //     return 0;
    // });
    //arrNames= arrNames.map(e => e.join(" "));
    
    //** Soluiton 2 **/
    arrNames.sort((a,b) => {
        aIndex=a.indexOf(" ")+1;
        bIndex=b.indexOf(" ")+1;
        if(a[aIndex]<b[bIndex]) return -1;
        if(a[aIndex]>b[bIndex]) return 1;
        return 0;
    });


    console.log(arrNames);
    
}

orderFromLastname([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]
);  
