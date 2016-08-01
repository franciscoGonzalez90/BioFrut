// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosAlmacenajesControllers', function($scope, todosLosAlmacenajesModels){

	todosLosAlmacenajesModels.todosLosAlmacenajes().success(function(data){
		$scope.todosLosAlmacenajes = data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreAlmacenajesControllers', function($scope, obtenerNombreAlmacenajesModels) {

	obtenerNombreAlmacenajesModels.obtenerNombreAlmacenajes().success(function(data){
	$scope.nombreAlmacenajes=data;
	});

});

BioFrut.controller('obtenerIdAlmacenajeControllers', function($scope, obtenerIdAlmacenajeModels) {

	obtenerIdAlmacenajeModels.obtenerIdAlmacenaje().success(function(data){

		$scope.IdAlmacenaje = data;
        console.log($scope.IdAlmacenaje);
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerAlmacenajeControllers', function($scope, obtenerAlmacenajeModels) {

	obtenerAlmacenajeModels.obtenerAlmacenaje().success(function(data){
		$scope.obtenerAlmacenaje = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarAlmacenajeControllers', function($scope, actualizarAlmacenajeModels) {

	actualizarAlmacenajeModels.actualizarAlmacenaje().success(function(data){
		$scope.actualizarAlmacenaje = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarAlmacenajeControllers', function($scope, insertarAlmacenajeModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosAlmacenaje = function(almacenaje){

			insertarAlmacenajeModels.insertarAlmacenaje(almacenaje).success(function(data) {
		      if(data.affectedRows===1){
		  $("#datosAlmacenaje").show(2000).fadeOut(4000);
		   }
		 setInterval("location.reload()",7000);
			});
			
		
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosAlmacenaje= function(almacenaje){

		$scope.almacenaje = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarAlmacenajeControllers', function($scope,  eliminarAlmacenajeModels) {

	eliminarAlmacenajeModels.eliminarAlmacenaje().success(function(data){
		$scope.obtenerAlmacenaje = data;
	});

});



function obtenerAlmacenajes(data){
	$('#nuevazona').html(function(){
		$('#mojon').append("<option value='' >"+data[0].Nombre+"</option>");
	});
	

}