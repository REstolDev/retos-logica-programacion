/*
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/

// readline es un módulo en Node.js que proporciona una interfaz para leer datos desde un flujo de entrada
const { normalize } = require("path");
const readline = require("readline");
// Creamos la interfaz para realizar operaciones de entrada/salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", () => {
  console.log("¡Hasta luego!");
  process.exit(0);
});

// Crear array de objetos de superheroes marvel
const infoSuperheroes = {
  "Iron Man": {
    nombreReal: "Tony Stark",
    poderes: ["Tecnologia avanzada", "Movilidad aérea"],
    equipo: "Los vengadores",
  },
  "Capitán América": {
    nombreReal: "Steve Rogers",
    poderes: ["Fuerza sobrehumana", "Agilidad y reflejos sobresalientes"],
    equipo: "Los vengadores",
  },
  Thor: {
    nombreReal: "Thor Odinson",
    poderes: ["Mjolnir", "Viento y trueno"],
    equipo: "Los vengadores",
  },
  "Spider-Man": {
    nombreReal: "Peter Parker",
    poderes: ["Balanceo", "Telarañas pegajosas", "Sentido aracnido"],
    equipo: "Los vengadores",
  },
  Hulk: {
    nombreReal: "Bruce Banner",
    poderes: ["Fuerza sobrehumana", "Invulnerabilidad"],
    equipo: "Los vengadores",
  },
};
function showAllSuperHeroes() {
  const arrSuperHeroesNames = Object.keys(infoSuperheroes);
  console.log("SuperHeroes:");
  arrSuperHeroesNames.forEach((e) => console.log(`- ${e}`));
}

function handleUserInput() {
  rl.question(
    "Introduce los SuperHeroes que quieras ver, separados por una coma: ",
    async (respuesta) => {
      let arrNames = respuesta.split(",");
      arrNames = arrNames.map((e) => e.trim());
      await findSuperHeroes(arrNames);
      await menuPrompt();
    }
  );
}
const normalizeName = (str) => {
  const noAccentsStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return Promise.resolve(noAccentsStr.toLowerCase().replace(/[\s\W]/g, ""));
};

async function findSuperHeroes(arrNames) {
  for (const e of arrNames) {
    const normalizedName = await normalizeName(e);
    let nameFounded = false;
    for (let key in infoSuperheroes) {
      const normalizedKey = await normalizeName(key);
      if (normalizedKey === normalizedName) {
        showSuperHeroeInfo(key);
        nameFounded = true;
      }
    }
    if (!nameFounded) console.log(`**** ${e} no existe ****`);
  }
}

function showSuperHeroeInfo(key) {
  console.log(`
          SuperHeroe: ${key}
          Nombre real: ${infoSuperheroes[key].nombreReal}
          Poderes: ${infoSuperheroes[key].poderes.join(", ")}
          Equipo: ${infoSuperheroes[key].equipo}
          ------------------------`);
}

const menuPrompt = () => {
  rl.question(
    "Introduce 'r' si quieres volver a repetir la busqueda o 's' para salir: ",
    (respuesta) => {
      switch (respuesta) {
        case "r":
          showAllSuperHeroes();
          handleUserInput();
          break;
        case "s":
          rl.close();
          break;

        default:
          console.log("Esta opción no es valida.");
          menuPrompt();
      }
    }
  );
};

showAllSuperHeroes();
handleUserInput();
