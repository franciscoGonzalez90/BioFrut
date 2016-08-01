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

exports.todosLosFundos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT fundo.IdFundo, fundo.Nombre, fundo.Direccion, ciudad.Nombre as 'Ciudad' FROM fundo, ciudad WHERE fundo.IdCiudad=ciudad.IdCiudad;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombreFundos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM fundo;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
  exports.obtenerIdFundo = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdFundo)+1  as cod  FROM fundo order by IdFundo  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
exports.obtenerFundo = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM fundo WHERE IdFundo="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarFundo = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO fundo VALUES ('"+req.body.IdFundo+"', '"+req.body.Nombre+"', '"+req.body.Direccion+"', (SELECT IdCiudad FROM ciudad WHERE Nombre='"+req.body.IdCiudad+"'));",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarFundo = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE fundo SET Nombre='"+req.body.nombre+"', Direccion='"+req.body.direccion+"'', IdCiudad='"+req.body.ciudad+"'' WHERE IdFundo="+req.body.idFundo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarFundo = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM fundo WHERE IdFundo="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};