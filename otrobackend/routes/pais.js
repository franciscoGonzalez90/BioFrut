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

exports.todosLosPaises = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM pais;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombrePaises = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM pais;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

 exports.obtenerIdPais= function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdPais)+1  as cod  FROM pais order by IdPais  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
 
exports.obtenerPais = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM pais WHERE IdPais="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarPais = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO pais SET ? ;",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarPais = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE pais SET Nombre='"+req.body.nombre+"' WHERE IdPais="+req.body.idPais+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarPais = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM pais WHERE IdPais="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};