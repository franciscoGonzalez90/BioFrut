BioFrut.controller('todasLasMermasControllers', function($scope, todasLasMermasModels, bandejasGeneradasModels, factorMermaModels){ 

    $scope.ultimaActualizacion=ultimaActualizacion();

    

  todasLasMermasModels.todasLasMermas().success(function(data){
      var name=[];
      var mes=meses(data);
      var bandejas=[];
      var factor=[];

     bandejasGeneradasModels.todasLasBandejasGeneradas().success(function(data){
        bandejas=data;
     });

     factorMermaModels.factorMerma().success(function(data){
        factor=data;
     }); 

      for(key of mes){
        switch(key){
            case 1,01:

              name.push("Enero");
            
            break;

            case 2,02:

            name.push("Febrero");

            break;

            case 3,03:

            name.push("Marzo");

            break;

            case 4,04:

            name.push("Abril");

            break;
            
            case 5,05:

            name.push("Mayo");

            break;
            
            case 6,06:

            name.push("Junio");

            break;
            
            case 7,07:

            name.push("Julio");

            break;
            
            case 8,08:

            name.push("Agosto");

            break;
            
            case 9,09: 

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
      // console.log(name);
      $scope.fechas = name;

    $scope.obtenerDatosMes = function(mes){

      // console.log(factor);
      var bandejasMes=0;
      var numeroMes=obtenerMes(mes);
      var merma = mermas(numeroMes,data);
      var lista=[];
      var lista2=[];
      var listaFinal=[];
      // console.log(numeroMes);
      for(key in bandejas){
       
          if(bandejas[key].mes == numeroMes && bandejas[key].mes !== undefined){
             // console.log(bandejas[key].mes+" "+numeroMes);
             bandejasMes=bandejas[key].bandejas;
          }
      }
      
      for(key in factor){
        if(factor[key].mes !== undefined){
            // console.log(factor[key].mes+" "+numeroMes);
        if(factor[key].mes.toString() == numeroMes){
          lista.push(factor[key]);
          }
        }
      }

       lista2=factorMerma(lista);

      for(key in lista2){
        if(lista2[key].mes){
          // console.log(lista2[key]);
          listaFinal.push(lista2[key]);
        }
      }
      
      $scope.todasLasMermas=listaFinal;


       $scope.totalMerma = merma;
       $scope.bandejasMes=bandejasMes;
       var total=100*(merma/bandejasMes);
       // console.log(Math.round(total));
       $scope.totalPromedio= Math.round(total);


    }
   
     }); 


    });


// funciones javascript

function ultimaActualizacion(){
  var ahora = new Date();

  var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

  var now=ahora.getDate()+" de "+meses[ahora.getMonth()]+" de "+ahora.getFullYear()+" - "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds();

  return now;

}

function obtenerMes(mes){
  var name=[];

  switch(mes){
    case 'Enero': name.push(1);break;
    case 'Febrero': name.push(2);break;
    case 'Marzo': name.push(3);break;
    case 'Abril': name.push(4);break;
    case 'Mayo': name.push(5);break;
    case 'Junio': name.push(6);break;
    case 'Julio': name.push(7);break;
    case 'Agosto': name.push(8);break;
    case 'Septiembre': name.push(9);break;
    case 'Octubre': name.push(10);break;
    case 'Noviembre': name.push(11);break;
    case 'Diciembre': name.push(12);break;
  }
  return name;
}

function mermas(mes,data){
  var datos=[];
  var total=0;
  for(key in data){

    if(data[key].mes == mes){
      total=data[key].merma;
    }
  }
  return total;
}

function meses(data){
  var mes = [];
  var unico=[];

  for(key in data){
    if(data[key].mes !== undefined){
    mes.push(data[key].mes);
    }
  }

  unico = mes.unique(mes);

  return unico;

}



function factorMerma(datos){

  var prueba=[];

  for(key in datos){

      prueba.push(datos[key]);

}

  prueba.orderByNumber('merma',-1);

  return prueba;

}

Array.prototype.orderByNumber=function(p,so){
          //algoritmo de ordenamiento sort
            if(so!=-1&&so!=1)so=1;
            this.sort(function(a,b){
              return(a[p]-b[p])*so;
            });

          }

Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});
