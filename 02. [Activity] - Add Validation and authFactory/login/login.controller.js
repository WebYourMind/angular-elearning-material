angular.module('eventApp').controller('loginCtrl', ['FBMSG', 'authFactory', function(FBMSG, authFactory) {
    var self = this;
    self.signUp = function() {
        authFactory.createUser(self.email, self.password);
        
    }
}])