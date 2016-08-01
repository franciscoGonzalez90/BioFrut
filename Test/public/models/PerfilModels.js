// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosPerfilesModels', function($http){

  this.todosLosPerfiles = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/perfil/todosLosPerfiles'});
  			
    }  

});


BioFrut.service('obtenerNombrePerfilesModels', function($http){

  this.todosLosNombresPerfiles = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/perfil/obtenerNombresPerfiles'});
        
    }  

});

BioFrut.service('obtenerIdPerfilModels', function($http){

  this.obtenerIdPerfil = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/perfil/obtenerIdPerfil'});
        
    }  

});



// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerPerfilModels', function($http){

  this.obtenerPerfil = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/perfil/obtenerDatosPerfil'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarPerfilModels', function($http){

  this.actualizarPerfil = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/perfil/actualizarPerfil/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarPerfilModels', function($http){
  var ingresoPerfil=0;
  this.insertarPerfil = function(perfil){
    
  var perfil = JSON.stringify(perfil);
 
 return $http({method:'POST', url:'http://192.168.1.100:3000/perfil/insertarPerfil/perfil', data: perfil}).success(function(data) {

  });

  }
});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarPerfilModels', function($http){

  this.obtenerPerfil = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/perfil/eliminarPerfil/1'});
  }

});