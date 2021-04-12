//Clase

//Variables

const URLPOST = "https://jsonplaceholder.typicode.com/posts";
const formularioId = '#formularioContacto';

//Funciones

function submitFormulario(e){
    e.preventDefault();
    if(e.target.checkValidity()) {
        $("#staticBackdrop").modal("show");
    } else {
        return;
    }
}

function enviarFormulario(e){
    const formData = $(formularioId).serializeArray();
    $.post(URLPOST, formData ,(respuesta, estado) => {
        if(estado === "success"){
            $("#successModalInfo").html(`<p>Se registro su solicitud con el numero #${respuesta.id}. <br>Nos comunicaremos con usted a la brevedad.</p>`);
            $("#successModal").modal("show");
        }  
    });

}

//Ejecucion

const urlParams = new URLSearchParams(window.location.search);
const keys = urlParams.keys();
let consulta = "";
let sector = undefined;
const alumnosTexto = [];

if (keys) {
    consulta = "Quiero solicitar vacante para:\n";
    for (const key of keys) {
        switch(key) {
            case "inicial": 
            case "primario": 
            case "secundario": 
                alumnosTexto.push(` - ${urlParams.get(key)} alumno/s de nivel ${key}`);
                break;
            case "sector":
                sector = urlParams.get(key);
        }
    }
    consulta += alumnosTexto.join('\n');
    console.log(consulta)
}

$(document).ready(function() {
    $("#sector").val(sector);
    $("#comments").val(consulta);
    $(formularioId).submit(submitFormulario);
    $('#enviar').click(enviarFormulario);
    let datosPrecarga = sessionStorage.getItem("precargaContacto");
    if (datosPrecarga) { 
        const datos = JSON.parse(datosPrecarga);
        for (dato of datos) {
            $(`${formularioId}[name=${dato.name}]`).val(dato.value);
        }
    }

});