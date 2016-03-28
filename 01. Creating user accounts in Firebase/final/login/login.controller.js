angular.module('eventApp').controller('loginCtrl', ['FBMSG', function(FBMSG){
	
	var self = this;
	var ref = new Firebase(FBMSG);
	self.signUp = function() {
    ref.createUser({
    	email: self.email ,
    	password: self.password
    }, function(error, userData) {
    	if (error) {
    		console.log("Error creating user: ", error);
    	} else {
    		console.log("Successfully created user account with uid: ", userData.uid);
    		console.log(userData);
    	}
    });
	}
}])