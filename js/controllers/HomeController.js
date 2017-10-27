//global angular;
'use strict';

angular.module('portfolioApp.controllers').controller('HomeController',[ '$scope','$cookies',function ($scope, $cookies){
    //$cookies.remove('filtered');
    $scope.pictureBasePath = appDirectories.img; // base path for images

    if (searchFilter){
      $scope.search = searchFilter; //restore saved search filter
    }
    if (categoryFilter){
      $scope.category = categoryFilter; //restore saved category filter
    }


    $scope.orderProp = 'age';
    $scope.saveFiltered = function(event){
        console.log(event);
        console.info('saving',($scope.filteredMedia !== undefined),$scope.filteredMedia);
        filteredMedia = $scope.filteredMedia; //
        searchFilter = $scope.search; //save search filter
        categoryFilter = $scope.category; //save category filter

        //$cookies.putObject('filtered', $scope.filteredMedia);
    }

}]);
