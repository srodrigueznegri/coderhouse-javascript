// Constantes

const iva = 0.21;

// Funciones

function pedirPrecio(){
    return Number(prompt("Ingresa un precio para calcular el IVA"));
}

function calcularPrecioFinal(precio, impuesto){
    return precio + (precio * impuesto);
}

function mostrarPrecioFinal(precioFinal){
    alert("El precio con IVA es: $" + precioFinal);
    return;
}

// Ejecucion

var precio = pedirPrecio();
var precioFinal = calcularPrecioFinal(precio, iva);
mostrarPrecioFinal(precioFinal);
