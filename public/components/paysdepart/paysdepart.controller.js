'use strict';

var app = angular.module('facilitation');

app.controller('paysdepartCtrl', function($scope, AsyliumService) {
    $scope.data = {};
    $scope.dataNote = [];
    $scope.selectedCountry = "BE";
    $scope.risk = "La température a chuté ces derniers jours";
    $scope.dangerDepart = "Traverser la mer méditerranée est dangereux";
    $scope.countries = ["BE", "SYR", "AFG"];

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
                $scope.selectedCountry,
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
            name: 'SYR',
            data: [49.9]
        }, {
            "name": 'AFG',
            "data": [83.6]

        }, {
            name: 'AUS',
            data: [48.9]

        }]
    });

    console.log($scope.chart.series);

    $scope.change = function() {
        // Faire fonctionner asylium service
        var newSerie = [];
        AsyliumService.getAsyliumDemandsEstimator($scope.selectedCountry).then(function(data) {
          while($scope.chart.series.length > 0)
            $scope.chart.series[0].remove(true);

            // console.log(data.data);
            var count = Object.keys(data.data).length;
            for (var i = 0; i < 20; i++) {

                var country = data.data[i].country;
                var percent = data.data[i].percent;
                if (percent !== null) {
                  // newSerie.push({
                  //   name: country,
                  //   data: [percent]
                  // });
                  console.log({
                    name: country,
                    data: [percent]
                  });
                  $scope.chart.addSeries( {
                    name: country,
                    data: [percent]
                  }, false);
                }
                // $scope.chart.series[i].update({
                //   name: country,
                //   data: [percent]
                // }, true);
            }

            // $scope.chart = new Highcharts.Chart('container', {
            //     chart: {
            //         type: 'column'
            //     },
            //     title: {
            //         text: 'Pourcentage d\'acception en fonction du pays d\'accueil'
            //     },
            //     subtitle: {
            //         text: 'Source: Attract Melee - Nuit de l\'info 2016'
            //     },
            //     xAxis: {
            //         categories: [
            //             $scope.selectedCountry,
            //         ],
            //         crosshair: true
            //     },
            //     yAxis: {
            //         min: 0,
            //         title: {
            //             text: 'Acceptation (%)'
            //         }
            //     },
            //     tooltip: {
            //         headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            //         pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            //             '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            //         footerFormat: '</table>',
            //         shared: true,
            //         useHTML: true
            //     },
            //     plotOptions: {
            //         column: {
            //             pointPadding: 0.2,
            //             borderWidth: 0
            //         }
            //     },
            //     series: angular.toJson(newSerie)
            // });
            console.log(angular.toJson(newSerie));
            // $scope.chart.update({
            //     series: newSerie
            // }, true);
            $scope.chart.redraw();
        });

        // console.log($scope.chart.series);
    }




});
