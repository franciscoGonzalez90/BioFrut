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

exports.todasLasTarjetas = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM tarjetatrabajador;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombreTarjetas = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT IdTarjeta FROM tarjetatrabajador;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerIdTarjeta = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdTarjeta)+1  as cod  FROM tarjetatrabajador order by IdTarjeta  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
}
 
 
exports.obtenerTarjeta = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM tarjetatrabajador WHERE IdTarjeta="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarTarjeta = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO tarjetatrabajador VALUES ('"+req.body.IdTarjeta+"','"+req.body.FechaIngreso+"','"+req.body.Rut+"');",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarTarjeta = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE tarjetatrabajador SET FechaIngreso='"+req.body.fechaIngreso+"', Rut='"+req.body.rut+"'' WHERE IdTarjeta="+req.body.idTarjeta+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarTarjeta = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM tarjetatrabajador WHERE IdTarjeta="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};