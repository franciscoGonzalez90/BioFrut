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

exports.todosLosTrabajadores = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM trabajador ;", function(err, rows){
		if(err) res.send(err);
		res.send(JSON.stringify(rows));
	});
};

exports.obtenerNombreTrabajadores = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Rut FROM trabajador;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
 
exports.obtenerTrabajador = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM trabajador WHERE Rut="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarTrabajador = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO trabajador VALUES ('"+req.body.Rut+"','"+req.body.Nombre+"','"+req.body.Apellido+"','"+req.body.FechaNacimiento+"','"+req.body.Telefono+"') ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarTrabajador = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE trabajador SET Nombre='"+req.body.nombre+"', Apellido='"+req.body.apellido+"'', FechaNacimiento='"+req.body.fechaNacimiento+"'', Telefono='"+req.body.telefono+"'', IdCargo='"+req.body.idCargo+"'' WHERE Rut="+req.body.rut+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarTrabajador = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM trabajador WHERE Rut="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};