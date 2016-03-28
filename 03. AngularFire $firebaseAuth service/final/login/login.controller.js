angular.module('eventApp').controller('loginCtrl', ['FBMSG', 'authFactory', function(FBMSG, authFactory) {
    var self = this;
    self.signUp = function() {
      var result = authFactory.createUser(self.email, self.password);
      result.then(function(userData){
      	 console.log("User Successfully created with uid: ", userData.uid)
      }, function(error) {
      	console.log("an error occurred ", error)
      })
    }
}])