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

exports.todosLosControles = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT controlcalidad.IdControl, controlcalidad.Fecha, controlcalidad.Hora, controlcalidad.TotalMerma, calificacion.Nota, estadoproducto.Nombre FROM controlcalidad, calificacion, estadoproducto WHERE controlcalidad.IdCalificacion= calificacion.IdCalificacion AND controlcalidad.IdEstadoProducto=estadoproducto.IdEstadoProducto ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombreControles = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT IdControl FROM controlcalidad;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
exports.obtenerIdControl = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdControl)+1  as cod  FROM controlcalidad order by IdControl  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
exports.obtenerControl = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM controlcalidad WHERE IdControl="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarControl = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO controlcalidad VALUES ('"+req.body.IdControl+"', '"+req.body.Fecha+"', '"+req.body.Hora+"', '"+req.body.TotalMerma+"', (SELECT IdCalificacion FROM calificacion WHERE Nota='"+req.body.IdCalificacion+"'), (SELECT IdEstadoProducto FROM estadoproducto WHERE Nombre='"+req.body.IdEstadoProducto+"'));", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarControl = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE controlcalidad SET Fecha='"+req.body.fecha+"', Hora='"+req.body.hora+"'', IdMerma='"+req.body.IdMerma+"'', IdCalificacion='"+req.body.idCalificacion+"'' WHERE IdControl="+req.body.idControl+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarControl = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM controlcalidad WHERE IdControl="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};