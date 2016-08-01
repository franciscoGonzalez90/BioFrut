// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasCalificacionesModels', function($http){

  this.todasLasCalificaciones = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/calificacion/todasLasCalificaciones'});
  			
    }  

});


BioFrut.service('obtenerNombreCalificacionesModels', function($http){

  this.obtenerNombreCalificaciones = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/calificacion/obtenerNombreCalificaciones'});
        
    }  

});

BioFrut.service('obtenerIdCalificacionModels', function($http){

  this.obtenerIdCalificacion= function(){

    return $http({method:'GET',url:'http://localhost:3000/calificacion/obtenerIdCalificacion'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerCalificacionModels', function($http){

  this.obtenerCalificacion = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/calificacion/obtenerDatosCalificacion'}).success(function(data){

  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarCalificacionModels', function($http){

  this.actualizarCalificacion = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/calificacion/actualizarCalificacion/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarCalificacionModels', function($http){

  this.insertarCalificacion = function(calificacion){
    
  var calificacion = JSON.stringify(calificacion);
  return $http({method:'POST', url:'http://192.168.1.100:3000/calificacion/insertarCalificacion/calificacion', data: calificacion}).success(function(data) {
    
  });

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarCalificacionModels', function($http){

  this.obtenerCalificacion = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/calificacion/eliminarCalificacion/1'});
  }

});