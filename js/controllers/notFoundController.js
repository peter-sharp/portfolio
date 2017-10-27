//global angular;
'use strict';

angular.module('portfolioApp.controllers').controller('notFoundController',[ '$scope','$location',function ($scope,$location){
    console.warn('Page not found');

    $scope.pictureBasePath = appDirectories.img; // base path for images
}]);
