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

exports.todasLasCuadrillas = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT cuadrilla.IdCuadrilla, cuadrilla.Nombre, tarjetatrabajador.IdTarjeta, huerto.Nombre as 'Huerto' FROM cuadrilla, tarjetatrabajador, huerto WHERE  cuadrilla.IdHuerto=huerto.IdHuerto;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombreCuadrillas = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM cuadrilla;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
  exports.obtenerIdCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdCuadrilla)+1  as cod  FROM cuadrilla order by IdCuadrilla  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM cuadrilla WHERE IdCuadrilla="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO cuadrilla VALUES ("+req.body.IdCuadrilla+", '"+req.body.Nombre+"', (SELECT IdHuerto FROM huerto WHERE Nombre='"+req.body.IdHuerto+"') );", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE cuadrilla SET Nombre='"+req.body.nombre+"' WHERE IdCuadrilla="+req.body.IdCuadrilla+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM cuadrilla WHERE IdCuadrilla="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};