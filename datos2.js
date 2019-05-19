const opciones ={
    nombre:{
        demand:true,
        alias:'n'
        
    },
    matematicas:{
        demand:true,
        alias:'m'
    },
    ingles:{
        demand:true,
        alias:'i'
    },
    programacion:{
        demand:true,
        alias:'p'
    }
}

let obtenerPromedio = (nota_uno, nota_dos, nota_tres) => (nota_uno + nota_dos+ nota_tres)/3;

const argv = require('yargs')
.command('promedio', 'Calcular el promedio')
.argv

module.exports={
    obtenerPromedio,
    argv
};