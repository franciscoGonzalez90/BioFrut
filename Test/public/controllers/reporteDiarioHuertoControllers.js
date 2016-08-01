// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('reporteProduccionBarHuertosControllers', function($scope,cityService2){     
      var i = null;
      $scope.service2 = cityService2;
      cityService2.initCities2();
  

  $scope.$watch('service2.getCity2()', function(newVal) {
 
      var prueba=[];
      var prueba2=0;
      var bandejas2=[];
      var nombre2=[];


    var fechaActual=obtenerFechaActual();
    $scope.ultimaActualizacion = ultimaActualizacion();
   
    // var bandejas2 = obtenerBandejas(newVal); 
    // var nombre2 = obtenerNombres(newVal);
    var kpi = KPI(newVal);


    for(key of newVal){
      if(key.Fecha.substring(0,10) === fechaActual){
            bandejas2.push(key.Bandejas);
      }
    }

    for(key of newVal){
      if(key.Fecha.substring(0,10) === fechaActual){
            nombre2.push(key.Nombre);
      }
    }


    for(b in kpi){
      if(kpi[b].Bandejas !== undefined){
        if(kpi[b].Fecha.substring(0,10) === fechaActual){

             prueba2=prueba2+kpi[b].Bandejas;

        }
      }
     
    };
    
   
    for(a in kpi){
     
      if(kpi[a].Nombre !== undefined){
          // console.log(kpi[a].Fecha.substring(0,10)+" "+actual);
        if(kpi[a].Fecha.substring(0,10) === fechaActual){

              prueba.push(kpi[a]);

      }
    }
  
    };

  

    if($scope.puntaje === undefined || $scope.puntaje === null ||  $scope.produccion === undefined || $scope.produccion === null){

     // total de bandejas generadas durante un dia
        $scope.puntaje=prueba2;
     
          // $scope.total = prueba2/newVal.length;
      
    // ranking de las cuadrillas mas productivas
        $scope.produccion2= prueba;
      
      // console.log($scope.produccion.length);
   }

    $scope.config={};
    $scope.chart2 = null;
    $scope.donut = null;
      // console.log(bandejas);
    // $scope.config.data2=
    $scope.config.data2 = bandejas2;
      // console.log($scope.config.data1);
    $scope.typeOptions = ["line","bar","spline","step","area","area-step","area-spline","pie","donut"];
 
    $scope.config.type2 = $scope.typeOptions[1];
    // $scope.config.type2=$scope.typeOptions[0];

    var barConfig = {};
        barConfig.bindto = '#chartHuerto';
        barConfig.data = {};
        barConfig.data.json = {};
        barConfig.data.json.Total = $scope.config.data2; 
        barConfig.data.colors = {"Total":"#F47D44"};
        // config.size = {"width":"1000"};
        barConfig.grid = {"x":{"show":true},"y":{"show":true}};
        barConfig.axis = {"y":{"label":{"text":"Cantidad de Bandejas Producidas","position":"outer-middle"}}};
        barConfig.data.types = {"Total":$scope.config.type2};
        barConfig.axis = {"x":{"type":"category","categories": nombre2}}; 
        barConfig.legend = {"show":false};

        $scope.chart2 = c3.generate(barConfig); 


            });   



    });



BioFrut.service('cityService2', function($http) {


   var that =this;
  this.Nombre = [];
  
  this.initCities2 = function() {

       $http({method:'GET',url:'http://localhost:3000/reporte/reporteProduccionHuerto'}).success(function(data) {
          
            that.Nombre = data;

      });

  };
  
  this.getCity2 = function() {
      return this.Nombre;
  };



});

function obtenerFechaActual(){
  var ahora = new Date();

  var tiempo=ahora.getFullYear()+"-"+(ahora.getMonth()+1)+"-"+ahora.getDate();

  return tiempo;

}



function ultimaActualizacion(){
  var ahora = new Date();
  var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

  var now=ahora.getDate()+" de "+meses[ahora.getMonth()]+" de "+ahora.getFullYear()+" - "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds();
  return now;

}

function obtenerFecha(){
  var ahora = new Date();
  var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

  var now=ahora.getDate()+""+ahora.getMonth()+""+ahora.getFullYear();
  return now;
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