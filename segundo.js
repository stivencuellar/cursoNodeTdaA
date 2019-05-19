let promedio = (nota_uno, nota_dos, nota_tres, callback)=>{
    setTimeout(function(){
        let resultado =( nota_uno+nota_dos+nota_tres)/3;
        callback(resultado) ;
    },2000);   
}

promedio(5,4,2, function(resultado){
    console.log(resultado);
});