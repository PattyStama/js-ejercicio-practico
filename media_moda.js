//Calculo del promedio
function calcularmediaaritmetica(lista){
//     let sumalista=0;
//     for (let i=0; i<lista.length; i++){
//         sumalista =sumalista + lista[i];
//     }

 

    const sumalista = lista.reduce(
        function (valoracumulado=0, nuevoelemento){
            return valoracumulado + nuevoelemento;
        }
    );

    const promediolista =sumalista / lista.length;
     return promediolista;
}

//Calculo de la mediana
var lista1=[
    100,
    800,
    1300,
    70,
];
//const listaordenada= lista1.sort();
const mitadlista1=parseInt(lista1.kength/2);

function espar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(espar(lista1.length)){
    const elemento1= lista1[mitadlista1-1];
    const elemento2 = lista1[mitadlista1];

    const promedioelementos= calcularmediaaritmetica([elemento1,elemento2]);
    
    mediana=promedioelementos;
    }else{
        mediana=lista1[mitadlista1];
}