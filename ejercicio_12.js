// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el 
// valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
function findArrayIndex(array, text) {
    try {
        return array.indexOf(text);
    } catch (error) {
        return `Error - Se ha producido el siguiente error al devolver la posición:\n${error}.\n\nRevise el formato de los parámetos pasados a la función.`;
    }
}

// Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Leia"));
console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(null, "Anakin"));