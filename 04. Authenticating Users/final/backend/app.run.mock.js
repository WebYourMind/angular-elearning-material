angular.module('eventApp').run(function($httpBackend) {
    $httpBackend.whenGET(/home\/.*/).passThrough();
    $httpBackend.whenGET(/events\/.*/).passThrough();
    $httpBackend.whenGET(/services\/.*/).passThrough();
    $httpBackend.whenGET(/backend\/.*/).passThrough();
    $httpBackend.whenGET(/login\/.*/).passThrough();
    var errorCounter = 0;
    var events = [{
        "id": "1",
        "name": "Metallica",
        "location": "Milan",
        "description": "Metallica in Concert",
        "price" :"150",
        "date": "2016-10-11",
        "category": {
            "id": "1",
            "name": "Music"
        },
        "email": "metallica@webyourmind.com",
        "isSpecial": "false"
    }, {
        "id": "2",
        "name": "Sherlock Holmes",
        "location": "Dublin",
        "description": "A great movie",
         "price" :"10",
        "date": "2015-10-01",
        "category": {
            "id": "2",
            "name": "Cinema"
        },
        "email": "sherlock@webyourmind.com",
        "isSpecial": "true"

    }, {
        "id": "3",
        "name": "AC/DC",
        "description": "AC/DC Tour",
         "price" :"150",
        "location": "Las Vegas",
        "date": "2015-10-20",
        "category": {
            "id": "1",
            "name": "Music"
        },
        "email": "acdc@webyourmind.com",
        "isSpecial": "false"
    }, {
        "id": "4",
        "name": "PS10Launch",
        "description": "Playstation10LaunchEvent",
        "price" :"300",
        "location": "Tokyo",
        "date": "2026-10-01",
        "category": {
            "id": "3",
            "name": "Games"
        },
        "email": "avengers@webyourmind.com",
        "isSpecial": "true"
    }, {
        "id": "5",
        "name": "Bruno Mars",
        "location": "Milan",
        "description": "Bruno in Concert",
        "price" :"100",
        "date": "2016-10-11",
        "category": {
            "id": "1",
            "name": "Music"
        },
        "email": "bruno@webyourmind.com",
        "isSpecial": "false"
    }, {
        "id": "6",
        "name": "The Avengers",
        "location": "Dublin",
        "description": "A great movie",
        "price" :"10",
        "date": "2015-10-01",
        "category": {
            "id": "2",
            "name": "Cinema"
        },
        "email": "avengers@webyourmind.com",
        "isSpecial": "false"
    }, {
        "id": "7",
        "name": "Motley Crue",
        "description": "Motley Crue Tour",
        "price" :"300",
        "location": "Las Vegas",
        "date": "2015-10-20",
        "category": {
            "id": "1",
            "name": "Music"
        },
        "email": "motley@webyourmind.com",
        "isSpecial": "false"
    }];
    // returns the current list of events
    $httpBackend.whenGET('api/events').respond(events);

    //update function
     $httpBackend.whenPOST('api/events/update').respond(function(method, url, data) { 
          var evt= angular.fromJson(data);
          for(i=0; i < events.length; i++) {

             if(events[i].id == evt.id) {
                events[i] = evt;
                break;
             }
          }

         return [200, {
            'events': events
        }, {}];

     })
    // add a new event to the current list of events
    $httpBackend.whenPOST('api/events/new').respond(function(method, url, data) {
        var evt = angular.fromJson(data);
        errorCounter = errorCounter + 1;
        if (errorCounter % 3 == 0) {
            return [404, {}, {},'CRAZY ERROR'];
        }
        // Generate an ID
        evt.id = events.length + 1;
        events.push(evt);
        return [200, {
            'addEventResult': true
        }, {}];
    });
    // removes the from the current list of events
    $httpBackend.whenPOST('api/events/delete').respond(function(method, url, data) {
        var eventToDelete = angular.fromJson(data);
        errorCounter = errorCounter + 1;
        if (errorCounter % 3 == 0) {
            return [404, {}, {},'Crazy Delete Error'];
        }

        for(i=0; i<events.length; i++) {
            if(events[i].id === eventToDelete.id) {
               events.splice(i,1);
            }
        }         
       


        
        return [200, {
            'events': events
        }, {}];
    });
});