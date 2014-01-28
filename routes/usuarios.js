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

				return usuarios;
			}else{
				return 'ERROR: '+err;
				console.log('ERROR: '+err);
			}
		});
	}