angular.module('eventApp').factory('eventFactory', ['FBMSG','$firebaseArray','$http', '$q', function(FBMSG,$firebaseArray,$http, $q) {
    var eventFactory = {};
    var ref = new Firebase(FBMSG);
    var events = $firebaseArray(ref);
  
    eventFactory.getAllEvents = function() {
              
       //return $http.get('api/events');
       console.log(events);
       return events;
    }

    eventFactory.createEvent = function(event) {
        
        //return $http.post('api/events/new',event);
        event.id = events.length + 1;
        return events.$add(event);
    }

    eventFactory.deleteEvent = function(event) {
        
      /*  return $http.post('api/events/delete',event).then(function(response) {

         	var data = response.data.events;
         	return data;

         }); */
     return events.$remove(event);
    }

    eventFactory.updateEvent = function(event) {
        
       /* return $http.post('api/events/update', event).then(function(response) {

         	var data = response.data.events;
         	return data;

         }, function(error) {return false;}); */
     return events.$save(event);
    } 
    return eventFactory;
}])