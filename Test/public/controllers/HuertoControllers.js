// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosHuertosControllers', function($scope, todosLosHuertosModels){

	todosLosHuertosModels.todosLosHuertos().success(function(data){
		$scope.todosLosHuertos = data;
	}); 

	

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreHuertosControllers', function($scope, obtenerNombreHuertosModels) {

	obtenerNombreHuertosModels.obtenerNombreHuertos().success(function(data){
		$scope.nombreHuertos = data;
	});

});


BioFrut.controller('obtenerIdHuertoControllers', function($scope, obtenerIdHuertoModels) {

	obtenerIdHuertoModels.obtenerIdHuerto().success(function(data){

		$scope.IdHuerto = data;
        console.log($scope.IdHuerto);
	});

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerHuertoControllers', function($scope, obtenerHuertoModels) {

	obtenerHuertoModels.obtenerHuerto().success(function(data){
		$scope.obtenerHuerto = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarHuertoControllers', function($scope, actualizarHuertoModels) {

	actualizarHuertoModels.actualizarHuerto().success(function(data){
		$scope.actualizarHuerto = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarHuertoControllers', function($scope, insertarHuertoModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosHuerto = function(huerto){

			insertarHuertoModels.insertarHuerto(huerto).success(function(data) {
			if(data.affectedRows===1){
		   $("#datosHuerto").show(2000).fadeOut(4000);
		    }
		    setInterval("location.reload()",7000);
			});
	
		   }

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosHuerto= function(huerto){

		$scope.huerto = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarHuertoControllers', function($scope,  eliminarHuertoModels) {

	eliminarHuertoModels.eliminarHuerto().success(function(data){
		$scope.obtenerHuerto = data;
	});

});

