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

exports.todosLosTproductos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT tipoproducto.IdTipoProducto, tipoproducto.Nombre, tipoproducto.EstacionCosecha, producto.Nombre as 'IdProducto' FROM tipoproducto, producto  WHERE tipoproducto.IdProducto=producto.IdProducto;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombreTproductos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT Nombre FROM tipoproducto;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

 exports.obtenerIdTproducto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdTipoProducto)+1  as cod  FROM tipoproducto order by IdTipoProducto  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
} 
 
exports.obtenerTproducto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM tipoproducto WHERE IdTipoProducto="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarTproducto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO tipoproducto values ('"+req.body.IdTipoProducto+"','"+req.body.Nombre+"','"+req.body.EstacionCosecha+"', (SELECT IdProducto FROM producto WHERE Nombre='"+req.body.IdProducto+"')) ;",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarTproducto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE tipoproducto SET Nombre='"+req.body.nombre+"', EstacionCosecha='"+req.body.estacionCosecha+"'' WHERE IdTipoProducto="+req.body.idTipoProducto+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarTproducto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM tipoproducto WHERE IdTipoProducto="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};