var mongoose = require('mongoose'),
	Schema	 = mongoose.Schema;

var UsuarioSchema = new Schema({
	usuario: 	{type:String},
	contrasena: {type:String},
	email: 		{type:String},
	idioma: 	{type:String, enum:['es','en','it','jp']}
});

module.exports = mongoose.model('usuarios',UsuarioSchema);