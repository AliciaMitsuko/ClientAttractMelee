'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('facilitation', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'uiGmapgoogle-maps',
    'ngRoute',
    'ui.bootstrap',
    'http-auth-interceptor',
    'angularNotify'
]);

app.config(function(uiGmapGoogleMapApiProvider, $routeProvider, $locationProvider) {
  $routeProvider
      .when("/", {
          templateUrl: "components/home/home.html"
      })
      .when("/depart", {
          templateUrl: "components/paysdepart/paysdepart.html"
      })
      .when("/asylium", {
          templateUrl: "components/asylium/asylium.html",
          controller: "asyliumCtrl"
      })
      .otherwise({
          redirectTo: "/"
      });
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDRIF5JFkQ6xzHrvLDZ8n84k1pbPgRqcM4',
        libraries: 'weather,geometry,visualization'
    });
});


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
