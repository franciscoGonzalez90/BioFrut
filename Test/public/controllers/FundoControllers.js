// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosFundosControllers', function($scope, todosLosFundosModels){

	todosLosFundosModels.todosLosFundos().success(function(data){
		$scope.todosLosFundos = data;
	}); 

	

});


BioFrut.controller('obtenerNombreFundosControllers', function($scope, obtenerNombreFundosModels) {

	obtenerNombreFundosModels.obtenerNombreFundos().success(function(data){
		$scope.nombreFundos = data;
	});

});


BioFrut.controller('obtenerIdFundoControllers', function($scope, obtenerIdFundoModels) {

	obtenerIdFundoModels.obtenerIdFundo().success(function(data){

		$scope.IdFundo = data;
        console.log($scope.IdFundo);
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerFundoControllers', function($scope, obtenerFundoModels) {

	obtenerFundoModels.obtenerFundo().success(function(data){
		$scope.obtenerFundo = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarFundoControllers', function($scope, actualizarFundoModels) {

	actualizarFundoModels.actualizarFundo().success(function(data){
		$scope.actualizarFundo = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarFundoControllers', function($scope, insertarFundoModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosFundo = function(fundo){
            
			insertarFundoModels.insertarFundo(fundo).success(function(data) {
			if(data.affectedRows===1){
		    $("#datosFundo").show(2000).fadeOut(4000);
		    }
		    setInterval("location.reload()",7000);	
			});
		   }
				
		

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosFundo= function(fundo){

		$scope.fundo = {};

		}
	});

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarFundoControllers', function($scope,  eliminarFundoModels) {

	eliminarFundoModels.eliminarFundo().success(function(data){
		$scope.obtenerFundo = data;
	});

});

