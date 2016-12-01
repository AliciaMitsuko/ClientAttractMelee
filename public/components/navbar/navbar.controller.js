/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  08/11/16                     *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
'use strict';

var app = angular.module('facilitation');

app.controller('navBarCtrl', function ($scope, $location, Auth) {
    /* Scope vars */
    $scope.profile = {};
    $scope.user = {};
    $scope.error = {};

    /* Scope Methods */
    $scope.logIn = logInFct;
    $scope.register = registerFct;

    $scope.logOut = logOutFct;

    /* Implémentation */
    function logInFct () {
        Auth.login('password', {
                'email': $scope.user.email,
                'password': $scope.user.password
            },
            function(err) {
                $scope.errors = {};

                $('#myModal').modal('hide');

                if (!err) {
                    //$location.path('/');

                    $scope.$emit('notify', {
                        type: 'success',
                        title: 'Vous avez bien été connecté !'
                    });
                } else {
                    angular.forEach(err.errors, function(error, field) {
                        console.log("ERROR : " + error + " : "+ field);
                    });
                    $scope.error.other = err.message;

                    $scope.$emit('notify', {
                        type: 'error',
                        title: 'Impossible de se connecter.'
                    });
                }
            });
    }

    function registerFct() {
        Auth.createUser({
                email: $scope.user.email,
                username: $scope.user.username,
                password: $scope.user.password
            },
            function(err) {
                $scope.errors = {};

                $('#myModal2').modal('hide');

                if (!err) {
                    //$location.path('/');

                    $scope.$emit('notify', {
                        type: 'success',
                        title: 'Votre compte a bien été créé.',
                    });

                } else {
                    angular.forEach(err.errors, function(error, field) {
                        console.log("ERROR : " + error + " : "+ field);
                    })

                    $scope.$emit('notify', {
                        type: 'error',
                        title: 'Votre compte n\'a pas pu être créé.',
                    });
                }
            }
        );
        $scope.user = {};
    }

    function logOutFct() {
        Auth.logout(function(err) {
            if(!err) {
                //$location.path('/');

                $scope.$emit('notify', {
                    type: 'info',
                    title: 'Déconnecté !',
                });
            }
        });
    }

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});


