// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosTrabajadoresModels', function($http){

  this.todosLosTrabajadores = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/trabajador/todosLosTrabajadores'});
  			
    }  

});

// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerNombreTrabajadoresModels', function($http){

  this.obtenerTrabajadores = function(){

      return $http({method:'GET', url:'http://192.168.1.100:3000/trabajador/obtenerNombreTrabajadores'}).success(function(data){
      });
  }

});

// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerTrabajadorModels', function($http){

  this.obtenerTrabajador = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/trabajador/obtenerDatosTrabajador'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarTrabajadorModels', function($http){

  this.actualizarTrabajador = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/trabajador/actualizarTrabajador/'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarTrabajadorModels', function($http){

  this.insertarTrabajador = function(trabajador){

   
  var trabajador = JSON.stringify(trabajador);
  return $http({method:'POST', url:'http://localhost:3000/trabajador/insertarTrabajador/trabajador', data: trabajador}).success(function(data) {
    
  });
  
}

});


// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarTrabajadorModels', function($http){

  this.obtenerTrabajador = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/trabajador/eliminarTrabajador/1'});
  }

});




  
  
