//codigo del cuadrado
console.group("Cuadrado");
//const ladocuadrado= 5;
//console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

function perimetrocuadrado(lado){
     return lado*4; 
} 
//console.log("El perimetro del cuadrado es: " + perimetrocuadrado + "cm");

function areacuadrado(lado){
    return lado*lado;
}
//console.log("El area del cuadrado es: " + areacuadrado + "cm^2");
console.groupEnd();

//codigo del triangulo
console.group("Triangulo");
// const ltr1= 6;
// const ltr2= 6;
// const basetr= 4;
// const htr=5.5;
// console.log("Los lados del triangulo miden: " + ltr1 + "cm, " + ltr2 + "cm, " + basetr + "cm ");
// console.log("La altura del triangulo es: " + htr + "cm");

function perimetrotr(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perimetro del triangulo es: " + perimetrotr + "cm");

function areatr(base, altura){
    return (base*altura)/2;
} 
//console.log("El area del triangulo es: " + areatr + "cm^2");
console.groupEnd();

//codigo del triangulo isosceles
console.group("Isosceles");
function isosceles(lad1,base1){
    return (Math.sqrt((lad1*lad1)-((base1*base1)/4)))
}
console.groupEnd();


//codigo del circulo
console.group("Circulo");
const pi= Math.PI;
// const radio=4;
// const diametro= radio*2;

// console.log("El radio del circulo es: " + radio + "cm");
//console.log("El diametro del circulo es: " + diametro + "cm");

function diametrocirculo(radio){
    return radio*2;
}

function perimetrocirculo(radio){
    const diametro= diametrocirculo(radio);
    return diametro*pi;
}
//console.log("El perimetro del circulo es: " + perimetrocirculo + "cm");

function areacirculo(radio){
    return (radio*radio)*pi;
} 
//console.log("El area del circulo es: " + areacirculo + "cm^2");
console.groupEnd();


/*----------------------------------------------------------------*/

//codigo botones de perimetro y cuadrado
function calcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value;

    const perimetro=perimetrocuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value;

    const area=areacuadrado(value);
    alert(area);
}

//codigo botones de perimetro y triangulo
function calcularPerimetroTriangulo(){
    const Inputlado1= document.getElementById("Inputlado1");
    const Inputlado2= document.getElementById("Inputlado2");
    const Inputbase= document.getElementById("Inputbase");
    const l1= Number(Inputlado1.value);
    const l2= Number(Inputlado2.value);
    const b= Number(Inputbase.value);

    const perimetro=perimetrotr(l1,l2,b);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const Inputbase= document.getElementById("Inputbase");
    const Inputh= document.getElementById("Inputh");
    const base= Number(Inputbase.value);
    const altura= Number(Inputh.value);

    const area=areatr(base,altura);
    alert(area);
}

//codigo isosceles
function calcularAlturaIsos(){
    const Inputlados= document.getElementById("Inputlados");
    const Inputbase1= document.getElementById("Inputbase1");
    const lad1= Number(Inputlados.value);
    const base1= Number(Inputbase1.value);

    const altura=isosceles(lad1, base1);
    alert(altura);
}


//codigo botones de perimetro y circulo
function calcularDiametro(){
    const Inputradio= document.getElementById("Inputradio");
    const radio= Inputradio.value;

    const diametro=diametrocirculo(radio);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const Inputradio= document.getElementById("Inputradio");
    const radio= Inputradio.value;
    
    const diametro=perimetrocirculo(radio);
    alert(diametro);
    
}

function calcularAreaCirculo(){
    const Inputradio= document.getElementById("Inputradio");
    const radio= Inputradio.value;
    
    const diametro=areacirculo(radio);
    alert(diametro);
}