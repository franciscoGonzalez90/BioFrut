// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('reporteProduccionMensualHuertosControllers', function($scope,cityService4){     
      var i=null;

  cityService4.initCities4();
  $scope.service4 = cityService4;

     
      // console.log(resp);
  $scope.$watch('service4.getCity4()', function(newVal){
    
      
        
        var j=obtenerMeses(newVal);
        var t=jQuery.unique(j);
        var name=[];
        

   // console.log(t);

    for(k in t){
     
        if(t[k] !== undefined){

          switch(j[k]){
            case 1:

              name.push("Enero");
            
            break;

            case 2:

            name.push("Febrero");

            break;

            case 3:

            name.push("Marzo");

            break;

            case 4:

            name.push("Abril");

            break;
            
            case 5:

            name.push("Mayo");

            break;
            
            case 6:

            name.push("Junio");

            break;
            
            case 7:

            name.push("Julio");

            break;
            
            case 8:

            name.push("Agosto");

            break;
            
            case 9: 

            name.push("Septiembre");

            break;

            case 10: 

            name.push("Octubre");

            break;

            case 11:

              name.push("Noviembre");

             break;

            case 12: 

            name.push("Diciembre");

            break;
          }

        }

          // console.log(jQuery('#fechas').get());
      }

      $scope.fechas = name.unique(name);

     $scope.ultimaActualizacion = ultimaActualizacion();


   $scope.obtenerDatosMes = function(resp){
      var prueba=[];
      var prueba2=null;
      var tramo=0;
      var bandejas3=0;
      var nombres3=0;
      var kpi=0;

      tramo =  obtenerFechaGrafico(resp);

  
      bandejas3 = obtenerDatosGrafico(newVal,tramo); 

 

      nombres3 = obtenerDatosGraficoNombre(newVal,tramo);

    

      kpi = KPI(newVal, tramo);
  



  
    for(b in kpi){
      if(kpi[b].Bandejas !== undefined){
        if(kpi[b].mes === tramo){
          if(kpi[b].Bandejas !== "null"){
             prueba2=prueba2+kpi[b].Bandejas;
        }
      }
    }
  
    };
    
   
    for(a in kpi){
     
      if(kpi[a].Nombre !== undefined){

        if(kpi[a].mes === tramo){
          if(kpi[a].Bandejas !== "null"){
              prueba.push(kpi[a]);
          }
        }
    }
  
    };

    // console.log(bandejas3);

    if($scope.puntaje !== undefined || $scope.puntaje !== null ||  $scope.produccion !== undefined || $scope.produccion !== null){
        // $scope.puntaje="";
     // total de bandejas generadas durante un dia
        $scope.puntaje=prueba2;
    
    // ranking de las cuadrillas mas productivas
        $scope.produccion= prueba;
       
      // console.log($scope.produccion.length);
      // console.log(prueba);
      // console.log(prueba2);
      // console.log($scope.puntaje+" "+$scope.produccion);
   }


    $scope.config={};
    $scope.chart4 = null;
    $scope.donut = null;
      // console.log(bandejas);
    // $scope.config.data2=
    $scope.config.data4 = bandejas3;
      // console.log($scope.config.data1);
    $scope.typeOptions = ["line","bar","spline","step","area","area-step","area-spline","pie","donut"];
 
    $scope.config.type4 = $scope.typeOptions[1];
    // $scope.config.type2=$scope.typeOptions[0];

    var barConfig = {};
        barConfig.bindto = '#chartMensualHuerto';
        barConfig.data = {};
        barConfig.data.json = {};
        barConfig.data.json.Total = $scope.config.data4; 
        barConfig.data.colors = {"Total":"#E46764"};
        // config.size = {"width":"1000"};
        barConfig.grid = {"x":{"show":true},"y":{"show":true}};
        barConfig.axis = {"y":{"label":{"text":"Cantidad de Bandejas Producidas","position":"outer-middle"}}};
        barConfig.data.types = {"Total":$scope.config.type4};
        barConfig.axis = {"x":{"type":"category","categories": nombres3}}; 
        barConfig.legend = {"show":false};

        $scope.chart4 = c3.generate(barConfig); 

   }

            });   


       

    });



BioFrut.service('cityService4', function($http) {


   var that =this;
  this.Nombre = [];
  
  this.initCities4 = function() {

       $http({method:'GET',url:'http://localhost:3000/reporte/reporteHuertoMensuales'}).success(function(data) {
            if(data.length !== 0){
            that.Nombre = data;
          }else{
            alert("No existen datos asociados al mes seleccionados.");
          }
         
      });

  };
  
  this.getCity4 = function() {
      return this.Nombre;
  };



});


function obtenerFechaGrafico(resp){
  var date=0;

      switch(resp){

          case 'Enero': date=1;

          break;

          case 'Febrero': date=2;

          break;

          case 'Marzo': date=3;

          break;

          case 'Abril': date=4;

          break;

          case 'Mayo': date=5;

          break;

          case 'Junio': date=6;

          break;

          case 'Julio': date=7;

          break;

          case 'Agosto': date=8;

          break;

          case 'Septiembre': date=9;

          break;

          case 'Octubre': date=10;
          
          break;

          case 'Noviembre': date=11;

          break;

          case 'Diciembre': date=12;

          break;
          
        }

      return date;
}

function obtenerMeses(datos){

    var caca=[];

  
     for(i=0; i < datos.length; i++){
          caca.push(datos[i].mes);
      }

     return caca;
}

function obtenerDatosGrafico(data,tramo){

    var bandeja=[];
  
    // console.log(tramo);
   for(i=0; i < data.length; i++){

      if(data[i].mes === tramo){
      
       bandeja.push(data[i].Bandejas);
       // console.log(data[i].Fecha.substring(5,7) === fecha.substring(5,7) && data[i].Fecha.substring(9,10);
      }

     }
        
      
      // console.log(obtenerDatos());
      return bandeja;
   
}

function obtenerDatosGraficoNombre(data,tramo){

    var nombre=[];
  
    // console.log(tramo);
   for(i=0; i < data.length; i++){

      if(data[i].mes === tramo){
      
       nombre.push(data[i].Nombre);
       // console.log(data[i].Fecha.substring(5,7) === fecha.substring(5,7) && data[i].Fecha.substring(9,10);
      }
     }
        
      
      // console.log(obtenerDatos());
      return nombre;
}


function ultimaActualizacion(){
  var ahora = new Date();

  var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

  var now=ahora.getDate()+" de "+meses[ahora.getMonth()]+" de "+ahora.getFullYear()+" - "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds();

  return now;

}



function KPI(datos,tramo){

  var prueba=[];

  for(key of datos){

    if(key.mes === tramo){

      prueba.push(key);

    }

  }


   prueba.orderByNumber('Bandejas',-1);

return prueba;

}

Array.prototype.orderByNumber=function(p,so){
          //algoritmo de ordenamiento sort
            if(so!=-1&&so!=1)so=1;
            this.sort(function(a,b){
              return(a[p]-b[p])*so;
            });

          }
