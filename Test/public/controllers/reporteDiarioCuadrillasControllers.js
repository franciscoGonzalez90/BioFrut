// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('reporteProduccionBarCuadrillasControllers', function($scope,cityService){     
      var i=null;
      $scope.service = cityService;
      cityService.initCities();
  

  $scope.$watch('service.getCity()', function(newVal) {

      var prueba=[];
      var prueba2=null;
      var bandejas=[];
      var nombres=[];

    var actual=obtenerFechaActual();

    $scope.ultimaActualizacion = ultimaActualizacion();
   

    var kpi=KPI(newVal);

      for(key of newVal){
          if(key.Fecha.substring(0,10) === actual){
              bandejas.push(key.Bandejas);
          }
      }

       for(key of newVal){
          if(key.Fecha.substring(0,10) === actual){
              nombres.push(key.Nombre);
          }
      }

     
    for(b in kpi){
      if(kpi[b].Bandejas !== undefined){

        if(kpi[b].Fecha.substring(0,10) === actual){
             prueba2=prueba2+kpi[b].Bandejas;
        }
      }
     
    };
    
   
    for(a in kpi){
     
      if(kpi[a].Nombre !== undefined){
          // console.log(kpi[a].Fecha.substring(0,10)+" "+actual);
        if(kpi[a].Fecha.substring(0,10) === actual){

              prueba.push(kpi[a]);

      }
    }
  
    };

  

    if($scope.puntaje === undefined || $scope.puntaje === null ||  $scope.produccion === undefined || $scope.produccion === null){

     // total de bandejas generadas durante un dia
        $scope.puntaje=prueba2;

      
    // ranking de las cuadrillas mas productivas
        $scope.produccion= prueba;
      
      
      // console.log($scope.produccion.length);
   }


    $scope.config={};
    $scope.chart = null;
    $scope.donut = null;
      // console.log(bandejas);
    // $scope.config.data2=
    $scope.config.data1 = bandejas;
      // console.log($scope.config.data1);
    $scope.typeOptions = ["line","bar","spline","step","area","area-step","area-spline","","donut"];
 
    $scope.config.type1 = $scope.typeOptions[1];
    // $scope.config.type2=$scope.typeOptions[0];

    var barConfig = {};
        barConfig.bindto = '#chart';
        barConfig.data = {};
        barConfig.data.json = {};
        barConfig.data.json.Total = $scope.config.data1; 
        barConfig.data.colors = {"Total":"#9B90C8"};
        // config.size = {"width":"1000"};
        barConfig.grid = {"x":{"show":true},"y":{"show":true}};
        barConfig.axis = {"y":{"label":{"text":"Cantidad de Bandejas Producidas","position":"outer-middle"}}};
        barConfig.data.types = {"Total":$scope.config.type1};
        barConfig.axis = {"x":{"type":"category","categories": nombres}}; 
        barConfig.legend = {"show":false};

        $scope.chart = c3.generate(barConfig); 


            });   



    });



BioFrut.service('cityService', function($http) {


   var that =this;
  this.Nombre = [];
  
  this.initCities = function() {

       $http({method:'GET',url:'http://localhost:3000/reporte/reporteProduccionCuadrilla'}).success(function(data) {
          
            that.Nombre = data;
          
      });

  };
  
  this.getCity = function() {
      return this.Nombre;
  };



});




function ultimaActualizacion(){
  var ahora = new Date();
  var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

  var now=ahora.getDate()+" de "+meses[ahora.getMonth()]+" de "+ahora.getFullYear()+" - "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds();
  return now;

}

function obtenerFechaActual(){
  var ahora = new Date();

  var tiempo=ahora.getFullYear()+"-"+(ahora.getMonth()+1)+"-"+ahora.getDate();

  return tiempo;

}


function KPI(datos){

datos.orderByNumber('Bandejas',-1);

return datos;

}

  Array.prototype.orderByNumber=function(p,so){
    //algoritmo de ordenamiento sort
  if(so!=-1&&so!=1)so=1;
  this.sort(function(a,b){
    return(a[p]-b[p])*so;
  })

}