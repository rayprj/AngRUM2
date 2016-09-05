angular.module('angrum', ['ngRoute', 'angrum.common', 'angrum.crud'])

.config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/crud/:moduleName', {
        templateUrl: 'client/angrum/crud/templates/index.html',
        controller: 'crudController'
    })

    .otherwise({redirectTo: '/'});

    //$locationProvider.html5Mode(true);

});

