// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosCargosModels', function($http){

  this.todosLosCargos = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/cargo/todosLosCargos'});
  			
    }  

});

BioFrut.service('obtenerNombreCargosModels', function($http){

  this.obtenerNombreCargos = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/cargo/obtenerNombreCargos'});
        
    }  

});

BioFrut.service('obtenerIdCargoModels', function($http){

  this.obtenerIdCargo = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/cargo/obtenerIdCargo'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerCargoModels', function($http){

  this.obtenerCargo = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/cargo/obtenerDatosCargo'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarCargoModels', function($http){

  this.actualizarCargo = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/cargo/actualizarCargo/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarCargoModels', function($http){

  this.insertarCargo = function(cargo){
  
  var cargo = JSON.stringify(cargo);
  return $http({method:'POST', url:'http://192.168.1.100:3000/cargo/insertarCargo/cargo', data: cargo}).success(function(data) {
    
  });
  
  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarCargoModels', function($http){

  this.obtenerCargo = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/cargo/eliminarCargo/1'});
  }

});



