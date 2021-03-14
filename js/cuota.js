// Clases

class Nivel {
    constructor (nombre, cantAlumnos, cuota) {
        this.nombre = nombre;
        this.cantAlumnos = cantAlumnos;
        this.cuota = cuota;
        this.cuotaTotal = this.calcularCuota();
    }
    solicitarCantidad () {
        this.cantAlumnos = parseInt(document.getElementById(this.nombre).value);
        this.calcularCuota();
    }
    calcularCuota() {
        this.cuotaTotal = this.cuota * this.cantAlumnos;
        return this.cuotaTotal;
    }
}

// Variables y Constantes

const niveles = {
    inicial: {},
    primario: {},
    secundario: {},
}

const cuota = {
    inicial: 1000,
    primario: 1500,
    secundario: 2000,
}

// Funciones

function calcularDescuento (cantAlumnos, cuotaTotal){
    if (cantAlumnos >= 3){
        return cuotaTotal * 0.25;
    } else {
        return 0;
    }
}

function calcularPrecioFinal (cantAlumnos, cuotaTotal){
    return cuotaTotal - calcularDescuento(cantAlumnos, cuotaTotal);
}

function mostrarCuota (totalAlumnos, totalCuota){
    const resultadoCuota = document.getElementById("resultadoCuota");
    resultadoCuota.innerHTML=`<p>El total de la cuota sera de <strong>$ ${calcularPrecioFinal(totalAlumnos, totalCuota)}</strong></p>`;
}

function submitFormulario(e){
    e.preventDefault();
}

function recalcularCuota(e){
    let totalAlumnos = 0;
    let totalCuota = 0;
    for(const nivel in niveles) {
        niveles[nivel].solicitarCantidad();
        totalAlumnos += niveles[nivel].cantAlumnos;
        totalCuota += niveles[nivel].cuotaTotal;
    }
    mostrarCuota(totalAlumnos, totalCuota);
}

// Ejecucion

let formularioCuota = document.getElementById("formularioCuota");
formularioCuota.addEventListener("submit", submitFormulario);

for(const nivel in niveles){
    niveles[nivel] = new Nivel(nivel, 0, cuota[nivel]); 
    let input = document.getElementById(nivel);
    input.addEventListener("change", recalcularCuota);
}

