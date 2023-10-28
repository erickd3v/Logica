// importar archivo File System 'fs' de NodeJS
const fs = require('node:fs');

let obj = {}

// Leer el JSON de manera sincrona y luego convertirlo en un obj para seguir el proceso
let data = fs.readFileSync('array.json');
let readData = JSON.parse(data);

obj = readData;

for (let i = 0; i < obj.length; i++) {
    const products = obj[i];

    // a cada producto del obj le agrego la key "taxes" y el value dependiendo del resultado en relacion precio descuento.
    products.taxes = (products.price * 19) / 100;
}

// transformo los datos ya manipulados a un string para finalemnte enviarlos a otro archivo.json
let writeData = JSON.stringify(obj, null, 2);

fs.writeFile('resolve.json', writeData, (error) => {
    if(error) {
        console.error('Hubo un error inesperado al transcribir los datos', error);
        return;
    } 
    
    try {
        console.log('Archivo JSON modificado correctamente');
    } catch(sendError){
        console.error('Error al guardar el archivo JSON', sendError)
    }
});