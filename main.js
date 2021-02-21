// Variables

var precio = 0;
var iva = 0.21;
var precioFinal = 0;

// Funciones

function pedirPrecio(){
    precio = Number(prompt("Ingresa un precio para calcular el IVA"));
}

function calcularPrecioFinal(){
    precioFinal = precio + (precio * iva);
}

function mostrarPrecioFinal(){
    alert("El precio con IVA es: $" + precioFinal);
}

// Ejecucion

pedirPrecio();
calcularPrecioFinal();
mostrarPrecioFinal();
