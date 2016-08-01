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

exports.todosLosUsuarios = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT usuario.IdUsuario, usuario.nombre as 'Nombre', usuario.apellido as 'Apellido', cargo.Nombre as 'Cargo', perfil.Login FROM usuario, cargo, perfil WHERE  usuario.IdCargo=cargo.IdCargo AND usuario.IdPerfil=perfil.IdPerfil;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

 exports.obtenerIdUsuario = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query('SELECT max(IdUsuario)+1  as cod  FROM usuario order by IdUsuario  DESC LIMIT 1;',function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};
 
 
exports.obtenerUsuario = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("SELECT * FROM usuario WHERE IdUsuario="+req.params.codigo+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.insertarUsuario = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("INSERT INTO usuario(IdUsuario, Nombre, Apellido, IdPerfil, IdCargo) VALUES ('"+req.body.IdUsuario+"','"+req.body.Nombre+"','"+req.body.Apellido+"',(SELECT IdPerfil FROM perfil WHERE Login='"+req.body.IdPerfil+"' ),(SELECT IdCargo FROM cargo WHERE Nombre='"+req.body.IdCargo+"'));", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.actualizarUsuario = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("UPDATE usuario SET Nombre='"+req.body.nombre+"', Apellido='"+req.body.apellido+"'' WHERE IdPerfil="+req.body.idPerfil+" ;", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};

exports.eliminarUsuario = function(req, res){
	res.header("Access-Control-Allow-Origin","*");
	conexion.query("DELETE FROM usuario WHERE IdUsuario="+req.body.codigo+";", function(err, rows){
		if(err) res.send(err);
		res.send(rows);
	});
};