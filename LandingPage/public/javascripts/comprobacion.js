function validar(email) {

	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	error = true;

    if (!expr.test(email.value)){
    	alert("Error: La dirección de correo " + email.value + " es incorrecta.");
    	error = false;
    }

	return error;    
}