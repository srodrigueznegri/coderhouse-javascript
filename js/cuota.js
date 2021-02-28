
// Variables y Constantes

const alumnos = {
    inicial: 0,
    primario: 0,
    secundario: 0,
}

const cuota = {
    inicial: 1000,
    primario: 1500,
    secundario: 2000,
}

let totalAlumnos = 0;

let totalCuota = 0;

// Funciones

function solicitarCantidad (alumnos, nivel){
    alumnos[nivel] = parseInt(prompt("¿Cuántos hijos/as tenés en el Nivel " + nivel.toUpperCase() + "?"))
}

function calcularDescuento (cantAlumnos, cuotaTotal){
    if (cantAlumnos >= 3){
        return cuotaTotal * 0.25;
    } else {
        return 0;
    }
}

function calcularPrecioFinal (cantAlumnos, cuotaTotal){
    return totalCuota - calcularDescuento(totalAlumnos, totalCuota);
}
// Ejecucion

for(const nivel in alumnos) {
    solicitarCantidad(alumnos, nivel);
    totalAlumnos += alumnos[nivel];
    totalCuota += alumnos[nivel] * cuota[nivel];
}

alert("El total de la cuota sera de $ " + calcularPrecioFinal(totalAlumnos, totalCuota));

