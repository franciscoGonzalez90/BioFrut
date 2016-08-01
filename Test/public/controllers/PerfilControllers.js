// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosPerfilesControllers', function($scope, todosLosPerfilesModels){

	todosLosPerfilesModels.todosLosPerfiles().success(function(data){
		$scope.todosLosPerfiles= data;
	}); 

	

});

BioFrut.controller('obtenerNombrePerfilesControllers', function($scope, obtenerNombrePerfilesModels){

	obtenerNombrePerfilesModels.todosLosNombresPerfiles().success(function(data){
		$scope.nombrePerfiles= data;
	}); 

	

});

BioFrut.controller('obtenerIdPerfilControllers', function($scope, obtenerIdPerfilModels) {

	obtenerIdPerfilModels.obtenerIdPerfil().success(function(data){

		$scope.IdPerfil = data;
        console.log($scope.IdPerfil);
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerPerfilControllers', function($scope, obtenerPerfilModels) {

	obtenerPerfilModels.obtenerPerfil().success(function(data){
		$scope.obtenerPerfil= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarPerfilControllers', function($scope, actualizarPerfilModels) {

	actualizarPerfilModels.actualizarPerfil().success(function(data){
		$scope.actualizarPerfil = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarPerfilControllers', function($scope, insertarPerfilModels) {
	// integracion de patron observer
	$scope.$watch(function(){
          var caca=0;
		// boton almacenar nuevo usuario
		$scope.obtenerDatosPerfil= function(perfil){

		 insertarPerfilModels.insertarPerfil(perfil).success(function(data){
		     console.log(data);	
		 	if(data.affectedRows===1){
		 	$("#datosPerfil").show(2000).fadeOut(4000);
		 	}
		 	setInterval("location.reload()",7000);
		 });
		 
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosPerfil = function(perfil){

		$scope.perfil = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarPerfilControllers', function($scope,  eliminarPerfilModels) {

	eliminarPerfilModels.eliminarPerfil().success(function(data){
		$scope.obtenerPerfil = data;
	});

});

