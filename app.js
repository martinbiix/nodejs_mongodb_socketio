var express =require('express'),
    http    =require('http'),
    app     =express(),
    server  =http.createServer(app),
    puerto  =3000;

    server.listen(puerto);
    var io  =require('socket.io').listen(server);

    /*
        Implementando mongodb
    */
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/andtest1',function(err,res){
        if(err){
            console.log('ERROR: Conectando a la Base de datos. '+err);
        }else{
            console.log('Conectado a la Base de datos');
        }
    });

    //Obtener los metodos para los usuarios
    var usuarios = require('./routes/usuarios');
    io.sockets.on('connection',function(socket){
        //console.log('Śe detecto un cliente!');

        socket.on('pepito',function(){

        });

        socket.on('login',function(dato){
            /*
                Ejecutamos el metodo buscarUsers que se encuentra en el archivo /routes/usuarios.js
                Le enviamos el parametro 'io' el cual es el que contiene todos los sockets del server
            */
            usuarios.buscarUsers(io);
        });

	socket.on('register',function(jsonUser){
	   console.log('Registro del usuario! ->' +jsonUser);
	});

	socket.on('friends',function(IDUser){
	 
	  console.log('Lista de usuarios!! '+IDUser);
	});

        socket.on('logout',function(dato){
            var response =':(';
            console.log('Logout!!  '+response);
            io.sockets.emit('response',response);
        });
    });
