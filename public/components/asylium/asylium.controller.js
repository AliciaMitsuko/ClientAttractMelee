/**
 * Created by lucas on 23/11/16.
 */
'use strict';

var app = angular.module('facilitation');
app.controller('asyliumCtrl', function ($scope, SocialNetwork) {
    $scope.modal = {
        title: "Default",
        interests: {
            author: "Alex",
            camp: true,
            water: true,
            shower: true,
            health: true,
            food: true,
            bed: true,
            places: 100,
            persons: 30,
            toilette: 4
        }
    };

    $scope.open = function() {
        $scope.showModal = true;
    };

    $scope.ok = function() {
        $scope.showModal = false;
    };

    $scope.cancel = function() {
        $scope.showModal = false;
    };


    $scope.map = {
            center: {
                latitude: 35.082513,
                longitude: 38.999695
            },
            zoom: 7,
            markers: [],
            events: {
                click: function (map, eventName, originalEventArgs) {
                    var e = originalEventArgs[0];
                    console.log(e);
                    var lat = e.latLng.lat(),lon = e.latLng.lng();
                    var marker = {
                        id: Date.now(),
                        coords: {
                            latitude: lat,
                            longitude: lon
                        }
                    };
                    $scope.map.markers.push(marker);
                    console.log($scope.map.markers);
                    $scope.$apply();
                }
            }
    };

    $scope.marker = {
        events: {
            click: function (marker, eventName, args) {
                $('#interestMarker').modal('show');
                $scope.open();
            }
        }
    };


    // Appele au chargement de la page
    // Faire fonctionner social media
    SocialNetwork.getSocialNetwork().then(function(data){
        console.log(data.data[0].location);
        var count = Object.keys(data.data).length;
        for (var i=0; i<count; i++) {
          var lat = data.data[i].location.latitude;
          var lon = data.data[i].location.longitude;
          var marker = {
              id: Date.now(),
              coords: {
                  latitude: lat,
                  longitude: lon
              }
          };
          // ajoute le marqueur identifié
          $scope.map.markers.push(marker);
        }
    });
});
