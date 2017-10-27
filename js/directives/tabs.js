// global angular;
'use strict';


directives.directive('mainNav',['$animate','$state', function($animate, $state){
    return {
        templateUrl: appDirectories.js + 'directives/tabs.html',
        link: function(scope, element, attr) {
            scope.hidden = true;

            // TODO get a list of defined states and return a list containing the objects of each
            function getMainPages(event){ // TODO convert to service so other controller can have access to this information
                var states = $state.get();
                var pages = [];
                console.log('event',event);
                states.forEach(function(state){
                    var firstChar = state.name.charAt(0);

                    if (firstChar !== firstChar.toUpperCase() && state.name !== 'current_page'){
                        pages.push({state: state.name});
                    }
                });
                return pages;
            };
            scope.mainPages = getMainPages(null);

            scope.$on('$stateChangeStart',function(event){
                 scope.mainPages = getMainPages(event);

            });

            scope.openMenu = function(event) {
                console.log("menu opened! Event: ", event);
                switch(scope.hidden){
                    case true:
                        scope.hidden = false;
                        break;
                    case false:
                        scope.hidden = true;
                        break;
                    default:
                        console.error("menu hidden state must be a boolean");
                }

            };
        }
    };
}]);
