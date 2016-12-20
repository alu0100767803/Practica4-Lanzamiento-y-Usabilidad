function baseDatos(){
	var nick = document.getElementById("nick").value;
	var nombre = document.getElementById("name").value;
	var apellidos = document.getElementById("apellidos").value;
	var email = document.getElementById("email").value;

	var comentario = document.getElementById("comentario").value;

			var obj ={
			nombre: nombre,
			apellidos: apellidos,
			email: email,
			comentario: comentario,
			nick: nick
		};

		firebase.database().ref("Usuarios/" + nick).set(obj);
}