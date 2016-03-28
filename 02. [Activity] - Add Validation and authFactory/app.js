angular.module('eventApp', ['firebase','ngRoute','ngMessages','ngMockE2E','HighlightDirective'])
.constant('FBMSG', 'https://intense-torch-3990.firebaseio.com/events')
.filter ('customLowerCase', function () {

	  return function (item) {

	  	 return item.toLowerCase();
	  }
}
	 )

.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {


	
	$routeProvider.when('/', {
	   	templateUrl:'login/login.html',
	   	controller:'loginCtrl',
	   	controllerAs:'loginCtl'

	   }),
    
	$routeProvider.when('/add-event', {
	   	templateUrl:'events/add-event.html',
	   	controller: 'formCtrl',
	   	controllerAs:'eventCtl'

	   })
	.when('/event-list', {
	   	templateUrl:'events/event-list.html',
	   	controller: 'eventManagerCtrl',
	   	controllerAs:'managerCtl',
	   	resolve: {
	   			   initialData: function(eventFactory) {

	   			   	return eventFactory.getAllEvents();
	   			   }
	   	}

	   })
	   .otherwise({redirectTo:'/'});
       
       $locationProvider.html5Mode(true);

}])
;