// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasBandejasModels', function($http){

  this.todasLasBandejas = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/bandeja/todasLasBandejas'});
  			
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerBandejaModels', function($http){

  this.obtenerBandeja = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/bandeja/obtenerDatosBandeja'}).success(function(data){
  		});
  }

});

BioFrut.service('obtenerIdBandejaModels', function($http){

  this.obtenerIdBandeja = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/bandeja/obtenerIdBandeja'});
        
    }  

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarBandejaModels', function($http){

  this.actualizarBandeja = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/bandeja/actualizarBandeja/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarBandejaModels', function($http){

  this.insertarBandeja = function(bandeja){

   
var bandeja = JSON.stringify(bandeja);

 return $http({method:'POST', url:'http://192.168.1.100:3000/bandeja/insertarBandeja/bandeja', data: bandeja}).success(function(data) {
   
 });
 

  } 
  		
});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarBandejaModels', function($http){

  this.obtenerBandeja = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/bandeja/eliminarBandeja/1'});
  }

});



