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

exports.todosLosEstadoProductos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM estadoproducto;", function(err, rows){
		if(err) res.send(err);
		res.send(JSON.stringify(rows));
	});
};

exports.obtenerNombreEstadoProductos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM estadoproducto;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
exports.obtenerIdEstadoProducto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdEstadoProducto)+1  as cod  FROM estadoproducto order by IdEstadoProducto  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
exports.obtenerEstadoProductos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM estadoproducto WHERE IdEstadoProducto="+req.params.IdEstadoProducto+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarEstadoProductos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO estadoproducto SET ? ;",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarEstadoProductos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE estadoproducto SET CantidadPales='"+req.body.cantidadPales+"', IdBodega='"+req.body.idBodega+"'' WHERE IdStock="+req.body.idStock+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarEstadoProductos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM eliminarEstadoProducto WHERE IdStock="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};