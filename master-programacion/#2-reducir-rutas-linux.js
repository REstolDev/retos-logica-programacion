/*
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

function simplifyRoute(route){
    
    const routeArr =route.split("/");
    let newRoute = '/';
    for(const elem of routeArr){
        if(elem!== '' || elem !=='.') newRoute += elem+'/';
        if (elem ==='..') newRoute = '/';
    }
    newRoute = newRoute.replace(/^(.+)\/+$/, '$1');

    console.log(newRoute);
    
    
}
simplifyRoute("/.");                       // Salida: /
simplifyRoute("/..");                      // Salida: /
simplifyRoute("/");                    // Salida: /
simplifyRoute("/home/");             // Salida: /home
simplifyRoute("/x/./y/../../z/");    // Salida: /z
simplifyRoute("/../");               // Salida: /
simplifyRoute("/home//pruebas/");    // Salida: /home/pruebas
 