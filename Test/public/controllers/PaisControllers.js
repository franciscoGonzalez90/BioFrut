// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosPaisesControllers', function($scope, todosLosPaisesModels){

	todosLosPaisesModels.todosLosPaises().success(function(data){
		$scope.todosLosPaises = data;
	}); 

	

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombrePaisesControllers', function($scope, obtenerNombrePaisesModels) {

	obtenerNombrePaisesModels.obtenerNombrePaises().success(function(data){
		$scope.nombrePaises = data;
	});

});


BioFrut.controller('obtenerIdPaisControllers', function($scope, obtenerIdPaisModels) {

	obtenerIdPaisModels.obtenerIdPais().success(function(data){
		$scope.IdPais = data;
       
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerPaisControllers', function($scope, obtenerPaisModels) {

	obtenerPaisModels.obtenerPais().success(function(data){
		$scope.obtenerPais = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarPaisControllers', function($scope, actualizarPaisModels) {

	actualizarPaisModels.actualizarPais().success(function(data){
		$scope.actualizarPais = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarPaisControllers', function($scope, insertarPaisModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosPais = function(pais){

			insertarPaisModels.insertarPais(pais).success(function(data) {
			if(data.affectedRows===1){
		     $("#datosPais").show(2000).fadeOut(4000);
		     }
		    setInterval("location.reload()",7000);
			});
		
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosPais= function(pais){

		$scope.pais = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarPaisControllers', function($scope,  eliminarPaisModels) {

	eliminarPaisModels.eliminarPais().success(function(data){
		$scope.obtenerPais = data;
	});

});

