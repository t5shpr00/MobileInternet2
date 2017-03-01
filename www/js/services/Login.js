angular.module('someklone.services').factory('Login', function($q, $http, appConfig) {
	return {
		login: function(username, password) {
			return $q(function(resolve, reject){
				console.log('test come there too');
				console.log(username);
                $http.post(appConfig.apiAddr + "login", {username: username, pass: password}).then(function(response){
                	console.log(response.status);
                	if (response.status == 200) {
                		user = {id: response.data.id, username: response.data.username};
                		console.log(user);
                		resolve();
                	}
                    else{
                    	reject();
                    }
                    
                },function(err){
                    reject();
                });                                
            });
		}
	}
});