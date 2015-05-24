'use strict';

angular.module('frontend.common').factory('CurrentUser', ["LocalService", function(LocalService){
	return {
		user : function(){
			if(LocalService.get('auth_token')){
				return angular.fromJson(LocalService.get('auth_token')).user;
			} else {
				return { 
					role: 'anon',
					level : 0
				};
			}
		}
	}
}]);