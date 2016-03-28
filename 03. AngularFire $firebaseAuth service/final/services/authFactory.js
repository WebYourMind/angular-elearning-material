angular.module('eventApp').factory('authFactory', ['FBMSG', '$firebaseAuth', function(FBMSG, $firebaseAuth) {
    var authFactory = {};
    var ref = new Firebase(FBMSG);
    // Initialize FirebaseAuth
    var auth = $firebaseAuth(ref);
    console.log(auth);
    authFactory.createUser = function(email, password) {
        return auth.$createUser({
            email: email,
            password: password
        })};
    return authFactory;
}])