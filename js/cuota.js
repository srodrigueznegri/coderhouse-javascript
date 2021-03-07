// Clases
class Nivel {
    constructor (nombre, cantAlumnos, cuota) {
        this.nombre = nombre;
        this.cantAlumnos = cantAlumnos;
        this.cuota = cuota;
        this.cuotaTotal = this.calcularCuota();
    }
    solicitarCantidad () {
        this.cantAlumnos = parseInt(prompt("¿Cuántos hijos/as tenés en el Nivel " + this.nombre.toUpperCase() + "?"));
        this.calcularCuota();
    }
    calcularCuota() {
        this.cuotaTotal = this.cuota * this.cantAlumnos;
        return this.cuotaTotal;
    }
}

// Variables y Constantes

const niveles = [];

const cuotas = {
    inicial: 1000,
    primario: 1500,
    secundario: 2000,
}

let totalAlumnos = 0;

let totalCuota = 0;

// Funciones

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

for (const nivel in cuotas) {
    niveles.push(new Nivel(nivel, 0, cuotas[nivel])); 
}

for (const nivel of niveles) {
    nivel.solicitarCantidad();
    totalAlumnos += nivel.cantAlumnos;
    totalCuota += nivel.cuotaTotal;
}

alert("El total de la cuota sera de $ " + calcularPrecioFinal(totalAlumnos, totalCuota));

