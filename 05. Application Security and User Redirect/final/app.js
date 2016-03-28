angular.module('eventApp', ['firebase','ngRoute','ngMessages','ngMockE2E','HighlightDirective'])
.constant('FBMSG', '<YOUR_FIREBASE_URL>/events')
.filter ('customLowerCase', function () {

	  return function (item) {

	  	 return item.toLowerCase();
	  }
}
	 )

.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {


	
	$routeProvider.when('/login', {
	   	templateUrl:'login/login.html',
	   	controller:'loginCtrl',
	   	controllerAs:'loginCtl'

	   }),
	$routeProvider.when('/logout', {
	   	templateUrl:'login/login.html',
	   	controller:'loginCtrl',
	   	controllerAs:'loginCtl',
	   	resolve: {
	   		"logout": ["authFactory", function(authFactory) {
	   			authFactory.logout();
	   		}]
	   	}

	   }),
	$routeProvider.when('/', {
	   	templateUrl:'home/home.html',
	   	resolve: {

	   	    "currentAuth": ["authFactory", function(authFactory) {

	   	    	var auth = authFactory.auth();
	   	    	console.log(auth);
	   	    	return auth.$requireAuth();
	   	    }]
	   	}

	   }),
    
	$routeProvider.when('/add-event', {
	   	templateUrl:'events/add-event.html',
	   	controller: 'formCtrl',
	   	controllerAs:'eventCtl',
	   	resolve: {

	   	    "currentAuth": ["authFactory", function(authFactory) {

	   	    	var auth = authFactory.auth();
	   	    	console.log(auth);
	   	    	return auth.$requireAuth();
	   	    }]
	   	}

	   })
	.when('/event-list', {
	   	templateUrl:'events/event-list.html',
	   	controller: 'eventManagerCtrl',
	   	controllerAs:'managerCtl',
	   	resolve: {
	   			   initialData: function(eventFactory) {

	   			   	return eventFactory.getAllEvents();
	   			   },

	   	    "currentAuth": ["authFactory", function(authFactory) {

	   	    	var auth = authFactory.auth();
	   	    	console.log(auth);
	   	    	return auth.$requireAuth();
	   	    }]
	   	}

	   })
	   .otherwise({redirectTo:'/'});
       
       $locationProvider.html5Mode(true);

}])

.run(['$rootScope','$location', function($rootScope, $location) {

	$rootScope.$on('$routeChangeError', function (event, next, previous, error) {
		console.log(error);
		if (error = "AUTH_REQUIRED") {

			console.log("Error in Auth");
			$location.path("/login");
		}
	})
}])
;