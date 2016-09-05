angular.module('angrum.common').factory('appUtils', function() {
    return {
        title: function(title) {
            return title.charAt(0).toUpperCase() + title.slice(1);
        },
        
    }
});