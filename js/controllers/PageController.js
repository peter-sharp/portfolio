//global angular;
'use strict';

angular.module('portfolioApp.controllers').controller('PageController',[ '$scope', '$stateParams',function ( $scope, $stateParams){
    $scope.currentItemId = $stateParams.id;
}]);
