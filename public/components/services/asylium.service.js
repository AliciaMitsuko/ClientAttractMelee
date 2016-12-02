/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  21/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var app = angular.module('facilitation');
app.service('AsyliumService', function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getAsyliumDemandsEstimation = getAsyliumDemandsEstimationImpl;
    function getAsyliumDemandsEstimationImpl(countryCode) {
        var req = {
            method: 'GET',
            url: 'localhost:8080/asyliumDemand/'+countryCode+'/estimation',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return $http(req);
    }
});