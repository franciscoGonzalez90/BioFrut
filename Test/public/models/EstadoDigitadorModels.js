
// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarEstadoModels', function($http){

  this.actualizarEstado = function(estado){
    
  var estado = JSON.stringify(estado);
  // console.log(estado);
  return $http({method:'POST', url:'http://192.168.1.100:3000/estado/actualizarEstado/estado', data: estado});

  }
  		

});

