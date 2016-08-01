// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosControlesBodegaModels', function($http){

  this.todosLosControlesBodegas = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/controlbodega/todosLosControlesBodega'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
BioFrut.service('obtenerNombreControlBodegasModels', function($http){

  this.obtenerNombreControlBodegas = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/controlbodega/obtenerNombreControlBodegas'});
        
    }  

});

BioFrut.service('obtenerIdControlBodegaModels', function($http){

  this.obtenerIdControlBodega = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/controlbodega/obtenerIdControlBodega'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerControlBodegaModels', function($http){

  this.obtenerControlBodega = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/controlbodega/obtenerControlBodega'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarControlBodegaModels', function($http){

  this.actualizarControlBodega = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/controlbodega/actualizarControlBodega'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarControlBodegaModels', function($http){

  this.insertarControlBodega = function(controlbodega){
   

  var controlbodega=JSON.stringify(controlbodega);
  return $http({method:'POST', url:'http://192.168.1.100:3000/controlbodega/insertarControlBodega/controlbodega', data: controlbodega}).success(function(data) {
  });

   
  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarControlBodegaModels', function($http){

  this.obtenerControlBodega = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/controlbodega/eliminarControlBodega'});
  }

});


