/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  21/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var app = angular.module('facilitation');
app.service('FellowService', function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getFellowsEstimation = getFellowsEstimationImpl;
    function getFellowsEstimationImpl(fromCountryCode, toCountryCode) {
        var req = {
            method: 'GET',
            url: 'localhost:8080/asyliumDemand/'+fromCountryCode+'/estimation?dest='+toCountryCode,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return $http(req);
    }
});