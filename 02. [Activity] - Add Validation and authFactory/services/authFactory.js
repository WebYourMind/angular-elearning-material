angular.module('eventApp').factory('authFactory', ['FBMSG', function(FBMSG) {
    var authFactory = {};
    var ref = new Firebase(FBMSG);
    authFactory.createUser = function(email, password) {
        ref.createUser({
            email: email,
            password: password
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user: ", error);
            } else {
                console.log("Successfully created user account with uid: ", userData.uid);
            }
        });
    }
    return authFactory;
}])