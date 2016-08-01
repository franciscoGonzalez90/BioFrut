BioFrut.controller('HomeControllers',function($scope,$http){
	$scope.login = function(usuario){
		console.log(usuario);
		$http({method:'POST', url:'/login', data: usuario}).success(function(data){
			console.log(data);
		});

	}
});