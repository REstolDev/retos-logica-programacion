# RETO#45 Sorteo aDEViento

Este programa simula el mecanismo de participación para el sorteo aDEViento, una iniciativa de la comunidad [aDEViento](https://adviento.dev) que ofrece 24 regalos sorpresa relacionados con el desarrollo de software desde el 1 al 24 de diciembre.

## Descripción

El programa permite realizar las siguientes acciones a través de la terminal:

- Añadir un nuevo participante.
- Borrar un participante.
- Mostrar todos los participantes.
- Elegir un ganador al azar y eliminarlo del listado.
- Salir del programa.

## Ejecución

### Desde el archivo JavaScript

Si solo deseas ejecutar la aplicación sin transpilar TypeScript, asegúrate de tener Node.js instalado. Luego, sigue estos pasos:

1. Abre la terminal en el directorio del proyecto.
2. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta el programa:

   ```bash
   node dist/main.js
   ```

### Transpilación y ejecución desde TypeScript

Si deseas transpilar el código TypeScript antes de ejecutarlo, sigue estos pasos:

1. Asegúrate de tener TypeScript instalado globalmente o como una dependencia de desarrollo:

   ```bash
   npm install -g typescript
   ```

   o

   ```bash
   npm install --save-dev typescript
   ```

2. Ejecuta el siguiente comando para transpilar el código TypeScript:

   ```bash
   npx tsc
   ```

   Esto generará archivos JavaScript en el directorio `./dist`.

3. Sigue los pasos 2 y 3 del método anterior para instalar las dependencias y ejecutar el programa.

## Acerca del Proyecto

Este proyecto está escrito en TypeScript y transpilado a JavaScript para facilitar la ejecución en entornos Node.js. Puedes explorar más proyectos y detalles en mi portfolio: [ramonestol.com](https://ramonestol.com).

¡Disfruta participando en el sorteo aDEViento!