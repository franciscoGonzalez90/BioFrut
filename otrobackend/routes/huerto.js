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

exports.todosLosHuertos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT huerto.IdHuerto, huerto.Nombre, predio.Nombre as 'Predio' FROM huerto, predio WHERE huerto.IdPredio=predio.IdPredio;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombreHuertos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM huerto;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
  exports.obtenerIdHuerto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdHuerto)+1  as cod  FROM huerto order by IdHuerto  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 

exports.obtenerHuerto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM huerto WHERE IdHuerto="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarHuerto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO huerto VALUES ('"+req.body.IdHuerto+"', '"+req.body.Nombre+"', (SELECT IdPredio FROM predio WHERE Nombre='"+req.body.IdPredio+"'));",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarHuerto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE huerto SET Nombre='"+req.body.nombre+"', IdPredio='"+req.body.idPredio+"'' WHERE IdHuerto="+req.body.idHuerto+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarHuerto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM huerto WHERE IdHuerto="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};