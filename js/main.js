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

app.controller("loadKeyboard", function($scope, $http) {
  $http.get('data/keyboardshortcuts.json').
    success(function(data, status, headers, config) {
      $scope.keyList = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});

app.controller('PageCtrl', ['$scope', function ($scope) {
 	$scope.tagline ='Career Analytics. Open Source. Awesome!';
}]);

app.controller('openCompaniesBar', ['$scope', function ($scope) {
	var cp = $('.companies-bar'),
	list = $('.companies-list');
	cp.click(function(){
		var ic = $(this).find('i');
		if(ic.hasClass('fa-arrow-up')){
			ic.removeClass('fa-arrow-up').addClass('fa-arrow-down');
			list.animate({
				height:'120px',
        padding:'10px'
			});
		}else{
			ic.removeClass('fa-arrow-down').addClass('fa-arrow-up');
			list.animate({
				height:'0',
        padding:'5px 10px'
			});
		}
	});
}])

app.controller('openKeyboardShortcuts', ['$scope', function ($scope) {
	var key = $('.keyboard');
	key.on('click', function(){
		$('.keyboard-shortcuts-items').slideToggle();
	});
}])

app.controller('settingStyle', ['$scope', function ($scope) {
	var set = $('.setting-content');
    set.on('click',function(){
      set.find('ul.setting-items').css("display","block");
      set.stop().animate({
        width:'125'
      });
    }).mouseleave(function(){
      set.find('ul.setting-items').css("display","none");
      $('.keyboard-shortcuts-items').css("display","none");
      set.stop().animate({
        width:'28px'
      });
    });
}])

