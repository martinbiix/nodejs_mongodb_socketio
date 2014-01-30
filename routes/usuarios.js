//Mandamos llamar el modelo de usuarios
var modelUsuarios = require('../models/usermodel.js');

	exports.nombreFunction = function () {
	    console.log("Ejemplo de una función...");
	}

	exports.buscarUsers = function(io){	
		modelUsuarios.find(function(err,usuarios){
			console.log('Metodo buscarUsers');

			if(!err){
				/*
					Si no encontramos algún error en la respuesta, regresamos lo que nos respondio el servidor
					la respuesta de mongodb viene en formato JSON
				*/
				console.log('Return: '+usuarios);
				io.sockets.emit('response',usuarios);
			}else{
				console.log('ERROR: '+err);
				io.sockets.emit('response','ERROR: '+err);
			}
		});
	}

	exports.agregarUsers = function(io,contenidoUsuario){
		console.log('agregarUsers');
		console.log('contenidoUsuario');

		var usuario = new modelUsuarios({
			username: 	_username,
			password: 	_password,
			email: 		_email,
			language: 	_language,
			region: 	{
							//Otra forma de declarar las variables
							city: _city,
							country: _country 
						},
			name: 		_name,
			gmt: 		_gmt,
			friends: 	[{
							id: '',
							status: '' 
			}]
		});

		//Registrar en la base de datos
		usuario.save(function(err){
			if(!err){
				console.log('Usuario creado');
			}else{
				console.log('ERROR: '+err);
			}
		});

		//Regresar la respuesta del save
		res.send(usuario);
	}