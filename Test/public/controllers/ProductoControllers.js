// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosProductosControllers', function($scope, todosLosProductosModels){

	todosLosProductosModels.todosLosProductos().success(function(data){
		$scope.todosLosProductos = data;
	}); 

});

BioFrut.controller('obtenerNombreProductosControllers', function($scope, obtenerNombreProductosModels){

	obtenerNombreProductosModels.obtenerNombreProductos().success(function(data){
		$scope.nombreProductos = data;
	}); 

});


BioFrut.controller('obtenerIdProductoControllers', function($scope, obtenerIdProductoModels) {

	obtenerIdProductoModels.obtenerIdProducto().success(function(data){

		$scope.IdProducto = data;
        console.log($scope.IdProducto);
	});

});



// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerProductoControllers', function($scope, obtenerProductoModels) {

	obtenerProductoModels.obtenerProducto().success(function(data){
		$scope.obtenerProducto = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarProductoControllers', function($scope, actualizarProductoModels) {

	actualizarProductoModels.actualizarProducto().success(function(data){
		$scope.actualizarProducto = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarProductoControllers', function($scope, insertarProductoModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosProducto = function(producto){

			insertarProductoModels.insertarProducto(producto).success(function(data) {
		    if(data.affectedRows===1){
		   $("#datosProducto").show(2000).fadeOut(4000);
		  }
		  setInterval("location.reload()",7000);
			});
					
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosProducto = function(producto){

		$scope.producto = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarProductoControllers', function($scope,  eliminarProductoModels) {

	eliminarProductoModels.eliminarProducto().success(function(data){
		$scope.obtenerProducto = data;
	});

});

