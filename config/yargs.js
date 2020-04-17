const opts = {
    base: {
        demand: true, // indica que es un valor obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10 // si no me mandan el valor, lo asigno por defecto
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera en un archivo la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}