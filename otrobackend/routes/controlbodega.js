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

exports.todosLosControlesBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT controlbodega.IdControlBodega, controlbodega.CantidadPale, controlcalidad.IdControl, despacho.IdDespacho, zona.Nombre FROM controlbodega, controlcalidad, despacho, zona WHERE controlbodega.IdControl=controlcalidad.IdControl AND controlbodega.IdDespacho=despacho.IdDespacho AND controlbodega.IdZona=zona.IdZona;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombreControlBodegas = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT IdControlBodega FROM controlbodega;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerIdControlBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdControlBodega)+1  as cod  FROM controlbodega order by IdControlbodega  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

 
 
exports.obtenerControlBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM controlbodega WHERE IdControlBodega="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarControlBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO controlbodega VALUES ('"+req.body.IdControlBodega+"', '"+req.body.CantidadPale+"', '"+req.body.IdControl+"', '"+req.body.IdDespacho+"', ( SELECT IdZona FROM zona WHERE Nombre='"+req.body.IdZona+"'));", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarControlBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE controlbodega SET CantidadPale='"+req.body.cantidadPale+"', Fecha='"+req.body.fecha+"'', Hora='"+req.body.hora+"'' WHERE IdGuia="+req.body.idGuia+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarControlBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM controlbodega WHERE IdControlBodega="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};