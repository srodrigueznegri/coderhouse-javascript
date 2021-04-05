// Clases
class Nivel {
    constructor (nombre, cantAlumnos, cuota) {
        this.nombre = nombre;
        this.cantAlumnos = cantAlumnos;
        this.cuota = cuota;
        this.cuotaTotal = this.calcularCuota();
    }
    solicitarCantidad () {
        this.cantAlumnos = parseInt($('#'+this.nombre).val());
        this.calcularCuota();
    }
    calcularCuota() {
        this.cuotaTotal = this.cuota * this.cantAlumnos;
        return this.cuotaTotal;
    }
}

// Variables y Constantes

const nombreNiveles = ["inicial", "primario", "secundario"];

let niveles = [];

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
    let htmlCuotas = "";
    for(let nivel of niveles) {
        if (nivel.cuotaTotal) {
            htmlCuotas += `<p>El total de la cuota del <strong>${nivel.nombre}</strong> sera de <strong>$ ${nivel.cuotaTotal}</strong></p>`;
        }
    }
    const descuento = calcularDescuento(totalAlumnos, totalCuota);
    if (descuento) {
        htmlCuotas += `<p><strong>Beneficio</strong> por 3 o mas estudiantes: <strong>$ -${descuento}</strong></p>`;
    }    
    htmlCuotas += "<hr>";
    htmlCuotas += `<p>El total de la cuota sera de <strong>$ ${calcularPrecioFinal(totalAlumnos, totalCuota)}</strong></p>`;
    $('#resultadoCuota').html(htmlCuotas);
    aparecerCuotas();
}

function submitFormulario(e){
    e.preventDefault();
}

function recalcularCuota(e){
    let totalAlumnos = 0;
    let totalCuota = 0;
    for(const nivel of niveles) {
        nivel.solicitarCantidad();
        if (nivel.cuotaTotal) {
            totalAlumnos += nivel.cantAlumnos;
            totalCuota += nivel.cuotaTotal;
        }
    }
    localStorage.setItem("niveles", JSON.stringify(niveles));
    mostrarCuotas(niveles, totalAlumnos, totalCuota);
}

function aparecerCuotas() {
    aparecerCuota(1, 
        () => aparecerCuota(2, 
            () => aparecerCuota(3, 
                () => aparecerCuota(4, 
                    () => aparecerCuota(5, 
                        () => aparecerCuota(6)
                    )
                )
            )
        )
    );
}

function aparecerCuota(index, callback = null) {
    if (callback) {
        return $(`#resultadoCuota > *:nth-child(${index})`).fadeIn('slow', callback);
    }
  return $(`#resultadoCuota > *:nth-child(${index})`).fadeIn('slow');
}

// Ejecucion

$(document).ready(function() {
    $('#formularioCuota').submit(submitFormulario);
    
    // Asignamos la funcion recalcularCuota a cada input
    for (const nombreNivel of nombreNiveles){
        $('#'+nombreNivel).on('input', recalcularCuota);
    }
    
    // Traemos los ultimos datos ingresados por el usuario
    const nivelesGuardados = localStorage.getItem("niveles");
    // Si hay datos guardados cargamos los datos en el formulario y recalculamos
    if (nivelesGuardados) {
        // parseamos el JSON como un array de objetos
        const nivelesSinMetodo = JSON.parse(nivelesGuardados);
        for (let nivel of nivelesSinMetodo){
            // cargamos el array de objetos con objetos de la clase Nivel
            // para tener acces a los metodos de la clase
            niveles.push(new Nivel(nivel.nombre, nivel.cantAlumnos, nivel.cuota));
            // cargar cantAlumnos en el input correspondiente
            $('#'+nivel.nombre).val(nivel.cantAlumnos);
        }
        recalcularCuota();
    } else {
        // si no hay elementos guardados inicializamos el array de objetos niveles sin alumnos
        for (const nombreNivel of nombreNiveles){
            niveles.push(new Nivel(nombreNivel, 0, cuota[nombreNivel]));
        }
    }
});


