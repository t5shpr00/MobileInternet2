angular.module('someklone.services').factory('Register', function($q, $http, appConfig) {
	return {
		register: function(user) {
			return $q(function(resolve, reject){
                $http.post(appConfig.apiAddr + "register").then(function(response){
                    console.log(response.data);
                    resolve();
                },function(err){
                    reject();
                });                                
            });
		}
	}
});