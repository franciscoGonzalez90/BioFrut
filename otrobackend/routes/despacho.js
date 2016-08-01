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

exports.todosLosDespachos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT despacho.IdDespacho, despacho.Fecha, despacho.Hora, despacho.CantidadPale, tipoproducto.Nombre, controlcalidad.IdControl, cuadrilla.Nombre as 'Cuadrilla' FROM despacho, tipoproducto, controlcalidad, cuadrilla WHERE despacho.IdTipoProducto=tipoproducto.IdTipoProducto AND despacho.IdControl=controlcalidad.IdControl AND despacho.IdCuadrilla=cuadrilla.IdCuadrilla;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.obtenerNombreDespachos = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT IdDespacho FROM despacho;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
  exports.obtenerIdDespacho = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdDespacho)+1  as cod  FROM despacho order by IdDespacho  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
exports.obtenerDespacho= function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM despacho WHERE IdDespacho="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarDespacho = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO despacho VALUES ('"+req.body.IdDespacho+"','"+req.body.Fecha+"','"+req.body.Hora+"','"+req.body.CantidadPale+"', (SELECT IdTipoProducto FROM tipoproducto WHERE Nombre='"+req.body.IdTipoProducto+"'), '"+req.body.IdControl+"',(SELECT IdCuadrilla FROM cuadrilla WHERE Nombre='"+req.body.IdCuadrilla+"'));", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarDespacho = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE despacho SET CantidadBandeja='"+req.body.cantidadBandeja+"', Fecha='"+req.body.fecha+"'', hora='"+req.body.hora+"'', IdGuia='"+req.body.idGuia+"'', IdStock='"+req.body.idStock+"'', IdControl='"+req.body.idControl+"'' WHERE IdPale="+req.body.idPale+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarDespacho = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM despacho WHERE IdPale="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};