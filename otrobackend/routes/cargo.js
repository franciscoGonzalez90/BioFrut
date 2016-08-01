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

exports.todosLosCargos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM cargo ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombreCargos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM cargo;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

 exports.obtenerIdCargo = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdCargo)+1  as cod  FROM cargo order by IdCargo  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
 
exports.obtenerCargo = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM cargo WHERE IdCargo="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarCargo = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO cargo SET ? ;",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarCargo = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE cargo SET Nombre='"+req.body.nombre+"', Area='"+req.body.area+"'', Descripcion='"+req.body.descripcion+"' WHERE IdCargo="+req.body.idCargo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarCargo = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM cargo WHERE IdCargo="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};