//Si pongo ./ es que la carpeta o archivo que busco esta en el mismo repositorio que el programa
// no hace falta poner la extención .JS en un require ya que se sabe que llama a un programa de js

//Requires
const colors = require('colors');

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + `${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}

// console.log(argv.base);

//let parametro = argv[2];
//let base = parametro.split('=')[1]