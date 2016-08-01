// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasCuadrillasModels', function($http){

  this.todasLasCuadrillas = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/cuadrilla/todasLasCuadrillas'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
BioFrut.service('obtenerNombreCuadrillasModels', function($http){

  this.obtenerNombreCuadrillas = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/cuadrilla/obtenerNombreCuadrillas'});
        
    }  

});


BioFrut.service('obtenerIdCuadrillaModels', function($http){

  this.obtenerIdCuadrilla = function(){

    return $http({method:'GET',url:'http://localhost:3000/cuadrilla/obtenerIdcuadrilla'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerCuadrillasModels', function($http){

  this.obtenerCuadrilla = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/cuadrilla/obtenerDatosCuadrilla'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarCuadrillaModels', function($http){

  this.actualizarCuadrilla = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/cuadrilla/actualizarCuadrilla/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarCuadrillaModels', function($http){

  this.insertarCuadrilla = function(cuadrilla){

  var cuadrilla = JSON.stringify(cuadrilla);
  console.log(cuadrilla);
  return $http({method:'POST', url:'http://192.168.1.100:3000/cuadrilla/insertarCuadrilla/cuadrilla', data: cuadrilla}).success(function(data) {
    console.log(data);
  });


  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarCuadrillaModels', function($http){

  this.obtenerCuadrilla = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/cuadrilla/eliminarCuadrilla/1'});
  }

});


