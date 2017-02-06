var app = angular.module("myApp", ["ngRoute", "ngResource"]);
app.config(function($routeProvider) {
	$routeProvider
	.when("/cool", {
		templateUrl : "cool.htm"
	})
});

app.controller('AppCtrl', function($scope){
	$scope.myImages = ["1.png", "2.png", "3.png", "4.png"]
	$scope.getImagePath = function(imageName) {
		return "photos/" + imageName;
	};
	$scope.effects = ["blur(3px)"]
	$scope.addEffect = function(effect){
		video.setAttribute("style","-webkit-filter:" + effect);
	}

});

// app.directive('ghVisualizaion', function(){
// 	var link = function($scope){



// 		d3.select('#snap')
// 		.append('image')
// 		.append('xlink:href', "1.png")
// 		.attr("height", 300)
// 		.attr("width", 200)
// 		.attr("x", 228)
//   		.attr("y",53);
		
		
// 	};

// 	return{
// 		restrict: 'EA',
// 		link: link
// 	}

// });
