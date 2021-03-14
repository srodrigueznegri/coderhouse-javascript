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

const nombreNiveles = ["inicial", "primario", "secundario"];

const niveles = [];

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

function mostrarCuotas (niveles, totalAlumnos, totalCuota){
    const resultadoCuota = document.getElementById("resultadoCuota");
    let htmlCuotas = "";
    for(let nivel of niveles) {
        htmlCuotas += `<p>El total de la cuota del <strong>${nivel.nombre}</strong> sera de <strong>$ ${nivel.cuotaTotal}</strong></p>`;
    }
    const descuento = calcularDescuento(totalAlumnos, totalCuota);
    if (descuento) {
        htmlCuotas += `<p><strong>Beneficio</strong> por 3 o mas estudiantes: <strong>$ -${descuento}</strong></p>`;
    }    
    htmlCuotas += "<hr>";
    htmlCuotas += `<p>El total de la cuota sera de <strong>$ ${calcularPrecioFinal(totalAlumnos, totalCuota)}</strong></p>`;
    resultadoCuota.innerHTML=htmlCuotas;
}

function submitFormulario(e){
    e.preventDefault();
}

function recalcularCuota(e){
    let totalAlumnos = 0;
    let totalCuota = 0;
    for(const nivel of niveles) {
        nivel.solicitarCantidad();
        totalAlumnos += nivel.cantAlumnos;
        totalCuota += nivel.cuotaTotal;
    }
    mostrarCuotas(niveles, totalAlumnos, totalCuota);
}

// Ejecucion

let formularioCuota = document.getElementById("formularioCuota");
formularioCuota.addEventListener("submit", submitFormulario);

for(const nombreNivel of nombreNiveles){
    niveles.push(new Nivel(nombreNivel, 0, cuota[nombreNivel])); 
    let input = document.getElementById(nombreNivel);
    input.addEventListener("change", recalcularCuota);
}

