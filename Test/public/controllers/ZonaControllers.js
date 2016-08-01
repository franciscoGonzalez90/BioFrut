// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasZonasControllers', function($scope, todasLasZonasModels){

	todasLasZonasModels.todasLasZonas().success(function(data){
		$scope.todasLasZonas = data;
	}); 

	

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreZonasControllers', function($scope, obtenerNombreZonasModels) {

	obtenerNombreZonasModels.obtenerNombreZonas().success(function(data){
		$scope.nombreZonas = data;
	});

});


BioFrut.controller('obtenerIdZonaControllers', function($scope, obtenerIdZonaModels) {

	obtenerIdZonaModels.obtenerIdZona().success(function(data){

		$scope.IdZona = data;
        console.log($scope.IdZona);
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerZonaControllers', function($scope, obtenerZonaModels) {

	obtenerZonaModels.obtenerZona().success(function(data){
		$scope.obtenerZona = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarZonaControllers', function($scope, actualizarZonaModels) {

	actualizarZonaModels.actualizarZona().success(function(data){
		$scope.actualizarZona = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarZonaControllers', function($scope, insertarZonaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosZona= function(zona){

			var idZona=validadCodZona(zona.IdZona);
            var idBodega=validadCodBodega(zona.IdBodega);
            var Tipo=validaCodAlmacenaje(zona.IdTipoAlmacenaje);
         
             if(idZona ===0 && idBodega ===0 && Tipo ===0){
			insertarZonaModels.insertarZona(zona).success(function(data) {
			 if(data.affectedRows===1){
		     $("#datosZona").show(2000).fadeOut(4000);
		       }
		    setInterval("location.reload()",7000);
			});

		    }
                
             if(idZona !=0){
               $scope.idzona=idZona;
               $("#codzona").show(1000).fadeOut(4000);
             }else{$("#codzona").hide();}

             if(idBodega !=0){
                $scope.idbodega=idBodega;
                 $("#codbodega").show(1000).fadeOut(4000);
             }else{$("#codbodega").hide();}

             if(Tipo !=0){
                $scope.idtipo=Tipo;
                 $("#codalmacenaje").show(1000).fadeOut(4000);
             }else{$("#codalmacenaje").hide();}

					
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosZona = function(zona){

		$scope.zona = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarZonaControllers', function($scope,  eliminarZonaModels) {

	eliminarZonaModels.eliminarZona().success(function(data){
		$scope.obtenerZona = data;
	});

});

function validadCodZona (zona) {
  if(zona === undefined){
    return "Seleccione Cod Zona";
  }else{return 0;}
}

function validadCodBodega (bodega) {
  if (bodega === undefined) {
    return "Seleccione una Bodega";
  }else{return 0;}
}

function validaCodAlmacenaje (tipo) {
  if(tipo === undefined){
    return "Seleccione un Tipo de Almacenaje";
  }else{return 0;}
}