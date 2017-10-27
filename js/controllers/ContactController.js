//global angular;
'use strict';

angular.module('portfolioApp.controllers').controller('ContactController',[ '$scope',function ($scope){
    console.log('contact');
    $scope.pictureBasePath = appDirectories.img; // base path for images
}]);
