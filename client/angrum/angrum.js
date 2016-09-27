angular.module('angrum', ['ui.router', 'ngRoute', 'angrum.common', 'angrum.crud'])

/*.config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/crud/:moduleName', {
        templateUrl: 'client/angrum/crud/templates/index.html',
        controller: 'crudController'
    })
    $routeProvider.when('/crud/:moduleName/:id', {
        templateUrl: 'client/angrum/crud/templates/detailEdit.html',
        controller: 'crudDetailController'
    })

    .otherwise({redirectTo: '/'});

    //$locationProvider.html5Mode(true);

})*/


.config(function($stateProvider) {
  // An array of state definitions
  var states = [
    { 
      name: 'crud', 
      url: '/crud/{moduleName}', 
      controller: 'crudController',
      templateUrl: 'client/angrum/crud/templates/index.html',
     
    },
    
    { 
      name: 'crud.detail', 
      url: '/{id}', 
      controller: 'crudDetailController',
      templateUrl: 'client/angrum/crud/templates/edit.html',
      parent: 'crud'
    }
  ];
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });

});

