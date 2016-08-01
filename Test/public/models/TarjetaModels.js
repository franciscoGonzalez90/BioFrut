// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasTarjetasModels', function($http){

  this.todasLasTarjetas = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/tarjeta/todasLasTarjetas'});
  			
    }  

});

// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('obtenerNombreTarjetasModels', function($http){

  this.obtenerNombreTarjetas = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/tarjeta/obtenerNombreTarjetas'});
        
    }  

});

BioFrut.service('obtenerIdTarjetaModels', function($http){

  this.obtenerIdTarjeta = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/tarjeta/obtenerIdTarjeta'});
        
    }  

});

// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasTarjetasModels', function($http){

  this.todasLasTarjetas = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/tarjeta/todasLasTarjetas'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerTarjetaModels', function($http){

  this.obtenerTarjeta = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/tarjeta/obtenerDatosTarjeta'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarTarjetaModels', function($http){

  this.actualizarTarjeta = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/tarjeta/actualizarTarjeta/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarTarjetaModels', function($http){

  this.insertarTarjeta = function(tarjeta){
    
  var tarjeta = JSON.stringify(tarjeta);
  return $http({method:'POST', url:'http://192.168.1.100:3000/tarjeta/insertarTarjeta/tarjeta', data: tarjeta}).success(function(data) {
  });

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarTarjetaModels', function($http){

  this.obtenerTarjeta = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/tarjeta/eliminarTarjeta/1'});
  }

});