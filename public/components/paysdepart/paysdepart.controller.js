'use strict';

var app = angular.module('facilitation');

app.controller('paysdepartCtrl', function ($scope) {
    $scope.data = {};
    $scope.dataNote = [];
        $scope.countries = ["FR", "BE", "AUS"];
        $scope.chart = Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Pourcentage d\'acception en fonction du pays d\'accueil'
            },
            subtitle: {
                text: 'Source: Attract Melee - Nuit de l\'info 2016'
            },
            xAxis: {
                categories: [
                    'EN',
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.country}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                country: 'FR',
                data: [49.9]
            }, {
                country: 'BE',
                data: [83.6]

            }, {
                country: 'AUS',
                data: [48.9]

            }, {
                country: 'Berlin',
                percent: [42.4]

            }]
        });

        $scope.change = function(){
          // $scope.title = "Appel d'une fonction"
          // $scope.ohHey = function () {
          // alert('ok');
              // console.log("Oh hey");
          // };
          // alert($scope.chart.series[0]);
          console.log($scope.chart.series[0]);
        }
    });
