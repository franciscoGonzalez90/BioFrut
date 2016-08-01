// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosTproductosModels', function($http){

  this.todosLosTproductos = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/tproducto/todosLosTproductos'});
  			
    }  

});

// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('obtenerNombreTproductosModels', function($http){

  this.obtenerNombreTproductos = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/tproducto/obtenerNombreTproductos'});
        
    }  

});

BioFrut.service('obtenerIdTproductoModels', function($http){

  this.obtenerIdTproducto = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/tproducto/obtenerIdTproducto'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerTproductoModels', function($http){

  this.obtenerTproducto = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/tproducto/obtenerDatosTproducto'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarTproductoModels', function($http){

  this.actualizarTproducto = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/tproducto/actualizarTproducto/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarTproductoModels', function($http){

  this.insertarTproducto = function(tproducto){
    
  var tproducto = JSON.stringify(tproducto);
  return $http({method:'POST', url:'http://192.168.1.100:3000/tproducto/insertarTproducto/tproducto', data: tproducto}).success(function(data) {

  });

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarTproductoModels', function($http){

  this.obtenerTproducto = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/tproducto/eliminarTproducto/1'});
  }

});