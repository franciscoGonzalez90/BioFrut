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

exports.todasLasRegiones = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT region.IdRegion, region.Nombre, pais.Nombre as 'Pais' FROM region, pais WHERE region.IdPais=pais.IdPais;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombreRegiones = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM region;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerIdRegion = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdRegion)+1  as cod  FROM region order by IdRegion  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
}
 
 
exports.obtenerRegion = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM region WHERE IdRegion="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarRegion = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO region VALUES ('"+req.body.IdRegion+"','"+req.body.Region+"',(SELECT IdPais FROM pais WHERE Nombre='"+req.body.IdPais+"'));",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarRegion = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE region SET Nombre='"+req.body.nombre+"', IdPais='"+req.body.idPais+"'' WHERE IdRegion="+req.body.idRegion+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarRegion = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM region WHERE Idregion="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};