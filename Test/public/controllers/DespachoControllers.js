// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosDespachosControllers', function($scope, todosLosDespachosModels){

	todosLosDespachosModels.todosLosDespachos().success(function(data){
		var datos=[];
		for(key in data){
			var jsonData={"IdDespacho":data[key].IdDespacho, "Fecha":data[key].Fecha.substring(0,10),"Hora":data[key].Hora, "CantidadPale":data[key].CantidadPale, "Nombre":data[key].Nombre,"IdControl":data[key].IdControl,"Cuadrilla":data[key].Cuadrilla};
			datos.push(jsonData);
		}
		$scope.todosLosDespachos= datos;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreDespachosControllers', function($scope, obtenerNombreDespachosModels) {

	obtenerNombreDespachosModels.obtenerNombreDespachos().success(function(data){
		$scope.nombreDespachos = data;
	});

});

BioFrut.controller('obtenerIdDespachoControllers', function($scope, obtenerIdDespachoModels) {

	obtenerIdDespachoModels.obtenerIdDespacho().success(function(data){

		$scope.IdDespacho = data;
        // console.log($scope.IdDespacho);
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerDespachoControllers', function($scope, obtenerDespachoModels) {

	obtenerDespachoModels.obtenerDespacho().success(function(data){
		$scope.obtenerDespacho= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarDespachoControllers', function($scope, actualizarDespachoModels) {

	actualizarDespachoModels.actualizarDespacho().success(function(data){
		$scope.actualizarDespacho = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarDespachoControllers', function($scope, insertarDespachoModels) {

	 var fecha=obtenerfecha();
     $scope.Fecha=fecha;

     var hora=obtenerhora();
     $scope.Hora=hora;
      
	   // integracion de patron observer
	       $scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosDespacho= function(despacho){	
                 despacho.Fecha=fecha;
                 despacho.Hora=hora;

             var idDespacho=validaIddespacho(despacho.IdDespacho);
             var pale=validaCantidad(despacho.CantidadPale);
             var calidad=validaCalidad(despacho.IdControl);
             var tproducto=validaTproducto(despacho.IdTipoProducto);
             var cuadrilla=validaCuadrillas(despacho.IdCuadrilla);
 
              if(idDespacho===0 && pale===0 && calidad===0 && tproducto===0 && cuadrilla===0){
			insertarDespachoModels.insertarDespacho(despacho).success(function(data) {
			 if(data.affectedRows===1){
		      $("#datosDespacho").show(2000).fadeOut(4000);
		      }
		      setInterval("location.reload()",7000);
			});

		      }
			 
			 if(idDespacho !=0){
               $scope.iddespacho=idDespacho;
               $("#despacho2").show(1000).fadeOut(40000);
			 }
			 else{$("#despacho2").hide();}

			  if(pale !=0){
               $scope.cantidad=pale;
               $("#cantidad2").show(1000).fadeOut(40000);
            } else{$("#cantidad2").hide();}

			  if(calidad !=0){
               $scope.control=calidad;
               $("#control2").show(1000).fadeOut(40000);
            }else{$("#control2").hide();}

			  if(tproducto !=0){
               $scope.producto=tproducto;
               $("#producto2").show(1000).fadeOut(40000);
            }else{$("#producto2").hide();}

			  if(cuadrilla !=0){
               $scope.Cuadrilla=cuadrilla;
               $("#cuadrilla2").show(1000).fadeOut(40000);
            }else{$("#cuadrilla2").hide();}
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosDespacho = function(despacho){

		$scope.despacho = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarDespachoControllers', function($scope,  eliminarDespachoModels) {

	eliminarDespachoModels.eliminarDespacho().success(function(data){
		$scope.obtenerDespacho = data;
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

function validaIddespacho(id) {
 if(id === undefined){
 return "Seleccione Cod Despacho";
 }else{return 0;}
}

function validaCantidad(pale) {
  if(pale <= 0){
    return "Ingrese Numeros Positivos";
  }else{return 0;}
}

function validaCalidad(calidad) {
if(calidad === undefined){
  return "Seleccione un Control de Calidad";
}else{return 0;}
}

function validaTproducto(producto) {
  if(producto === undefined){
    return "Seleccione un Tipo de Producto";
  }else{return 0;}
}

function validaCuadrillas (cuadrilla) {
  if(cuadrilla === undefined){
    return "Seleccione una Cuadrilla";
  }else{return 0;}
}