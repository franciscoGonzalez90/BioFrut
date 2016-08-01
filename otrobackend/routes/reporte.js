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

exports.obtenerReporteCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT cuadrilla.Nombre, SUM(bandeja.NumeroBandeja) as 'Bandejas', bandeja.Fecha FROM bandeja,cuadrilla,detalle_cuadrilla,tarjetatrabajador WHERE cuadrilla.IdCuadrilla=detalle_cuadrilla.IdCuadrilla AND detalle_cuadrilla.IdTarjeta=tarjetatrabajador.IdTarjeta AND bandeja.IdTarjeta=tarjetatrabajador.IdTarjeta GROUP BY bandeja.Fecha, cuadrilla.Nombre;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	
	});
};

exports.obtenerReporteMensualCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT cuadrilla.Nombre, SUM(bandeja.NumeroBandeja ) AS  'Bandejas', bandeja.Fecha, MONTH( bandeja.Fecha ) AS mes FROM bandeja, cuadrilla, detalle_cuadrilla, tarjetatrabajador WHERE cuadrilla.IdCuadrilla = detalle_cuadrilla.IdCuadrilla AND detalle_cuadrilla.IdTarjeta = tarjetatrabajador.IdTarjeta AND bandeja.IdTarjeta = tarjetatrabajador.IdTarjeta GROUP BY cuadrilla.Nombre, mes", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
		// console.log(rows);
	});
};

exports.obtenerReporteHuerto = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT SUM(bandeja.NumeroBandeja) as 'Bandejas', huerto.Nombre, bandeja.Fecha FROM bandeja INNER JOIN tarjetatrabajador ON tarjetatrabajador.IdTarjeta = bandeja.IdTarjeta INNER JOIN detalle_cuadrilla ON detalle_cuadrilla.IdTarjeta = tarjetatrabajador.IdTarjeta INNER JOIN cuadrilla ON detalle_cuadrilla.IdCuadrilla = cuadrilla.IdCuadrilla INNER JOIN huerto ON huerto.IdHuerto = cuadrilla.IdHuerto group by  huerto.Nombre, bandeja.Fecha;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
		// console.log(rows);
	});
};

exports.obtenerReporteHuertoMensuales = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT SUM(bandeja.NumeroBandeja) as 'Bandejas', huerto.Nombre, MONTH(bandeja.Fecha) as mes FROM bandeja INNER JOIN tarjetatrabajador ON tarjetatrabajador.IdTarjeta = bandeja.IdTarjeta INNER JOIN detalle_cuadrilla ON detalle_cuadrilla.IdTarjeta = tarjetatrabajador.IdTarjeta INNER JOIN cuadrilla ON detalle_cuadrilla.IdCuadrilla = cuadrilla.IdCuadrilla INNER JOIN huerto ON huerto.IdHuerto = cuadrilla.IdHuerto GROUP BY  huerto.Nombre, mes ORDER BY mes;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
		// console.log(rows);
	});
};


// Variables que almacenan las operaciones de insertar, obtener, borrar y actualizar

exports.obtenerPerdidas = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT Month(controlcalidad.Fecha) as mes,SUM(controlcalidad.TotalMerma) as merma FROM controlcalidad GROUP BY mes;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	
	});
};

exports.obtenerGeneradas = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT MONTH( bandeja.Fecha ) AS mes, SUM( bandeja.NumeroBandeja ) AS bandejas FROM bandeja GROUP BY mes;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	
	});
};

exports.obtenerFactorMerma = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT Month(controlcalidad.Fecha) as mes,SUM(controlcalidad.TotalMerma) as merma ,estadoproducto.Nombre as estado FROM controlcalidad,estadoproducto WHERE controlcalidad.IdEstadoProducto=estadoproducto.IdEstadoProducto GROUP BY mes, estado ORDER BY mes;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	
	});
};