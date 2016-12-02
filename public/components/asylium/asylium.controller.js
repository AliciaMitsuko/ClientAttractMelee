/**
 * Created by lucas on 23/11/16.
 */
'use strict';

var app = angular.module('facilitation');
app.controller('asyliumCtrl', function ($scope) {
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
});
