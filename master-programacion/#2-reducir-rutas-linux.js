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
    // //reducir las barras duplicadas
    // let modifiedRoute= route.replace(/\/{2,}/g, '/');
    // //eliminar barras del final
    // modifiedRoute = modifiedRoute.replace(/\/+$/, '');

    const routeArr =route.split("/");
    let newRoute = '/';
    for(const element of routeArr){
        if(element!== '') newRoute += element+'/';
        if (element=== '.' || element ==='..') newRoute = '/';
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
 