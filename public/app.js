'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('facilitation', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'http-auth-interceptor',
    'angularNotify'
]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
      .when("/", {
          templateUrl: "components/home/home.html"
      })
      .otherwise({
          redirectTo: "/"
      })});
      /*.when("/catalogue", {
          templateUrl: "components/catalogue/catalogue.html",
          controller: "catalogueCtrl"
      })});*/

app.run(function ($rootScope, $location, Auth) {

    //watching the value of the currentUser variable.
    $rootScope.$watch('currentUser', function(currentUser) {
        // if no currentUser and on a page that requires authorization then try to update it
        // will trigger 401s if user does not have a valid session
        if (!currentUser && (['/'].indexOf($location.path()) == -1 )) {
            Auth.currentUser();
        }
    });

    // On catching 401 errors, redirect to the login page.
    $rootScope.$on('event:auth-loginRequired', function() {
        $location.path('/');
        return false;
    });
});
