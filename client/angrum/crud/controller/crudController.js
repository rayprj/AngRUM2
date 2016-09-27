angular.module('angrum.crud').controller('crudController', function($scope, appModel, appUtils, $stateParams) {
    $scope.viewUtil    = appUtils;
    $scope.params = $stateParams;

    $scope.setScope = function(scopeVar, scopeValue) {
        $scope[scopeVar] = scopeValue;
    };

    /** get the data from server */
    appModel.getData('server/'+$scope.params.moduleName+'.json').then(function(d) {
            $scope.stories = d.data;
        }
    );
    /** get the fieldMap from the server to form the HTML fields */
    appModel.getData('server/'+$scope.params.moduleName+'.fieldmap.json', true).then(function(d) {
            $scope.fieldMap = d.data;
        }
    );

    

   

});

angular.module('angrum.crud').controller('crudDetailController', function($scope, appModel, $stateParams) {
    $scope.params = $stateParams;

    appModel.getData('api/'+$stateParams.moduleName+'/'+$stateParams.id).then(function(d) {
            //console.log(d.data);
            $scope.currentStory = d.data;
            $scope.setScope('currentView', 'detail');
        }
    );
    
    $scope.original = {};

    $scope.isReadOnly = function() {
        return $scope.currentView != 'edit';
    }

    $scope.save = function() {
        $scope.stories = {};
        $scope.original = $scope.currentStory;
    }

    $scope.reset = function() {
        $scope.currentStory = $scope.original;
    }
    
});