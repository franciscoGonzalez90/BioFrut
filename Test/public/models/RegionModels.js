// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasRegionesModels', function($http){

  this.todasLasRegiones = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/region/todasLasRegiones'});
  			
    }  

});


BioFrut.service('obtenerNombreRegionesModels', function($http){

  this.obtenerNombreRegiones = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/region/obtenerNombreRegiones'});
        
    }  

});

BioFrut.service('obtenerIdRegionModels', function($http){

  this.obtenerIdRegion = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/region/obtenerIdRegion'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerRegionModels', function($http){

  this.obtenerRegion = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/region/obtenerDatosRegion'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarRegionModels', function($http){

  this.actualizarRegion = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/region/actualizarRegion/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarRegionModels', function($http){

  this.insertarRegion = function(region){
    
  var region = JSON.stringify(region);
  return $http({method:'POST', url:'http://192.168.1.100:3000/region/insertarRegion/region', data: region}).success(function(data) {
  });

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarRegionModels', function($http){

  this.obtenerRegion = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/region/eliminarRegion/1'});
  }

});