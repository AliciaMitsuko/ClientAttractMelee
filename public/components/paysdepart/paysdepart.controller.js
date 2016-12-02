'use strict';

var app = angular.module('facilitation');

app.controller('paysdepartCtrl', function ($scope) {
    $scope.data = {};
    $scope.dataNote = [];
    $scope.selectedCountry = "FR";
    $scope.risk = "La température a chuté ces derniers jours";
    $scope.dangerDepart = "Traverser la mer mediterrannee est dangereux";
    $scope.countries = ["FR", "BE", "AUS"];

    $scope.chart = new Highcharts.Chart('container', {
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
                text: 'Acceptation (%)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
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
            name: 'FR',
            data: [49.9]
        }, {
            name: 'BE',
            data: [83.6]

        }, {
            name: 'AUS',
            data: [48.9]

        }]
    });

    $scope.change = function(countrySearch){
      $scope.chart.update({
        series: [{
            country: 'FR',
            data: [9.9]
        }, {
            name: 'BE',
            data: [13.6]

        }, {
            name: 'AUS',
            data: [78.9]

        }]
    }, true);
      console.log($scope.chart.series);
    }

    $scope.setModalDepart = function(countrySearch){
      alert("coucou");
    }
});
