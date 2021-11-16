function calculopreciofinal(precio,desc){
    return (precio/100)*(100-desc);
}

function calcularPrecio(){
    const Inputprecio= document.getElementById("Inputprecio");
    const Inputporcentaje= document.getElementById("Inputporcentaje");
    const precio=Number(Inputprecio.value);
    const desc= Number(Inputporcentaje.value);

    const preciofinal=calculopreciofinal(precio,desc);
    document.getElementById('result').innerText = preciofinal;
}