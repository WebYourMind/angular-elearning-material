angular.module('eventApp')
.directive('homepageFilter', function() {

	return {

		restrict:'E',
		scope: {},
		
		templateUrl:'home/home-directive.html',
		controller: function($scope, $attrs, eventFactory, $filter) {
                   $scope.filterBy = $attrs.filterBy;
                   $scope.category = $attrs.category;

                   eventFactory.getAllEvents().$loaded(function(data) { 
                   	     $scope.events = data;
                   	     console.log($scope.events);

                   	     if ($scope.category) {
                   	     	$scope.events = $filter('filter')($scope.events,{category:{name:$scope.category}});
                   	     } else
                   	     {
                   	     	$scope.events = $filter('orderBy')($scope.events,$scope.filterBy,true);
                   	     }
                   	    
                   	     
                   });

                    
		},
		link: function(scope, elem, attrs, controller) {
			
		
		}
		
			
		
	}
})