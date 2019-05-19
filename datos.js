//Creación de variables que son llamadas del archivo calculos
//así puedo tener a parte toda la información
const {estudiante, obtenerPromedio} = require ('./calculos');

//Trabajando con variables del filesystem
const fs = require('fs');

//Destructuración de variables
let {nombre, edad : anios, notas: {matematicas, ingles, programacion}} = estudiante;

//Impresión del algoritmo
console.log("El nombre del estudiante es: "+ nombre);
console.log("La edad del estudiante es: " + anios);
console.log("Nota Matematicas: "+ matematicas);
console.log("Nota Ingles:" + ingles);
console.log("Nota Programacion:" + programacion);
console.log("El promedio es: " + obtenerPromedio(matematicas, ingles, programacion));


//Creación de archivos planos con la librería FileSystem
let crearArchivo = (estudiante)=>{
    texto = 'El nombre del estudiante es: '+ estudiante.nombre + '\n'+
            'Ha obtenido un promedio de :'+ obtenerPromedio(matematicas, ingles, programacion)
            fs.writeFile('promedio.txt', texto, (err) =>{
                if(err)throw(err);
                console.log('Se ha creado el archivo')
            });
};

//Llamando la función para la creación del archivo de FileSystem
crearArchivo(estudiante);