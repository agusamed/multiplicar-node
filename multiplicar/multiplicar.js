// Requireds - comandos obligatorios para correr paquetes. Se suelen poner al principio

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log(`**tabla del ${base}**`.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`)
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //tambien se puede poner el nombre del archivo como un template literal para que vaya cambiando cuando cambia el numero

        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });



    });
}

//DATO: si pongo CARPETA/ antes del nombre del archivo, se me va a crear el archivo dentro de esa carpeta
// dicha carpeta tiene que estar dentro del mismo lugar donde esta el programa

module.exports = {
    crearArchivo,
    listarTabla
}

//Module es un modulo que puede contener muchos campos para ser reutilizados en varios programas
// también se puede declarar junto con la función como module.exports.crearArcvhio