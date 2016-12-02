/**
 * Created by lucas on 23/11/16.
 */
'use strict';

var app = angular.module('facilitation');

app.controller('asyliumCtrl', function ($scope) {
    angular.extend($scope, {
        map: {
            center: {
                latitude: 35.082513,
                longitude: 38.999695
            },
            zoom: 7,
            markers: [],
            events: {
                click: function (map, eventName, originalEventArgs) {
                    var e = originalEventArgs[0];
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
        }
    });
});
