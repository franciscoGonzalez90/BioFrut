// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasBodegasControllers', function($scope, todasLasBodegasModels){

	todasLasBodegasModels.todasLasBodegas().success(function(data){
		$scope.todasLasBodegas= data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreBodegasControllers', function($scope, obtenerNombreBodegasModels) {

	obtenerNombreBodegasModels.obtenerNombreBodegas().success(function(data){
		
	$scope.nombreBodegas=data;
		
	});

});


BioFrut.controller('obtenerIdBodegaControllers', function($scope, obtenerIdBodegaModels) {

	obtenerIdBodegaModels.obtenerIdBodega().success(function(data){

		$scope.IdBodega = data;
        console.log($scope.IdBodega);
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerBodegaControllers', function($scope, obtenerBodegaModels) {

	obtenerBodegaModels.obtenerBodega().success(function(data){
		$scope.obtenerBodega= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarBodegaControllers', function($scope, actualizarBodegaModels) {

	actualizarBodegaModels.actualizarBodega().success(function(data){
		$scope.actualizarBodega = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarBodegaControllers', function($scope, insertarBodegaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosBodega= function(bodega){

              var codigo=validaCodBodega(bodega.IdBodega);
              var ciudad=validadCiudad(bodega.IdCiudad);

			 insertarBodegaModels.insertarBodega(bodega).success(function(data) {
			 if(data.affectedRows===1){
		     $("#datosBodega").show(2000).fadeOut(4000);
		      }
		     setInterval("location.reload()",7000);
			 });

			 if(codigo !=0){
			   $scope.idbodega=codigo;
			   $("#codbodega").show(1000).fadeOut(4000);
			 }else{$("#codbodega").hide();}

			 if(ciudad !=0){
                $scope.idciudad=ciudad;
                $("#codciudad").show(1000).fadeOut(4000);
			 }else{$("#codciudad").hide();}
				
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosBodega = function(bodega){

		$scope.bodega = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarBodegaControllers', function($scope,  eliminarBodegaModels) {

	eliminarBodegaModels.eliminarBodega().success(function(data){
		$scope.obtenerBodega = data;
	});

});

function validaCodBodega (bodega) {
  if(bodega ===undefined){
    return "Seleccione Cod Bodega";
  }else{return 0;}
}

function validadCiudad (ciudad) {
  if(ciudad === undefined){
    return "Seleccione un Ciudad";
  }else{return 0;}
}