
angular.module('HighlightDirective',[])
.directive('highlight', function() {

	return {

		restrict:'A',
		scope: {},
		replace:true,
		template:'<b>{{name}} <span class="label label-info"> Hot!</span></b>',
		link: function(scope, elem, attrs, controller) {
			scope.name = attrs.eventname;
			
		}
	}
})