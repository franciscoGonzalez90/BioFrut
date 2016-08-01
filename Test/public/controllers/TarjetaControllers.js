// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasTarjetasControllers', function($scope, todasLasTarjetasModels){

	todasLasTarjetasModels.todasLasTarjetas().success(function(data){
		var datos=[];

		for(key in data){
			var jsonData={"IdTarjeta":data[key].IdTarjeta,"FechaIngreso":data[key].FechaIngreso.substring(0,10),"Rut":data[key].Rut};
			datos.push(jsonData);
		}

		$scope.todasLasTarjetas = datos;
	}); 

})

BioFrut.controller('obtenerNombreTarjetasControllers', function($scope, obtenerNombreTarjetasModels){

	obtenerNombreTarjetasModels.obtenerNombreTarjetas().success(function(data){
		$scope.nombreTarjetas = data;
	}); 

});

BioFrut.controller('obtenerIdTarjetaControllers', function($scope, obtenerIdTarjetaModels) {

	obtenerIdTarjetaModels.obtenerIdTarjeta().success(function(data){

		$scope.IdTarjeta = data;
        console.log($scope.IdTarjeta);
	});

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerTarjetaControllers', function($scope, obtenerTarjetaModels) {

	obtenerTarjetaModels.obtenerTarjeta().success(function(data){
		$scope.obtenerTarjeta= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarTarjetaControllers', function($scope, actualizarTarjetaModels) {

	actualizarTarjetaModels.actualizarTarjeta().success(function(data){
		$scope.actualizarTarjeta = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarTarjetaControllers', function($scope, insertarTarjetaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosTarjeta= function(tarjeta){

			insertarTarjetaModels.insertarTarjeta(tarjeta).success(function(data) {
			if(data.affectedRows===1){
		    $("#datosTarjeta").show(2000).fadeOut(4000);
		    }
		    setInterval("location.reload()",7000);
			});
			
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosTarjeta = function(tarjeta){

		$scope.tarjeta = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarTarjetaControllers', function($scope,  eliminarTarjetaModels) {

	eliminarTarjetaModels.eliminarTarjeta().success(function(data){
		$scope.obtenerTarjeta = data;
	});

});

