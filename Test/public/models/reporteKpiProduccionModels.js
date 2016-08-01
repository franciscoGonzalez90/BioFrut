BioFrut.service('todasLasMermasModels', function($http){

  this.todasLasMermas = function(){

		return $http({method:'GET',url:'http://192.168.1.100:3000/reporte/obtenerPerdidas'});
  			
    }  

});

BioFrut.service('bandejasGeneradasModels', function($http){

  this.todasLasBandejasGeneradas = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/reporte/obtenerGeneradas'});
        
    }  

});

BioFrut.service('factorMermaModels', function($http){

  this.factorMerma = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/reporte/obtenerFactorMerma'});
        
    }  

});
