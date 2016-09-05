angular.module('angrum.common').service('appModel', function($http) {

    this.cached = [];

    this.getData = function(url, cached) {
        
        if (typeof cached == 'undefined' && typeof cached != 'boolean') {
            cached = false;
        }
        return $http({method:'get', url:url, cache:cached}).then(
            function success(data) {
                return data;
            }, 
            function error(response) {
                //return response;
                //TODO
            }
        );
    };

});