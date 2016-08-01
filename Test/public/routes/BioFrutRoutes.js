// Creacion del modulo del proyecto el cual almacena los Routes, Services y Controllers que comunican el codigo del lado cliente
var BioFrut = angular.module("BioFrut",["ngRoute"]);


 // Declaracion de la configuracion del Routes para direccionar la solucitudes del cliente hacia los controladores
BioFrut.config(['$routeProvider', function($routeProvider, $locationProvider, $httpProvider){
	
 // Proveedor de Rutas que es llamado tambien uiRouter en  AngularJS, se utiliza para direccionar las solucitudes del cliente
	$routeProvider

 // direccionamientos de las solicitudes del cliente hacia sus Controllers correspondientes
 	.when('/reporteMensualKpi', { controller:'todasLasMermasControllers', templateUrl:'../views/templateKpiProduccion.html'})

 	.when('/reporteMensualHuertos', { controller:'reporteProduccionMensualHuertosControllers', templateUrl:'../views/templateReporteMensualHuerto.html'})

 	.when('/reporteMensualCuadrillas', { controller:'reporteProduccionMensualCuadrillasControllers', templateUrl:'../views/templateReporteMensualCuadrilla.html'}) 

  	.when('/reporteDiarioHuertos', { controller:'reporteProduccionBarHuertosControllers', templateUrl:'../views/templateReporteDiarioHuerto.html'}) 

	.when('/reporteDiarioCuadrillas', { controller:'reporteProduccionBarCuadrillasControllers', templateUrl:'../views/templateReporteDiarioCuadrilla.html'})  	

	.when('/Usuarios', { controller:'todosLosUsuariosControllers', templateUrl:'../views/templateTodosLosUsuarios.html'})

	.when('/nuevoControlBodega', { controller:'insertarControlBodegaControllers', templateUrl:'../views/templateNuevoControlBodega.html'})

	.when('/ControlBodegas', { controller:'todosLosControlesBodegaControllers', templateUrl:'../views/templateTodosLosControlesBodega.html'})

	.when('/nuevoEstadoProducto', { controller:'insertarEstadoProductosControllers', templateUrl:'../views/templateNuevoEstadoProducto.html'})

	.when('/EstadoProductos', { controller:'todosLosEstadoProductosControllers', templateUrl:'../views/templateTodosLosEstadosProductos.html'})

	.when('/nuevoDespacho', { controller:'insertarDespachoControllers', templateUrl:'../views/templateNuevoDespacho.html'})

	.when('/Despachos', { controller:'todosLosDespachosControllers', templateUrl:'../views/templateTodosLosDespachos.html'})

	.when('/nuevoControlBodega', { controller:'insertarControlBodegaControllers', templateUrl:'../views/templateNuevoControlbodega.html'})

	.when('/nuevoUsuario', { controller:'insertarUsuarioControllers', templateUrl:'../views/templateNuevoUsuario.html'})

	.when('/Cargos', { controller:'todosLosCargosControllers', templateUrl:'../views/templateTodosLosCargos.html' })

	.when('/nuevoCargo', { controller:'insertarCargoControllers' , templateUrl:'../views/templateNuevoCargo.html'})

	.when('/Bandejas', { controller:'todasLasBandejasControllers', templateUrl:'../views/templateTodasLasBandejas.html' })

	.when('/nuevaBandeja', { controller:'insertarBandejaControllers' , templateUrl:'../views/templateNuevaBandeja.html'})

	.when('/Bodegas', { controller:'todasLasBodegasControllers', templateUrl:'../views/templateTodasLasBodegas.html' })

	.when('/nuevaBodega', { controller:'insertarBodegaControllers' , templateUrl:'../views/templateNuevaBodega.html'})

	.when('/Calificaciones', { controller:'todasLasCalificacionesControllers', templateUrl:'../views/templateTodasLasCalificaciones.html' })

	.when('/nuevaCalificacion', { controller:'insertarCalificacionControllers' , templateUrl:'../views/templateNuevaCalificacion.html'})

	.when('/Ciudades', { controller:'todasLasCiudadesControllers', templateUrl:'../views/templateTodasLasCiudades.html' })

	.when('/nuevaCiudad', { controller:'insertarCiudadControllers' , templateUrl:'../views/templateNuevaCiudad.html'})

	.when('/Controles', { controller:'todosLosControlesControllers', templateUrl:'../views/templateTodosLosControles.html' })

	.when('/nuevoControl', { controller:'insertarControlControllers' , templateUrl:'../views/templateNuevoControl.html'})

	.when('/Cuadrillas', { controller:'todasLasCuadrillasControllers', templateUrl:'../views/templateTodasLasCuadrillas.html' })

	.when('/nuevaCuadrilla', { controller:'insertarCuadrillaControllers' , templateUrl:'../views/templateNuevaCuadrilla.html'})

	.when('/Stocks', { controller:'todasLasCuadrillasControllers', templateUrl:'../views/templateTodosLosStocks.html' })

	.when('/nuevoStock', { controller:'insertarCuadrillaControllers' , templateUrl:'../views/templateNuevoStock.html'})

	.when('/Guias', { controller:'todasLasGuiasControllers', templateUrl:'../views/templateTodasLasGuias.html' })

	.when('/nuevaGuia', { controller:'insertarGuiaControllers' , templateUrl:'../views/templateNuevaGuia.html'})

	.when('/Pales', { controller:'todosLosPalesControllers', templateUrl:'../views/templateTodosLosPales.html' })

	.when('/nuevoPale', { controller:'insertarPaleControllers' , templateUrl:'../views/templateNuevoPale.html'})

	.when('/Fundos', { controller:'todosLosFundosControllers', templateUrl:'../views/templateTodosLosFundos.html' })

	.when('/nuevoFundo', { controller:'insertarFundoControllers' , templateUrl:'../views/templateNuevoFundo.html'})

	.when('/Zonas', { controller:'todasLasZonasControllers', templateUrl:'../views/templateTodasLasZonas.html' })

	.when('/nuevaZona', { controller:'insertarZonaControllers' , templateUrl:'../views/templateNuevaZona.html'})

	.when('/Huertos', { controller:'todosLosHuertosControllers', templateUrl:'../views/templateTodosLosHuertos.html' })

	.when('/nuevoHuerto', { controller:'insertarHuertoControllers' , templateUrl:'../views/templateNuevoHuerto.html'})

	.when('/Mermas', { controller:'todasLasMermasControllers', templateUrl:'../views/templateTodasLasMermas.html' })

	.when('/nuevaMerma', { controller:'insertarMermaControllers' , templateUrl:'../views/templateNuevaMerma.html'})

	.when('/Paises', { controller:'todosLosPaisesControllers', templateUrl:'../views/templateTodosLosPaises.html' })

	.when('/nuevoPais', { controller:'insertarPaisControllers' , templateUrl:'../views/templateNuevoPais.html'})

	.when('/Perfiles', { controller:'todosLosPerfilesControllers', templateUrl:'../views/templateTodosLosPerfiles.html' })

	.when('/nuevoPerfil', { controller:'insertarPerfilControllers' , templateUrl:'../views/templateNuevoPerfil.html'})

	.when('/Predios', { controller:'todosLosPrediosControllers', templateUrl:'../views/templateTodosLosPredios.html' })

	.when('/nuevoPredio', { controller:'insertarPredioControllers' , templateUrl:'../views/templateNuevoPredio.html'})

	.when('/Productos', { controller:'todosLosProductosControllers', templateUrl:'../views/templateTodosLosProductos.html' })

	.when('/nuevoProducto', { controller:'insertarProductoControllers' , templateUrl:'../views/templateNuevoProducto.html'})

	.when('/Regiones', { controller:'todasLasRegionesControllers', templateUrl:'../views/templateTodasLasRegiones.html' })

	.when('/nuevaRegion', { controller:'insertarRegionControllers' , templateUrl:'../views/templateNuevaRegion.html'})

	.when('/Identificaciones', { controller:'todasLasTarjetasControllers', templateUrl:'../views/templateTodasLasTarjetas.html' })

	.when('/nuevaIdentificacion', { controller:'insertarTarjetaControllers' , templateUrl:'../views/templateNuevaTarjeta.html'})

	.when('/Almacenajes', { controller:'todosLosAlmacenajesControllers', templateUrl:'../views/templateTodosLosAlmacenajes.html' })

	.when('/nuevoAlmacenaje', { controller:'insertarAlmacenajeControllers' , templateUrl:'../views/templateNuevoAlmacenaje.html'})

	.when('/Tproductos', { controller:'todosLosTproductosControllers', templateUrl:'../views/templateTodosLosTproductos.html' })

	.when('/nuevoTproducto', { controller:'insertarTproductoControllers' , templateUrl:'../views/templateNuevoTproducto.html'})

	.when('/Trabajadores', { controller:'todosLosTrabajadoresControllers', templateUrl:'../views/templateTodosLosTrabajadores.html' })

	.when('/nuevoTrabajador', { controller:'insertarTrabajadorControllers' , templateUrl:'../views/templateNuevoTrabajador.html'});
}]);