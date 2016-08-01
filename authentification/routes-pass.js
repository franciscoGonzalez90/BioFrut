
// app/routes.js
module.exports = function(app, passport) {

		var usuario = require('../otrobackend/routes/usuario');
		var perfil = require('../otrobackend/routes/perfil'); 
		var cargo = require('../otrobackend/routes/cargo');
		var bandeja = require('../otrobackend/routes/bandeja');
		var bodega = require('../otrobackend/routes/bodega');
		var calificacion = require('../otrobackend/routes/calificacion');
		var ciudad = require('../otrobackend/routes/ciudad');
		var control = require('../otrobackend/routes/control');
		var cuadrilla = require('../otrobackend/routes/cuadrilla');
		var fundo = require('../otrobackend/routes/fundo');
		var controlbodega = require('../otrobackend/routes/controlbodega');
		var huerto = require('../otrobackend/routes/huerto');
		var pais = require('../otrobackend/routes/pais');
		var despacho = require('../otrobackend/routes/despacho');
		var predio = require('../otrobackend/routes/predio');
		var producto = require('../otrobackend/routes/producto');
		var region = require('../otrobackend/routes/region');
        var estadoproducto = require('../otrobackend/routes/estadoproducto');
		var tarjeta = require('../otrobackend/routes/tarjeta');
		var almacenaje = require('../otrobackend/routes/almacenaje');
		var tproducto = require('../otrobackend/routes/tproducto');
		var trabajador = require('../otrobackend/routes/trabajador');
		var zona = require('../otrobackend/routes/zona');
		var estado=require('../otrobackend/routes/estado');
		var reporte=require('../otrobackend/routes/reporte');


	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/error', function(req, res) {
		// console.log(res.body);
		res.redirect('./views/error.html');
		// render the page and pass in any flash data if it exists
		// res.render('login', { message: req.flash('loginMessage') });
	});

	app.get('/admin', function(req, res) {
		// console.log(req.ip);
		res.redirect('./views/Admin.html');
		// res.render('views/profile.html', {
		// 	user : req.user // get the user out of session and pass to template
		// });
	});


	app.get('/profile', function(req, res) {
		
		if(req.get('host') === 'localhost:3000' || req.get('host') === '192.168.1.100:3000' ){

			res.redirect('./views/profile.html');


		}else if(req.get('host') === 'localhost:5000' || req.get('host') === '192.168.1.100:5000'){

			switch(req.user.cargo){

				case 'Administrador': res.redirect('./views/Admin.html');
						
				 break;

				case 'Digitador': res.redirect('./views/templateMenuProduccion.html');

				 break;

				case 'Bodeguero':res.redirect('./views/templateMenuBodega.html'); 

				 break;

				case 'Gerente':res.redirect('./views/templateMenuGerente.html');

				 break;

				 default:res.redirect('/');

				 break;
			}
			

		}
		
	
	});


	// process the login form
	app.post('/systemLogin', passport.authenticate('local-login', {

            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/error', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
            // passReqToCallback: true
		}),function(req, res) {
        	
            if (req.body.remember) {
             
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = true;
            }

        	res.redirect('/');

    });


	app.get('/reporte/obtenerFactorMerma', reporte.obtenerFactorMerma);	

    app.post('/estado/actualizarEstado/estado', estado.actualizarEstado);

    app.get('/reporte/obtenerPerdidas', reporte.obtenerPerdidas);

    app.get('/reporte/obtenerGeneradas', reporte.obtenerGeneradas);
    
    app.get('/reporte/reporteProduccionCuadrilla', reporte.obtenerReporteCuadrilla);

    app.get('/reporte/reporteProduccionMensualCuadrilla', reporte.obtenerReporteMensualCuadrilla);
    
    app.get('/reporte/reporteProduccionHuerto', reporte.obtenerReporteHuerto);

    app.get('/reporte/reporteHuertoMensuales', reporte.obtenerReporteHuertoMensuales);


	app.get('/usuario/todosLosUsuarios',usuario.todosLosUsuarios);

	app.get('/usuario/obtenerUsuario/:codigo',usuario.obtenerUsuario);

	app.get('/usuario/obtenerIdUsuario', usuario.obtenerIdUsuario);

	app.post('/usuario/insertarUsuario/usuario',usuario.insertarUsuario);

	app.put('/usuario/actualizarUsuario', usuario.actualizarUsuario);

	app.delete('/usuario/eliminarUsuario',usuario.eliminarUsuario);


	// rutas de las solicitudes a la tabla perfil
	app.get('/perfil/todosLosPerfiles', perfil.todosLosPerfiles);

	app.get('/perfil/obtenerNombresPerfiles', perfil.obtenerNombresPerfiles);

	app.get('/perfil/obtenerIdPerfil', perfil.obtenerIdPerfil);

	app.get('/perfil/obtenerPerfil/:codigo', perfil.obtenerPerfil);

	app.post('/perfil/insertarPerfil/perfil', perfil.insertarPerfil);

	app.put('/perfil/actualizarPerfil', perfil.actualizarPerfil);

	app.delete('/perfil/eliminarPerfil', perfil.eliminarPerfil);



	// rutas de las solicitudes a la tabla cargo
	app.get('/cargo/todosLosCargos', cargo.todosLosCargos);

	app.get('/cargo/obtenerNombreCargos',cargo.obtenerNombreCargos);

	app.get('/cargo/obtenerIdCargo', cargo.obtenerIdCargo);

	app.get('/cargo/obtenerCargo/:codigo', cargo.obtenerCargo);

	app.post('/cargo/insertarCargo/cargo', cargo.insertarCargo);

	app.put('/cargo/actualizarCargo', cargo.actualizarCargo);

	app.delete('/cargo/eliminarCargo', cargo.eliminarCargo);


	// rutas de las solicitudes a la tabla bandeja
	app.get('/bandeja/todasLasBandejas', bandeja.todasLasBandejas);

	// app.get('/usuario/obtenerDatosUsuarios',usuario.obtenerDatosUsuarios);

	app.get('/bandeja/obtenerBandeja/:codigo', bandeja.obtenerBandeja);

	app.get('/bandeja/obtenerIdBandeja', bandeja.obtenerIdBandeja);

	app.post('/bandeja/insertarBandeja/bandeja', bandeja.insertarBandeja);

	app.put('/bandeja/actualizarBandeja', bandeja.actualizarBandeja);

	app.delete('/bandeja/eliminarBandeja', bandeja.eliminarBandeja);


	// rutas de las solicitudes a la tabla bodega
	app.get('/bodega/todasLasBodegas', bodega.todasLasBodegas);

	app.get('/bodega/obtenerNombreBodegas', bodega.obtenerNombreBodegas);

	app.get('/bodega/obtenerIdBodega', bodega.obtenerIdBodega);

	app.get('/bodega/obtenerBodega/:codigo', bodega.obtenerBodega);

	app.post('/bodega/insertarBodega/bodega', bodega.insertarBodega);

	app.put('/bodega/actualizarBodega', bodega.actualizarBodega);

	app.delete('/bodega/eliminarBodega', bodega.eliminarBodega);


	// rutas de las solicitudes a la tabla calificacion
	app.get('/calificacion/todasLasCalificaciones', calificacion.todasLasCalificaciones);

	app.get('/calificacion/obtenerNombreCalificaciones', calificacion.obtenerNombreCalificaciones);

	app.get('/calificacion/obtenerIdCalificacion', calificacion.obtenerIdCalificacion);

	app.get('/calificacion/obtenerCalificacion/:codigo', calificacion.obtenerCalificacion);

	app.post('/calificacion/insertarCalificacion/calificacion', calificacion.insertarCalificacion);

	app.put('/calificacion/actualizarCalificacion', calificacion.actualizarCalificacion);

	app.delete('/calificacion/eliminarCalificacion', calificacion.eliminarCalificacion);


	// rutas de las solicitudes a la tabla ciudad
	app.get('/ciudad/todasLasCiudades', ciudad.todasLasCiudades);

	app.get('/ciudad/obtenerNombreCiudades', ciudad.obtenerNombreCiudades);

	app.get('/ciudad/obtenerIdCiudad', ciudad.obtenerIdCiudad);

	app.get('/ciudad/obtenerCiudad/:codigo', ciudad.obtenerCiudad);

	app.post('/ciudad/insertarCiudad/ciudad', ciudad.insertarCiudad);

	app.put('/ciudad/actualizarCiudad', ciudad.actualizarCiudad);

	app.delete('/ciudad/eliminarCiudad', ciudad.eliminarCiudad);


	// rutas de las solicitudes a la tabla control
	app.get('/control/todosLosControles', control.todosLosControles);

	app.get('/control/obtenerNombreControles', control.obtenerNombreControles);

	app.get('/control/obtenerIdControl', control.obtenerIdControl);

	app.get('/control/obtenerControl/:codigo', control.obtenerControl);

	app.post('/control/insertarControl/control', control.insertarControl);

	app.put('/control/actualizarControl', control.actualizarControl);

	app.delete('/control/eliminarControl', control.eliminarControl);


	// rutas de las solicitudes a la tabla cuadrilla
	app.get('/cuadrilla/todasLasCuadrillas', cuadrilla.todasLasCuadrillas);

	app.get('/cuadrilla/obtenerNombreCuadrillas', cuadrilla.obtenerNombreCuadrillas);

	app.get('/cuadrilla/obtenerIdCuadrilla', cuadrilla.obtenerIdCuadrilla);

	app.get('/cuadrilla/obtenerCuadrilla/:codigo', cuadrilla.obtenerCuadrilla);

	app.post('/cuadrilla/insertarCuadrilla/cuadrilla', cuadrilla.insertarCuadrilla);

	app.put('/cuadrilla/actualizarCuadrilla', cuadrilla.actualizarCuadrilla);

	app.delete('/cuadrilla/eliminarCuadrilla', cuadrilla.eliminarCuadrilla);


	// rutas de las solicitudes a la tabla fundo
	app.get('/fundo/todosLosFundos', fundo.todosLosFundos);

	app.get('/fundo/obtenerNombreFundos', fundo.obtenerNombreFundos);

	app.get('/fundo/obtenerIdFundo', fundo.obtenerIdFundo);

	app.get('/fundo/obtenerFundo/:codigo', fundo.obtenerFundo);

	app.post('/fundo/insertarFundo/fundo', fundo.insertarFundo);

	app.put('/fundo/actualizarFundo', fundo.actualizarFundo);

	app.delete('/fundo/eliminarFundo', fundo.eliminarFundo);


	// rutas de las solicitudes a la tabla guia
	app.get('/controlbodega/todosLosControlesBodega',controlbodega.todosLosControlesBodega);

	app.get('/controlbodega/obtenerNombreControlBodegas', controlbodega.obtenerNombreControlBodegas);

	app.get('/controlbodega/obtenerIdControlBodega', controlbodega.obtenerIdControlBodega);

	app.get('/controlbodega/obtenerControlBodega/:codigo', controlbodega.obtenerControlBodega);

	app.post('/controlbodega/insertarControlBodega/controlbodega', controlbodega.insertarControlBodega);

	app.put('/controlbodega/actualizarControlBodega',controlbodega.actualizarControlBodega);

	app.delete('/controlbodega/eliminarControlBodega', controlbodega.eliminarControlBodega);



	// rutas de las solicitudes a la tabla huerto
	app.get('/huerto/todosLosHuertos', huerto.todosLosHuertos);

	app.get('/huerto/obtenerNombreHuertos', huerto.obtenerNombreHuertos);

	app.get('/huerto/obtenerIdhuerto', huerto.obtenerIdHuerto);

	app.get('/huerto/obtenerHuerto/:codigo', huerto.obtenerHuerto);

	app.post('/huerto/insertarHuerto/huerto', huerto.insertarHuerto);

	app.put('/huerto/actualizarHuerto', huerto.actualizarHuerto);

	app.delete('/huerto/eliminarHuerto', huerto.eliminarHuerto);


	// rutas de las solicitudes a la tabla merma
	app.get('/despacho/todosLosDespachos', despacho.todosLosDespachos);

	app.get('/despacho/obtenerNombreDespachos', despacho.obtenerNombreDespachos);

	app.get('/despacho/obtenerIdDespacho', despacho.obtenerIdDespacho);

	app.get('/despacho/obtenerDespacho:codigo', despacho.obtenerDespacho);

	app.post('/despacho/insertarDespacho/despacho', despacho.insertarDespacho);

	app.put('/despacho/actualizarDespacho' , despacho.actualizarDespacho);

	app.delete('/despacho/eliminarDespacho', despacho.eliminarDespacho);


	// rutas de las solicitudes a la tabla pais
	app.get('/pais/todosLosPaises', pais.todosLosPaises);

	app.get('/pais/obtenerNombrePaises', pais.obtenerNombrePaises);

	app.get('/pais/obtenerIdPais', pais.obtenerIdPais);

	app.get('/pais/obtenerPais/:codigo', pais.obtenerPais);

	app.post('/pais/insertarPais/pais', pais.insertarPais);

	app.put('/pais/actualizarPais', pais.actualizarPais);

	app.delete('/pais/eliminarPais', pais.eliminarPais);


	// rutas de las solicitudes a la tabla pale
	app.get('/estadoproducto/todosLosEstadoProductos', estadoproducto.todosLosEstadoProductos);

	app.get('/estadoproducto/obtenerNombreEstadoProducto', estadoproducto.obtenerNombreEstadoProductos);

	app.get('/estadoproducto/obtenerIdEstadoProducto', estadoproducto.obtenerIdEstadoProducto);

	app.get('/estadoproducto/obtenerEstadoProducto/:codigo', estadoproducto.obtenerEstadoProductos);

	app.post('/estadoproducto/insertarEstadoProducto/estadoproducto', estadoproducto.insertarEstadoProductos);

	app.put('/estadoproducto/actualizarEstadoProducto', estadoproducto.actualizarEstadoProductos);

	app.delete('/estadoproducto/eliminarEstadoProducto', estadoproducto.eliminarEstadoProductos);



	// rutas de las solicitudes a la tabla predio
	app.get('/predio/todosLosPredios', predio.todosLosPredios);

	app.get('/predio/obtenerNombrePredios', predio.obtenerNombrePredios);

	app.get('/predio/obtenerIdPredio', predio.obtenerIdPredio);

	app.get('/predio/obtenerPredio/:codigo', predio.obtenerPredio);

	app.post('/predio/insertarPredio/predio', predio.insertarPredio);

	app.put('/predio/actualizarPredio', predio.actualizarPredio);

	app.delete('/predio/eliminarPredio', predio.eliminarPredio);


	// rutas de las solicitudes a la tabla producto
	app.get('/producto/todosLosProductos', producto.todosLosProductos);

	app.get('/producto/obtenerNombreProductos',producto.obtenerNombreProductos);

	app.get('/producto/obtenerIdProducto', producto.obtenerIdProducto);

	app.get('/producto/obtenerProducto/:codigo', producto.obtenerProducto);

	app.post('/producto/insertarProducto/producto', producto.insertarProducto);

	app.put('/producto/actualizarProducto', producto.actualizarProducto);

	app.delete('/producto/eliminarProducto', producto.eliminarProducto);


	// rutas de las solicitudes a la tabla region
	app.get('/region/todasLasRegiones', region.todasLasRegiones);

	app.get('/region/obtenerNombreRegiones', region.obtenerNombreRegiones);

	app.get('/region/obtenerIdRegion', region.obtenerIdRegion);

	app.get('/region/obtenerRegion/:codigo', region.obtenerRegion);

	app.post('/region/insertarRegion/region', region.insertarRegion);

	app.put('/region/actualizarRegion', region.actualizarRegion);

	app.delete('/region/eliminarRegion', region.eliminarRegion);

	// rutas de las solicitudes a la tabla tarjeta trabajador
	app.get('/tarjeta/todasLasTarjetas', tarjeta.todasLasTarjetas);

	app.get('/tarjeta/obtenerNombreTarjetas',tarjeta.obtenerNombreTarjetas);

	app.get('/tarjeta/obtenerIdTarjeta', tarjeta.obtenerIdTarjeta);

	app.get('/tarjeta/obtenerTarjeta/:codigo', tarjeta.obtenerTarjeta);

	app.post('/tarjeta/insertarTarjeta/tarjeta', tarjeta.insertarTarjeta);

	app.put('/tarjeta/actualizarTarjeta', tarjeta.actualizarTarjeta);

	app.delete('/tarjeta/eliminarTarjeta', tarjeta.eliminarTarjeta);


	// rutas de las solicitudes a la tabla tipo almacenaje
	app.get('/almacenaje/todosLosAlmacenajes', almacenaje.todosLosAlmacenajes);

	app.get('/almacenaje/obtenerNombreAlmacenajes', almacenaje.obtenerNombreAlmacenajes);

	app.get('/almacenaje/obtenerIdAlmacenaje', almacenaje.obtenerIdAlmacenaje);

	app.get('/almacenaje/obtenerAlmacenaje/:codigo', almacenaje.obtenerAlmacenaje);

	app.post('/almacenaje/insertarAlmacenaje/almacenaje', almacenaje.insertarAlmacenaje);

	app.put('/almacenaje/actualizarAlmacenaje', almacenaje.actualizarAlmacenaje);

	app.delete('/almacenaje/eliminarAlmacenaje', almacenaje.eliminarAlmacenaje);


	// rutas de las solicitudes a la tabla tipo producto
	app.get('/tproducto/todosLosTproductos', tproducto.todosLosTproductos);

	app.get('/tproducto/obtenerNombreTproductos',tproducto.obtenerNombreTproductos);

	app.get('/tproducto/obtenerIdTproducto', tproducto.obtenerIdTproducto);

	app.get('/tproducto/obtenerTproducto/:codigo', tproducto.obtenerTproducto);

	app.post('/tproducto/insertarTproducto/tproducto', tproducto.insertarTproducto);

	app.put('/tproducto/actualizarTproducto', tproducto.actualizarTproducto);

	app.delete('/tproducto/eliminarTproducto', tproducto.eliminarTproducto);


	// rutas de las solicitudes a la tabla trabajador
	app.get('/trabajador/todosLosTrabajadores', trabajador.todosLosTrabajadores);

	app.get('/trabajador/obtenerNombreTrabajadores', trabajador.obtenerNombreTrabajadores);

	app.get('/trabajador/obtenerTrabajador/:codigo', trabajador.obtenerTrabajador);

	app.post('/trabajador/insertarTrabajador/trabajador', trabajador.insertarTrabajador);

	app.put('/trabajador/actualizarTrabajador', trabajador.actualizarTrabajador);

	app.delete('/trabajador/eliminarTrabajador', trabajador.eliminarTrabajador);


	// rutas de las solicitudes a la tabla zona
	app.get('/zona/todasLasZonas', zona.todasLasZonas);

	app.get('/zona/obtenerNombreZonas', zona.obtenerNombreZonas);

	app.get('/zona/obtenerIdZona', zona.obtenerIdZona);

	app.get('/zona/obtenerZona/:codigo', zona.obtenerZona);

	app.post('/zona/insertarZona/zona', zona.insertarZona);

	app.put('/zona/actualizarZona', zona.actualizarZona);

	app.delete('/zona/eliminarZona', zona.eliminarZona);



	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

}

// route middleware to make sure
function isLoggedIn(req, res, next) {
	// console.log(req.get('host')+req.isAuthenticated());
	if (req.isAuthenticated()){
		return next();
}
	// if they aren't redirect them to the home page
	res.redirect('/');
}
