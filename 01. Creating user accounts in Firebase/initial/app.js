angular.module('eventApp', ['firebase','ngRoute','ngMessages','ngMockE2E','HighlightDirective'])
.constant('FBMSG', '<YOUR_FIREBASE_URL>/events')
.filter ('customLowerCase', function () {

	  return function (item) {

	  	 return item.toLowerCase();
	  }
}
	 )

.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {


	$routeProvider.when('/', {
	   	templateUrl:'home/home.html'

	   })
    
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