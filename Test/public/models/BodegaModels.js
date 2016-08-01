// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasBodegasModels', function($http){

  this.todasLasBodegas = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/bodega/todasLasBodegas'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
BioFrut.service('obtenerNombreBodegasModels', function($http){

  this.obtenerNombreBodegas = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/bodega/obtenerNombreBodegas'});
        
    }  

});

BioFrut.service('obtenerIdBodegaModels', function($http){

  this.obtenerIdBodega = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/bodega/obtenerIdBodega'});
        
    }  

});

// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerBodegaModels', function($http){

  this.obtenerBodega = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/bodega/obtenerDatosBodega'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarBodegaModels', function($http){

  this.actualizarBodega = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/bodega/actualizarBodega/'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarBodegaModels', function($http){

  this.insertarBodega = function(bodega){

    var bodega = JSON.stringify(bodega);
    return $http({method:'POST', url:'http://192.168.1.100:3000/bodega/insertarBodega/bodega', data: bodega}).success(function(data) {
      
    });
  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarBodegaModels', function($http){

  this.obtenerBodega = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/bodega/eliminarBodega/1'});
  }

});


