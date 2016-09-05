angular.module('angrum.common').factory('appUtils', function(appModel) {
    return {
        title: function(title) {
            return title.charAt(0).toUpperCase() + title.slice(1);
        },
        getMenu: function() {
            var menu={};
            appModel.getData('server/modules.json').then(function(d) {
                console.log(d);
                menu.modules = d.data;
            });
            return menu;
        }
        
    }
});