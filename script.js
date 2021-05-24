function alerta()
    {
    var mensaje;
    var opcion = prompt("Dejenos su mail y pronto nos pondremos en contacto:");
    if (opcion == true) {
        mensaje = "Has clickado OK";
	} else {
	    mensaje = "Has clickado Cancelar";
	}
	document.getElementById("ejemplo").innerHTML = mensaje;
}