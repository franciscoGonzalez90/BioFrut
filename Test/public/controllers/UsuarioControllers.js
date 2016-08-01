// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosUsuariosControllers', function($scope, todosLosUsuariosModels){

	todosLosUsuariosModels.todosLosUsuarios().success(function(data){
		$scope.todosLosUsuarios = data;
	}); 
	

});

BioFrut.controller('obtenerIdUsuarioControllers', function($scope, obtenerIdUsuarioModels) {

	obtenerIdUsuarioModels.obtenerIdUsuario().success(function(data){

		$scope.IdUsuario = data;
        console.log($scope.IdUsuario);
	});

});




// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerUsuarioControllers', function($scope, obtenerUsuarioModels) {

	obtenerUsuarioModels.obtenerUsuario().success(function(data){
		$scope.obtenerUsuario = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarUsuarioControllers', function($scope, actualizarUsuarioModels) {

	actualizarUsuarioModels.actualizarUsuario().success(function(data){
		$scope.actualizarUsuario = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarUsuarioControllers', function($scope, insertarUsuarioModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosUsuario = function(usuario){

           var respuesta=0;
		    respuesta=insertarUsuarioModels.insertarUsuario(usuario);

		    if(respuesta.Id ==="Selecione Cod. Usuario"){

		       $scope.idusuario=respuesta.Id;

               $("#usuario").show(1000).fadeOut(4000);
            }else{$("#usuario").hide();}

            if(respuesta.Perfil ==="Selecione un Perfil"){

		       $scope.perfil=respuesta.Perfil;

               $("#perfil").show(2000).fadeOut(6000);
            }else{$("#perfil").hide();}
  

            if(respuesta.Cargo ==="Selecione un Cargo"){

		       $scope.cargo=respuesta.Cargo;

               $("#cargo").show(2000).fadeOut(6000);
            }else{$("#cargo").hide();}

				
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosUsuario = function(usuario){

		$scope.usuario = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarUsuarioControllers', function($scope,  eliminarUsuarioModels) {

	eliminarUsuarioModels.eliminarUsuario().success(function(data){
		$scope.obtenerUsuario = data;
	});

});

