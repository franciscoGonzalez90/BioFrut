// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosTrabajadoresControllers', function($scope, todosLosTrabajadoresModels){

	todosLosTrabajadoresModels.todosLosTrabajadores().success(function(data){
		var datos=[];
		for(key in data){
			var jsonData={"Rut":data[key].Rut,"Nombre":data[key].Nombre,"Apellido":data[key].Apellido,"FechaNacimiento":data[key].FechaNacimiento.substring(0,10), "Telefono":data[key].Telefono};
			datos.push(jsonData);
		}
		
		$scope.todosLosTrabajadores = datos;
	}); 

	

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreTrabajadoresControllers', function($scope, obtenerNombreTrabajadoresModels) {

	obtenerNombreTrabajadoresModels.obtenerTrabajadores().success(function(data){
		$scope.nombreTrabajadores = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerTrabajadorControllers', function($scope, obtenerTrabajadorModels) {

	obtenerTrabajadorModels.obtenerTrabjador().success(function(data){
		$scope.obtenerTrabjador = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarTrabajadorControllers', function($scope, actualizarTrabajadorModels) {

	actualizarTrabajadorModels.actualizarTrabajador().success(function(data){

		$scope.actualizarTrabajador = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarTrabajadorControllers', function($scope, insertarTrabajadorModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosTrabajador = function(trabajador){

    var x=trabajador.Rut.split("-");
    var z=validarut(x[0],x[1]);
    
     if(z===true){
    insertarTrabajadorModels.insertarTrabajador(trabajador).success(function(data) {
    	console.log(data);
   	  if(data.affectedRows===1){
		$("#datosTrabajador").show(2000).fadeOut(4000);
		 }
		 setInterval("location.reload()",7000);
    });

   }

     if(z ===false){
			$scope.rut="Rut Incorrecto";
		    $("#rut").show(2000).fadeOut(4000);
          }else{$("#rut").hide();}
       }
		});
     
		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosTrabajador= function(trabajador){

		$scope.trabajador = {};	
 }
    
 
});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarTrabajadorControllers', function($scope,  eliminarTrabajadorModels) {

	eliminarTrabajadorModels.eliminarTrabajador().success(function(data){
		$scope.obtenerTrabjador = data;
	});

});

function validarut(ruti,dvi){
 var rut = ruti+"-"+dvi;
 if (rut.length<9)
     return(false)
  i1=rut.indexOf("-");
  dv=rut.substr(i1+1);
  dv=dv.toUpperCase();
  nu=rut.substr(0,i1);
 
  cnt=0;
  suma=0;
  for (i=nu.length-1; i>=0; i--)
  {
    dig=nu.substr(i,1);
    fc=cnt+2;
    suma += parseInt(dig)*fc;
    cnt=(cnt+1) % 6;
   }
  dvok=11-(suma%11);
  if (dvok==11) dvokstr="0";
  if (dvok==10) dvokstr="K";
  if ((dvok!=11) && (dvok!=10)) dvokstr=""+dvok;
 
  if (dvokstr==dv)
     return(true);
  else
     return(false);
}

