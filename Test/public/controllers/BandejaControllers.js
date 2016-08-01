// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasBandejasControllers', function($scope, todasLasBandejasModels){

	todasLasBandejasModels.todasLasBandejas().success(function(data){
		var datos=[];
		
		for(key in data){
			var algo={"NumeroBandeja":data[key].NumeroBandeja,"Fecha":data[key].Fecha.substring(0,10),"Hora":data[key].Hora,"IdTarjeta":data[key].IdTarjeta,"Nombre":data[key].Nombre};
	
			datos.push(algo);
		}
		// console.log(datos);
		$scope.todasLasBandejas= datos;
	}); 

	

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerBandejaControllers', function($scope, obtenerBandejaModels) {

	obtenerBandejaModels.obtenerBandeja().success(function(data){
		$scope.obtenerBandeja = data;
	});

});

BioFrut.controller('obtenerIdBandejaControllers', function($scope, obtenerIdBandejaModels) {

	obtenerIdBandejaModels.obtenerIdBandeja().success(function(data){

		$scope.IdBandeja = data;
        // console.log($scope.IdBandeja);
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarBandejaControllers', function($scope, actualizarBandejaModels) {

	actualizarBandejaModels.actualizarBandeja().success(function(data){
		$scope.actualizarBandeja = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarBandejaControllers', function($scope, insertarBandejaModels) {

     var fecha=obtenerFecha();
     $scope.Fecha=fecha;
	console.log(fecha);

     var hora=obtenerHora();
     $scope.Hora=hora;
    
    
	// integracion de patron observer
	$scope.$watch(function(){
		 
		// boton almacenar nuevo usuario
	    $scope.obtenerDatosBandeja= function(bandeja){
         var respuesta=0;
         bandeja.Fecha=fecha;
         bandeja.Hora=hora;

         var idbandeja=validaId(bandeja.IdBandeja);
         var Numero=validaNumero(bandeja.NumeroBandeja);
         var Tarjeta=validaTarjeta(bandeja.IdTarjeta);
         var tproducto=validaTProducto(bandeja.IdTipoProducto);
          
          if(idbandeja ===0 && Numero ===0 && Tarjeta ===0 && tproducto ===0){
		 insertarBandejaModels.insertarBandeja(bandeja).success(function(data) {
		   if(data.affectedRows===1){
		  $("#datosBandeja").show(2000).fadeOut(4000);
		 }
		 setInterval("location.reload()",7000);
		 });
          }

         if(Numero !=0){

          $scope.numero=Numero;

         $("#numero").show(2000).fadeOut(6000);
         }
         else{$("#numero").hide();}

         if(Tarjeta !=0){
           
           $scope.tarjeta=Tarjeta;

         $("#tarjeta").show(2000).fadeOut(6000);
         }else{ $("#tarjeta").hide();}
         
         if(tproducto !=0){
           
           $scope.producto=tproducto;

         $("#producto").show(2000).fadeOut(6000);
         }else{ $("#producto").hide();}
         
         if(idbandeja !=0){
           $scope.codigo=idbandeja;

         $("#codigo").show(2000).fadeOut(6000);
         }else{ $("#codigo").hide();}
       
       };
     
		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosBandeja = function(bandeja){

		$scope.bandeja = {};

		}

	});
 
});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarBandejaControllers', function($scope,  eliminarBandejaModels) {

	eliminarBandejaModels.eliminarBandeja().success(function(data){
		$scope.obtenerBandeja = data;
	});

});


function obtenerFecha(){
var f = new Date();
var fecha2=f.getFullYear()+"-"+(f.getMonth()+1)+"-"+f.getDate(); 
return fecha2;
}

function obtenerHora () {
 var d = new Date(); 
 var hora=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds(); 
 return hora;
}



function validaNumero(numero) {
  if(numero<=0){
  return "Ingrese numeros positivos";
  }else{ return 0;}
  
}

function validaTarjeta (tarjeta) {
 if(tarjeta === undefined){
 return "Seleccione un IdTarjeta";
 }else{return 0;}

}

function validaTProducto (tproducto) {
  if(tproducto === undefined){
   return "Seleccione un Tipo de Producto";
  }else{return 0;}
}


function validaId (idbandeja) {
 if(idbandeja === undefined){
  return "Seleccione Cod Bandeja"
 }else{return 0;}

}
