// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasCiudadesModels', function($http){

  this.todasLasCiudades = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/ciudad/todasLasCiudades'});
  			
    }  

});


BioFrut.service('obtenerNombreCiudadesModels', function($http){

  this.obtenerNombreCiudades = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/ciudad/obtenerNombreCiudades'});
        
    }  

});


BioFrut.service('obtenerIdCiudadModels', function($http){

  this.obtenerIdCiudad = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/ciudad/obtenerIdCiudad'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerCiudadModels', function($http){

  this.obtenerCiudad = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/ciudad/obtenerDatosCiudad'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarCiudadModels', function($http){

  this.actualizarCiudad = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/ciudad/actualizarCiudad/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarCiudadModels', function($http){

  this.insertarCiudad = function(ciudad){

  var ciudad = JSON.stringify(ciudad);
  return $http({method:'POST', url:'http://192.168.1.100:3000/ciudad/insertarCiudad/ciudad', data: ciudad}).success(function(data) {
  
  });

  }

  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarCiudadModels', function($http){

  this.obtenerCiudad = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/ciudad/eliminarCiudad/1'});
  }

});


function validaNombre(nombre) {

    var RegExPattern=new RegExp("^[a-zA-ZÑñ]\s*$");
    if(RegExPattern.test(nombre)){
    return('Nombre Invalido');

    }else{return 0;}

  }

function validaRegion(region){
if(region===undefined){
return("Seleccione una región");
}else{return 0;}
}
  
function validaCodigo (codigo) {
 if(codigo===undefined){
  return("Selecione Codigo Ciudad");
 }else{return 0;}
}