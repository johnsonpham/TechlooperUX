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

app.controller('openCompaniesBar', ['$scope', function ($scope) {
	var cp = $('.companies-bar'),
	list = $('.companies-list');
	cp.click(function(){
		var ic = $(this).find('i');
		if(ic.hasClass('fa-arrow-up')){
			ic.removeClass('fa-arrow-up').addClass('fa-arrow-down');
			$(this).stop().animate({
				bottom:"120px"
			});
			list.stop().animate({
				height:'120px',
				display:'block'
			});
		}else{
			ic.removeClass('fa-arrow-down').addClass('fa-arrow-up');
			$(this).stop().animate({
				bottom:"0"
			});
			list.stop().animate({
				height:'0',
				display:'none'
			});
		}
	});
}])

app.controller('openKeyboardShortcuts', ['$scope', function ($scope) {
	var key = $('.keyboard');
	key.on('click', function(){
		$('.keyboard-shortcuts-items').show( "fade" );
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

