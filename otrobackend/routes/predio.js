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

exports.todosLosPredios = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT predio.IdPredio, predio.Nombre, fundo.Nombre as 'Fundo' FROM predio, fundo WHERE predio.IdFundo=fundo.IdFundo;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombrePredios = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM predio;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
exports.obtenerIdPredio = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdPredio)+1  as cod  FROM predio order by IdPredio  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

 
exports.obtenerPredio = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM predio WHERE IdPredio="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarPredio = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO predio VALUES ('"+req.body.IdPredio+"','"+req.body.Nombre+"', (SELECT IdFundo FROM fundo WHERE Nombre='"+req.body.IdFundo+"'));", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarPredio = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE predio SET Nombre='"+req.body.nombre+"', IdFundo='"+req.body.idFundo+"'' WHERE IdPredio="+req.body.idPredio+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarPredio = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM predio WHERE IdPredio="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};