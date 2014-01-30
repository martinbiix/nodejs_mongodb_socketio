var mongoose = require('mongoose'),
	Schema	 = mongoose.Schema;

var UsuarioSchema = new Schema({
	session: 	{type:String},
	username: 	{type:String},
	password: 	{type:String},
	email: 		{type:String},
	language: 	{type:String, enum:['es','en','it','jp']},
	region: 	{
					//Otra forma de declarar las variables
					city:String,
					country: String
				},
	name: 		{type:String},
	gmt: 		{type:Number},
	friends: 	[{
					_id:String,
					status:Number
	}]
});

module.exports = mongoose.model('usuarios',UsuarioSchema);