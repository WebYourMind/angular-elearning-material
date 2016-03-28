angular.module('eventApp').controller('formCtrl', ['eventFactory', function(eventFactory) {
    var self = this;
    this.eventForm = {};
    //this.eventForm.date = new Date(2016,0,1);
    this.categories = [{
        id: 1,
        name: 'Music'
    }, {
        id: 2,
        name: 'Cinema'
    }, {
        id: 3,
        name: 'Games'
    }, {
        id: 4,
        name: 'Special Category'
    }];
    this.selectedOption = {
        id: 1,
        name: 'Music'
    };
    this.submitForm = function(form) {
        form.category = this.selectedOption;
        eventFactory.createEvent(angular.copy(form)).then(function(data) {
            alert("Event Added Succesfully");
        }, function(error) {
            alert('An error occurred ' + error.statusText);
        });
    }
}]).controller('eventManagerCtrl', ['eventFactory', 'initialData', function(eventFactory, initialData) {
    var self = this;
    self.edit = {};
    self.eventList = initialData;
    self.update = function(event) {
        eventFactory.updateEvent(event).then(function(data) {
          return;
        }, function(error) {
            alert('An error occurred while updating the event')
        });
    }

    self.delete = function(event) {
          eventFactory.deleteEvent(event).then(function(data) {
                return;

          }, function(error) {
             alert('An error occurred');
          });
    }
}])