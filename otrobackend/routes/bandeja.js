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

exports.todasLasBandejas = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT bandeja.NumeroBandeja, bandeja.Fecha, bandeja.Hora, tipoproducto.Nombre, tarjetatrabajador.IdTarjeta FROM bandeja, tipoproducto, tarjetatrabajador WHERE bandeja.IdTarjeta=tarjetatrabajador.IdTarjeta AND bandeja.IdTipoProducto=tipoproducto.IdTipoProducto;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};


 
 
exports.obtenerBandeja = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM bandeja WHERE IdTarjeta="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

 exports.obtenerIdBandeja = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdBandeja)+1  as cod  FROM bandeja order by Idbandeja  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarBandeja = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO bandeja VALUES ('"+req.body.IdBandeja+"','"+req.body.NumeroBandeja+"','"+req.body.Fecha+"','"+req.body.Hora+"', '"+req.body.IdTarjeta+"', (SELECT IdTipoProducto FROM tipoproducto WHERE Nombre='"+req.body.IdTipoProducto+"'));",req.body, function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarBandeja = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE bandeja SET Login='"+req.body.login+"', Password='"+req.body.password+"'' WHERE IdPerfil="+req.body.idPerfil+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarBandeja = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM bandeja WHERE IdTarjeta="+req.body.codigo+" and Fecha="+req.body.fecha+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};