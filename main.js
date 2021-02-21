var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function esPar(numero){
    return ((numero % 2) == 0);
}

for (var i=1; i<8; i++) {
    if (i == 7){
        alert("El dia numero 7 es el: " + dias[i-1]);
    }
    if (esPar(i)) {
        console.log("El " + dias[i-1] + " es par.");
    }
}