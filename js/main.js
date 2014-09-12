var app = angular
  .module('app', [
    'ngRoute'
  ])

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/',{
      templateUrl:'partials/home.html',
      controller:'PageCtrl'
  })
}]);

app.controller('PageCtrl', ['$scope', function ($scope) {
  $scope.tagline ='Career Analytics. Open Source. Awesome!';
  $scope.items = ['Career Analytics     Ctrl + Alt + A','Find Job    Ctrl + Alt + F'];
}]);


app.run(['$rootScope', function ($rootScope) {
	$rootScope.settingStyle = function(){
		var set = $('.setting-content');
	    set.on('click',function(){
	      set.find('ul.setting-items').css("display","block");
	      set.stop().animate({
	        'width':'125'
	      });
	    }).mouseleave(function(){
	      set.find('ul.setting-items').css("display","none");
	      $('.keyboard-shortcuts-items').css("display","none");
	      set.stop().animate({
	        'width':'28px'
	      });
	    });
	};
	$rootScope.openKeyboardShortcuts = function(){
		var key = $('.keyboard');
		key.on('click', function(){
			$('.keyboard-shortcuts-items').show( "fade" );
		});
	};
	$rootScope.findjob = function(){
		alert(1);
	};
}])
