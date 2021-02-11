var firstName = prompt("Ingresa tu nombre");
var surname = prompt("Ingresa tu apellido");

if (!firstName && !surname){
    alert("No escribiste ni tu nombre ni tu apellido")
} else if (firstName && !surname){
    alert("No escribiste tu apellido")
} else if (!firstName && surname){
    alert("No escribiste tu nombre")
} else {
    alert("Bienvenido/a " + firstName + " " + surname)
}

