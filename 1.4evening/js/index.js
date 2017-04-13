var myscroll=new IScroll(".content");
document.addEventListener("touchmove",function(e){
	e.preventDefault();
},false);
var myapp=angular.module("app",[]);
myapp.controller("ctrl",function($scope){
	$scope.flag=true;
	$scope.mark=function(){
		$scope.flag=!$scope.flag
	}	
})