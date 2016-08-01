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

exports.todasLasZonas = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT zona.IdZona, zona.Nombre, bodega.Nombre as 'Bodega', tipoalmacenaje.Nombre as 'Almacenaje' FROM zona, bodega, tipoalmacenaje WHERE zona.IdBodega=bodega.IdBodega AND zona.IdTipoAlmacenaje=tipoalmacenaje.IdTipoAlmacenaje ;", function(err, rows){
		if(err) res.send(err);
		res.send(JSON.stringify(rows));
	});
};

exports.obtenerNombreZonas = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM zona;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

 exports.obtenerIdZona = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdZona)+1  as cod  FROM zona order by IdZona  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
 
exports.obtenerZona = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM zona WHERE IdZona="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarZona = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO zona VALUES ('"+req.body.IdZona+"', '"+req.body.Nombre+"', (SELECT IdBodega FROM bodega WHERE Nombre='"+req.body.IdBodega+"'), (SELECT IdTipoAlmacenaje FROM tipoalmacenaje WHERE Nombre='"+req.body.IdTipoAlmacenaje+"'));",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarZona = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE zona SET Nombre='"+req.body.nombre+"' , TotalPale='"+req.body.TotalPale+"'', IdBodega='"+req.body.IdBodega+"'', IdTipoAlmacenaje='"+req.body.IdTipoAlmacenaje+"'' WHERE IdZona="+req.body.IdZona+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarZona = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM zona WHERE IdZona="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};