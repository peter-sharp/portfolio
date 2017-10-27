/* global angular*/
'use strict';

angular.module('portfolioApp', [
     'ui.router',
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'portfolioApp.controllers',
    'portfolioApp.services',
    'portfolioApp.directives',
    'wu.masonry',
    'mediaLibrary'
    ]);

console.log('                                                                       \n\
                         ]▓▓██████████████████████████▓▓                         \n\
          ╒▄▄▄▄▄▄▄╕     ]▓▌                          ╟▓⌐     ╔▄▄▄▄▄▄▄p        \n\
    ,▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓     ▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓▓▓     ▓▓▓▓▓▓ ▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓ ▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓ ▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓        ▓▓▓▓     ▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓ ▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓ ▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓ ▓▓▓▓     ▓▓▓▓     ▓▓     ▓▓     ▓▓▓▓▓▓ ▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    \n\
    ▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█    \n\
          ▓▓Γ                                                       ▓▓Γ  .      \n\
                                                                             ');

angular
    .module('portfolioApp')
    .config(['$stateProvider', '$urlRouterProvider','$locationProvider',
        function($stateProvider, $urlRouterProvider,$locationProvider) {
            console.log('H1');
            $stateProvider.
                state('home', {
                    url: '/',
                    templateUrl: appDirectories.views + 'home.html',
                    controller: 'HomeController'
                }).
                state('current_page', {
                    url: '/media/{id}', //TODO add media.id
                    templateUrl: appDirectories.views + 'current_page.html',
                    controller: 'PageController'
                }).
                state('contact', {
                    url: '/contact/',
                    templateUrl: appDirectories.views + 'contact.html',
                    controller: 'ContactController'
                }).
                state('404', {
                    url: '/404',
                    templateUrl: appDirectories.views + '404.html',
                    controller: 'notFoundController'
                });
                $locationProvider.html5Mode(true);
                $urlRouterProvider.when('/wp-admin/', function(){
                  window.location = window.location.href ;
                });
                //$urlRouterProvider.otherwise('/404');
                //TODO get pages from wordpress and use as states

        }
    ]);
