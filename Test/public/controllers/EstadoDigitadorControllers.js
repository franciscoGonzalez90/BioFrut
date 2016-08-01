BioFrut.controller('actualizarEstadoControllers', function($scope, actualizarEstadoModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosEstado= function(estado){

			actualizarEstadoModels.actualizarEstado(estado);
			
				// alert(estado);

		}
	});

});






