directives.directive('selectBox',['$animate','$state', function($animate, $state){
    return {
        templateUrl: appDirectories.js + 'directives/select.html',
        transclude: true,
        link: function(scope,element,attrs){
          //
            console.log('selecting:',attrs.sbOptions);
            scope.options = attrs.sbOptions.split(',');
            scope.activateMenu = function ($event) {
              scope.menuActive = (scope.menuActive)? false: true;
              console.log(scope.menuActive);
            }

            scope.selectOption = function(option){
              scope.search = option;
              scope.menuActive = false;
            }
        }
        };
}]);
