function calculopreciofinal(precio,desc){
    return ((precio/100)*(100-desc));
}

function calcularPrecio(){
    const Inputprecio= document.getElementById("Inputprecio");
    const Inputporcentaje= document.getElementById("Inputporcentaje");
    const precio=Number(Inputprecio.value);
    const desc= Number(Inputporcentaje.value);

    const preciofinal=calculopreciofinal(precio,desc);
    //document.getElementById('result').innerText = preciofinal;
    result.innerText= "El precio final con descuento es de $ " + preciofinal;
}

const verificationCupon = function () {
    const cupons = [15,30,25];
    const cupon = document.getElementById("cupons");
    const valueCupon = parseInt(cupon.value);
    if (valueCupon === cupons[0]) {
        return cupons[0];
    } else if (valueCupon === cupons[1]) {
        return cupons[1];
    } else if (valueCupon === cupons[2]) {
        return cupons[2];
    } else if (valueCupon === cupons[3]) {
           return cupons[3];  
    } else {
        return 0
    }
}

const preciofinal=