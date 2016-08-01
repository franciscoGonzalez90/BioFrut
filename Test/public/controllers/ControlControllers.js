// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosControlesControllers', function($scope, todosLosControlesModels){

	todosLosControlesModels.todosLosControles().success(function(data){
		var datos=[];

		for(key in data){
		var jsonData={"IdControl":data[key].IdControl, "Fecha":data[key].Fecha.substring(0,10),"Hora":data[key].Hora, "Nota":data[key].Nota, "Nombre":data[key].Nombre};
			datos.push(jsonData);
		}
		
		$scope.todosLosControles = datos;
	}); 

	

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreControlesControllers', function($scope, obtenerNombreControlesModels) {

	obtenerNombreControlesModels.obtenerNombreControles().success(function(data){
		$scope.nombreControles = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerControlControllers', function($scope, obtenerControlModels) {

	obtenerControlModels.obtenerControl().success(function(data){
		$scope.obtenerControl = data;
	});

});


BioFrut.controller('obtenerIdControlControllers', function($scope, obtenerIdControlModels) {

	obtenerIdControlModels.obtenerIdControl().success(function(data){

		$scope.IdControl = data;
        console.log($scope.IdControl);
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarControlControllers', function($scope, actualizarControlModels) {

	actualizarControlModels.actualizarControl().success(function(data){
		$scope.actualizarControl = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarControlControllers', function($scope, insertarControlModels) {


	 var fecha=obtenerfecha();
     $scope.Fecha=fecha;

     var hora=obtenerhora();
     $scope.Hora=hora;

	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosControl = function(control){
			control.Fecha=fecha;
			control.Hora=hora;
   
     var codigo=validaControlCalidad(control.IdControl);
     var numero=validaNumero(control.TotalMerma);
     var calificacion=validaCalificacion(control.IdCalificacion);
     var Estado=validaEstado(control.IdEstadoProducto);
           
          if(codigo ===0 && numero ===0 && calificacion===0 && Estado===0){
		 insertarControlModels.insertarControl(control).success(function(data){
		 	if(data.affectedRows===1){
		    $("#datosCalidad").show(2000).fadeOut(4000);
		    }
		   setInterval("location.reload()",7000);
		 });
		}

		 if(codigo !=0){
              $scope.codcontrol=codigo;
              $("#codcalidad").show(1000).fadeOut(4000);
		 }else{$("#codcalidad").hide();}

		 if(numero !=0){
             $scope.total=numero;
             $("#total").show(1000).fadeOut(4000);
		 }else{$("#total").hide();}

		 if(calificacion !=0){
            $scope.nota=calificacion;
            $("#nota").show(1000).fadeOut(4000);
		 }else{$("#nota").hide();}

		 if(Estado !=0){
            $scope.estado=Estado;
            $("#estadoproducto").show(1000).fadeOut(4000);
		 }else{$("#estadoproducto").hide();}


			
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosControl= function(control){

		$scope.control = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarControlControllers', function($scope,  eliminarControlModels) {

	eliminarControlModels.eliminarControl().success(function(data){
		$scope.obtenerControl = data;
	});

});

function obtenerfecha(){
var f = new Date();
var fecha=f.getFullYear()+ "-" + (f.getMonth() +1) + "-" +f.getDate(); 
return fecha;
}

function obtenerhora () {
 var d = new Date(); 
 var hora=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds(); 
 return hora;
}

function validaNumero (numero) {
  if(numero<=0){
    return "Ingrese Numeros Positivos";
  }else{return 0;}
}

function validaControlCalidad (calidad) {
  if(calidad === undefined){
    return "Seleccione Cod Control Calidad";
  }else{return 0;}
}

function validaCalificacion (nota) {
  if(nota === undefined){
    return "Seleccione una Calificación";
  }else{return 0;}
}

function validaEstado (estado) {
  if(estado === undefined){
    return "Seleccione un Estado Producto";
  }else{return 0;}
}