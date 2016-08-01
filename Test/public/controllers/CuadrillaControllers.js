// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasCuadrillasControllers', function($scope, todasLasCuadrillasModels){

	todasLasCuadrillasModels.todasLasCuadrillas().success(function(data){
		$scope.todasLasCuadrillas= data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreCuadrillasControllers', function($scope, obtenerNombreCuadrillasModels) {

	obtenerNombreCuadrillasModels.obtenerNombreCuadrillas().success(function(data){
		$scope.nombreCuadrillas = data;
	});

});

BioFrut.controller('obtenerIdCuadrillaControllers', function($scope, obtenerIdCuadrillaModels) {

	obtenerIdCuadrillaModels.obtenerIdCuadrilla().success(function(data){

		$scope.IdCuadrilla = data;
        console.log($scope.IdCuadrilla);
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerCuadrillaControllers', function($scope, obtenerCuadrillaModels) {

	obtenerCuadrillaModels.obtenerCuadrilla().success(function(data){
		$scope.obtenerCuadrilla= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarCuadrillaControllers', function($scope, actualizarCuadrillaModels) {

	actualizarCuadrillaModels.actualizarCuadrilla().success(function(data){
		$scope.actualizarCuadrilla = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarCuadrillaControllers', function($scope, insertarCuadrillaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosCuadrilla = function(cuadrilla){
             
            var idcuadrilla=validaCodCuadrilla(cuadrilla.IdCuadrilla);
            var idhuerto=validaCodHuerto(cuadrilla.IdHuerto);
            console.log(idcuadrilla,idhuerto);
           if(idcuadrilla !=0){
            $scope.codcuadrilla=idcuadrilla;
            $("#idcuadrilla").show(1000).fadeOut(4000);
		   }else{$("#idcuadrilla").hide();}

		  if(idhuerto !=0){
          $scope.codhuerto=idhuerto;
          $("#idhuerto").show(1000).fadeOut(4000);
	    }else{$("#idhuerto").hide();}

		if(idcuadrilla===0 && idhuerto===0){
        
	     insertarCuadrillaModels.insertarCuadrilla(cuadrilla).success(function(data){
	     	console.log(data);
		  	if(data.affectedRows===1){
		 	$("#datosCuadrilla").show(2000).fadeOut(4000);
		 	}
		   setInterval("location.reload()",7000);
		  });  
         }
		   
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosCuadrilla = function(ciudad){

		$scope.cuadrilla = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarCuadrillaControllers', function($scope,  eliminarCuadrillaModels) {

	eliminarCuadrillaModels.eliminarCuadrilla().success(function(data){
		$scope.obtenerCuadrilla = data;
	});

});


function validaCodCuadrilla (cuadrilla) {
  if(cuadrilla === undefined){
    return "Seleccione Cod Cuadrilla";
  }else{return  0;}
}


function validaCodHuerto (huerto) {
  if(huerto === undefined){
    return "Seleccione un Huerto";
  }else{return 0;}
}
