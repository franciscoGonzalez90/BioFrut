// variable del proveedor de datos
var  mysql = require('mysql');

// creando conexion de Base de Datos
var conexion = mysql.createConnection({

	host:'localhost',
	user:'root',
	password:''

});

// definiendo la base de datos que se utilizará
conexion.query('USE gestion');


// Variables que almacenan las operaciones de insertar, obtener, borrar y actualizar

exports.todosLosPerfiles = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM perfil ;", function(err, rows){
		if(err) res.send(err);
		res.send(JSON.stringify(rows));
	});
};

exports.obtenerNombresPerfiles = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Login FROM perfil;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
 exports.obtenerIdPerfil = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdPerfil)+1  as cod  FROM perfil order by IdPerfil  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
exports.obtenerPerfil = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM perfil WHERE IdPerfil="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarPerfil = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO perfil SET ? ;",req.body, function(err, rows){
		console.log(rows);
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarPerfil = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE perfil SET Login='"+req.body.login+"', Password='"+req.body.password+"'' WHERE IdPerfil="+req.body.idPerfil+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarPerfil = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM perfil WHERE IdPerfil="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};