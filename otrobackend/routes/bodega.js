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

exports.todasLasBodegas = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT bodega.IdBodega, bodega.Nombre, bodega.Direccion, bodega.Telefono, ciudad.Nombre as 'Ciudad' FROM bodega, ciudad WHERE bodega.IdCiudad=ciudad.IdCiudad;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombreBodegas = function(req, res){
	res.header("Access-Control-Allow-Origin","*")
		
	conexion.query('SELECT Nombre FROM bodega;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});

};

exports.obtenerIdBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdBodega)+1  as cod  FROM bodega order by IdBodega  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
 
exports.obtenerBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM perfil WHERE IdBodega="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO bodega VALUES ('"+req.body.IdBodega+"','"+req.body.Nombre+"','"+req.body.Direccion+"','"+req.body.Telefono+"', (SELECT IdCiudad FROM ciudad WHERE Nombre='"+req.body.IdCiudad+"'));", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE bodega SET Nombre='"+req.body.nombre+"', Direccion='"+req.body.direccion+"'', Telefono='"+req.body.telefono+"'', IdCiudad='"+req.body.idCiudad+"'' WHERE IdBodega="+req.body.idBodega+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM bodega WHERE IdBodega="+req.body.bodega+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};