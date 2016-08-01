// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasCiudadesControllers', function($scope, todasLasCiudadesModels){

	todasLasCiudadesModels.todasLasCiudades().success(function(data){
		$scope.todasLasCiudades= data;
	}); 

	

});


BioFrut.controller('obtenerNombreCiudadesControllers', function($scope, obtenerNombreCiudadesModels) {

	obtenerNombreCiudadesModels.obtenerNombreCiudades().success(function(data){
		$scope.nombreCiudades = data;
	});

});

BioFrut.controller('obtenerIdCiudadControllers', function($scope, obtenerIdCiudadModels) {

	obtenerIdCiudadModels.obtenerIdCiudad().success(function(data){

		$scope.IdCiudad = data;
        console.log($scope.IdCiudad);
	});

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerCiudadControllers', function($scope, obtenerCiudadModels) {

	obtenerCiudadModels.obtenerCiudad().success(function(data){
		$scope.obtenerCiudad= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarCiudadControllers', function($scope, actualizarCiudadModels) {

	actualizarCiudadModels.actualizarCiudad().success(function(data){
		$scope.actualizarCiudad = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarCiudadControllers', function($scope, insertarCiudadModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosCiudad= function(ciudad){
             console.log(ciudad);
	    insertarCiudadModels.insertarCiudad(ciudad).success(function(data) {
	    if(data.affectedRows===1){
		$("#datosCiudad").show(2000).fadeOut(4000);
		 }
		 setInterval("location.reload()",7000);
	    });
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosCiudad = function(ciudad){

		$scope.ciudad = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarCiudadControllers', function($scope,  eliminarCiudadModels) {

	eliminarCiudadModels.eliminarCiudad().success(function(data){
		$scope.obtenerCiudad = data;
	});

});

