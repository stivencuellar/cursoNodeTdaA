
//Así se hace la creación de un objeto de información
let estudiante ={
    nombre: 'Stiven',
    edad: 27,
    notas:{
        matematicas:3,
        ingles:4,
        programacion:5
    }
};

//Creación de función flecha
let obtenerPromedio=(nota_uno, nota_dos, nota_tres)=>(nota_uno+nota_dos+nota_tres)/3;

//console.log("El promedio General de "+ estudiante.nombre + " es:" + obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));

//Forma para exportar los datos y usarlos en otro archivo: ejemplo en datos
module.exports = {
    estudiante,
    obtenerPromedio
};