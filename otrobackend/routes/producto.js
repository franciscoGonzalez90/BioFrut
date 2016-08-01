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

exports.todosLosProductos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM producto ;", function(err, rows){
		if(err) res.send(err);
		res.send(JSON.stringify(rows));
	});
};

exports.obtenerNombreProductos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM producto;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
exports.obtenerIdProducto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdProducto)+1  as cod  FROM producto order by IdProducto  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
}
 
exports.obtenerProducto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM producto WHERE IdProducto="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarProducto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO producto SET ? ;",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarProducto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE producto SET Nombre='"+req.body.nombre+"' WHERE IdProducto="+req.body.idProducto+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarProducto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM producto WHERE IdProducto="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};