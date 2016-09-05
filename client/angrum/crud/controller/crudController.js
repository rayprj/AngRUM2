angular.module('angrum.crud').controller('crudController', function($scope, appModel, appUtils) {
    $scope.viewUtil    = appUtils;
    

    $scope.setScope = function(scopeVar, scopeValue) {
        $scope[scopeVar] = scopeValue;
    };

    /** get the data from server */
    appModel.getData('server/stories.json').then(function(d) {
            $scope.stories = d.data;
        }
    );
    /** get the fieldMap from the server to form the HTML fields */
    appModel.getData('server/stories.fieldmap.json', true).then(function(d) {
            $scope.fieldMap = d.data;
        }
    );

    $scope.original = {};
    $scope.setStory = function(story) {
        $scope.original = angular.copy(story);
        $scope.currentStory = story;
        $scope.setScope('currentView', 'detail');
    }

    $scope.isReadOnly = function() {
        return $scope.currentView != 'edit';
    }

    $scope.save = function() {
        $scope.original = $scope.currentStory;
    }

    $scope.reset = function() {
        $scope.currentStory = $scope.original;
    }

});

