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


 
 
exports.actualizarEstado=function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE cuadrilla SET Estado=0  WHERE Nombre="+req.body.IdEstado+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};


