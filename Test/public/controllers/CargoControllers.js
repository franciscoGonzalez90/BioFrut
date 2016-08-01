// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosCargosControllers', function($scope, todosLosCargosModels){

	todosLosCargosModels.todosLosCargos().success(function(data){
		$scope.todosLosCargos = data;
	}); 

	

});


BioFrut.controller('obtenerNombreCargosControllers', function($scope, obtenerNombreCargosModels){

	obtenerNombreCargosModels.obtenerNombreCargos().success(function(data){
		$scope.nombreCargos = data;
	}); 

});

BioFrut.controller('obtenerIdCargoControllers', function($scope, obtenerIdCargoModels) {

	obtenerIdCargoModels.obtenerIdCargo().success(function(data){

		$scope.IdCargo = data;
        console.log($scope.IdCargo);
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerCargoControllers', function($scope, obtenerCargoModels) {

	obtenerCargoModels.obtenerCargo().success(function(data){
		$scope.obtenerCargo = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarCargoControllers', function($scope, actualizarCargoModels) {

	actualizarCargoModels.actualizarCargo().success(function(data){
		$scope.actualizarCargo = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarCargoControllers', function($scope, insertarCargoModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosCargo = function(cargo){

		var idcargo=validaIdCargo(cargo.IdCargo);
		console.log(idcargo);
          
          if(idcargo===0){
		insertarCargoModels.insertarCargo(cargo).success(function(data) {
		if(data.affectedRows===1){
		$("#datosCargo").show(2000).fadeOut(4000);
		 }
		 setInterval("location.reload()",7000);
		});
         
         }

		  if(idcargo !=0){
			$scope.idCargo=idcargo;
		    $("#cargo").show(2000).fadeOut(4000);
          }else{$("#cargo").hide();}
      

        }

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosCargo = function(cargo){

		$scope.cargo = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarCargoControllers', function($scope,  eliminarCargoModels) {

	eliminarCargoModels.eliminarCargo().success(function(data){
		$scope.obtenerCargo = data;
	});

});

function validaIdCargo(idcargo) {
  if(idcargo === undefined){
   return "Selecione Cod Cargo";
  }else{return 0;}
}
