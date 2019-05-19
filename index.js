const {obtenerPromedio, argv} = require ('./datos')

console.log(argv);
if(argv._[0]=='promedio'){
    console.log('El Promedio de '+ argv.n + 'es');
}
else{
    console.log('Promedio no calculado');
}