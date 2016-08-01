// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosUsuariosModels', function($http){

  this.todosLosUsuarios = function(){
    
		return $http({method:'get',url:'http://192.168.1.100:3000/usuario/todosLosUsuarios'});
  			
    }  

});

BioFrut.service('obtenerIdUsuarioModels', function($http){

  this.obtenerIdUsuario = function(){

    return $http({method:'GET',url:'http://192.168.1.100:3000/usuario/obtenerIdUsuario'});
        
    }  

});



// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerUsuarioModels', function($http){

  this.obtenerUsuario = function(){

  		return $http({method:'GET', url:'http://192.168.1.100:3000/usuario/obtenerUsuario'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarUsuarioModels', function($http){

  this.actualizarUsuario = function(){

  		return $http({method:'PUT', url:'http://192.168.1.100:3000/usuario/actualizarUsuario/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarUsuarioModels', function($http){

  this.insertarUsuario = function(usuario){
    var respuesta=0;

    var idusuario=validaIdusuario(usuario.IdUsuario);
    var perfil=validaPerfil(usuario.IdPerfil);
    var cargo=validaCargo(usuario.IdCargo);
  
   
    respuesta={Id:idusuario,Perfil:perfil,Cargo:cargo};

    console.log(respuesta);

     if(respuesta.Id ===0  && respuesta.Perfil ===0 && respuesta.Cargo ===0){
      var usuario = JSON.stringify(usuario);
      console.log(usuario);
      return $http({method:'POST', url:'http://192.168.1.100:3000/usuario/insertarUsuario/usuario', data: usuario});

     }else{return respuesta;}
  }
  	
});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarUsuarioModels', function($http){

  this.obtenerUsuario = function(){

  		return $http({method:'DELETE', url:'http://192.168.1.100:3000/usuario/eliminarUsuario/1'});
  }

});

function validaIdusuario(idusuario) {

 if(idusuario === undefined){
   return "Selecione Cod. Usuario";
 }else{return 0;}

}

function validaPerfil (perfil) {

if(perfil === undefined){
  return "Selecione un Perfil";
}else{return 0;}

}

function validaCargo (cargo) {
if(cargo === undefined){
  return "Selecione un Cargo";
}else{return 0;}

}