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

exports.todosLosAlmacenajes = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM  tipoalmacenaje;", function(err, rows){
		if(err) res.send(err);
		res.send(JSON.stringify(rows));
	});
};

exports.obtenerNombreAlmacenajes = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM tipoalmacenaje;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 

 exports.obtenerIdAlmacenaje = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdTipoAlmacenaje)+1  as cod  FROM tipoalmacenaje order by IdTipoAlmacenaje  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
}
 
exports.obtenerAlmacenaje = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM tipoalmacenaje WHERE IdTipoAlmacenaje="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarAlmacenaje = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO tipoalmacenaje SET ? ;",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarAlmacenaje = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE tipoalmacenaje SET Nombre='"+req.body.nombre+"' WHERE IdTipoAlmacenaje="+req.body.idtipoalmacenaje+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarAlmacenaje = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM tipoalmacenaje WHERE IdTipoAlmacenaje="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};