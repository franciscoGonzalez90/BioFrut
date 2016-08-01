// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosControlesBodegaControllers', function($scope, todosLosControlesBodegaModels){

	todosLosControlesBodegaModels.todosLosControlesBodegas().success(function(data){
		$scope.todosLosControlesBodegas = data;
	}); 

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreControlBodegasControllers', function($scope, obtenerNombreControlBodegasModels) {

	obtenerNombreControlBodegasModels.obtenerNombreControlBodegas().success(function(data){
		$scope.nombreControlBodegas = data;
	});

});

BioFrut.controller('obtenerIdControlBodegaControllers', function($scope, obtenerIdControlBodegaModels) {

	obtenerIdControlBodegaModels.obtenerIdControlBodega().success(function(data){

		$scope.IdControlBodega = data;
        console.log($scope.IdControlBodega);
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerControlBodegaControllers', function($scope, obtenerControlBodegaModels) {

	obtenerControlBodegaModels.obtenerControlBodega().success(function(data){
		$scope.obtenerControlBodega = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarControlBodegaControllers', function($scope, actualizarControlBodegaModels) {

	actualizarControlBodegaModels.actualizarControlBodega().success(function(data){
		$scope.actualizarControlBodega = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarControlBodegaControllers', function($scope, insertarControlBodegaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosControlBodega = function(controlbodega){
             
               var idbodega=validaControlBodega(controlbodega.IdControlBodega);
               var pale=validaCantidadP(controlbodega.CantidadPale);
               var Calidad=validaControlCalidad(controlbodega.IdControl);
               var Despacho=validaDespacho(controlbodega.IdDespacho);
               var Zona=validaZona(controlbodega.IdZona);

           if(idbodega===0 && pale===0 && Calidad===0 && Despacho===0 && Zona===0){
		   insertarControlBodegaModels.insertarControlBodega(controlbodega).success(function(data) {
		  if(data.affectedRows===1){
		  $("#datosControlBodega").show(2000).fadeOut(4000);
		  }
		   setInterval("location.reload()",7000);
		});
          }
            
            if(idbodega !=0){
              $scope.control=idbodega;
             $("#controlbodega2").show(1000).fadeOut(4000);
            }else{$("#controlbodega2").hide();}

            if(pale !=0){
            	$scope.cantidad=pale;
             $("#pale2").show(1000).fadeOut(4000);
            }else{$("#pale2").hide();}

            if(Calidad !=0){
            	$scope.calidad=Calidad;
             $("#calidad2").show(1000).fadeOut(4000);
            }else{$("#calidad2").hide();}

            if(Despacho !=0){
            	$scope.despacho=Despacho;
             $("#despacho2").show(1000).fadeOut(4000);
            }else{$("#despacho2").hide();}

            if(Zona !=0){
            	$scope.zona=Zona;
             $("#zona2").show(1000).fadeOut(4000);
            }else{$("#zona2").hide();}

					
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosControlBodega = function(controlbodega){

		$scope.pale = {};

		}

	});


});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarControlBodegaControllers', function($scope,  eliminarControlBodegaModels) {

	eliminarControlBodegaModels.eliminarControlBodega().success(function(data){
		$scope.eliminarControlBodega = data;
	});

});


function validaControlBodega(codbodega) {
if(codbodega===undefined){
  return "Seleccione Cod Control de Bodega";
}else{return 0;}
}

function validaCantidadP(pale) {
  if(pale<=0){
    return "Ingrese Numeros Positivos";
  }else{return 0;}
}

function validaControlCalidad(calidad) {
  if(calidad===undefined){
    return "Seleccione un Control de Calidad";
  }else{return 0;}
}

function validaDespacho(despacho) {
 if(despacho===undefined){
  return "Seleccione un Despacho";
 }else{return 0;}
}

function validaZona(zona) {
 if(zona===undefined){
  return "Seleccione una Zona";
 }else{return 0;}
}