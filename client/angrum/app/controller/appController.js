angular.module('angrum.common').controller('appController', function($scope, appUtils) {
    $scope.title = 'AngRUM';
    $scope.menus  = appUtils.getMenu();
});