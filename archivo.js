const opciones = {
    matematicas:{
        default:0,
        alias:'m'
    },
    ingles:{
        default:0,
        alias:'i'
    },
    programacion:{
        demand : true,
        alias:'p'
    }
}

const argv = require('yargs')
            .command('promedio','Calcular el promedio', opciones)
            .argv

console.log(argv.matematicas);
console.log(argv);
//console.log('El nombre del est es: '+argv.nombre);
console.log('El prom es: '+ (argv.m + argv.i+ argv.p)/3);