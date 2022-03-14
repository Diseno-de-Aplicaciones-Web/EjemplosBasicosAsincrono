/**
 * Ejemplo con callbacks
 */

function miFuncionSiBien (posicion) {
    console.log(posicion);
}
function miFuncionSiMal (err) {
    console.error(err);
}

console.log("Solicito geolocalizacion");
navigator.geolocation.getCurrentPosition(miFuncionSiBien,miFuncionSiMal);
console.log("Fin del programa");



/**
 * Ejemplo con promesas
 */

console.log("Inicio del programa.");

console.log("Ejecutamos fetch.");

fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/table"
).then(
    response => response.json()
).then(
    data => console.log(
        "Resultado fetch: ",
        data[0].meanings[0].definitions[0].definition
    )
).catch(
    error => console.error(error)
)

console.log("Fin del programa.");

/**
 * Ejemplo con async/await
 */

 console.log("Inicio del programa.");

 console.log("Ejecutamos fetch.");

async function fetchAsync () {
    try {
        const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/table")
        const json = await response.json();
        console.log("Resultado awaits:",json[0].meanings[0].definitions[0].definition)
    } catch (err) {
        console.error(err);
    }
}

fetchAsync()

console.log("Fin del programa.");
