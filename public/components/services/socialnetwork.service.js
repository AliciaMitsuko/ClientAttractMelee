var app = angular.module('facilitation');
app.service('SocialNetwork', function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getSocialNetwork = getSocialNetworkImpl;
    function getSocialNetworkImpl() {
        var req = {
            method: 'GET',
            url: 'http://localhost:8080/poi',
            headers: {
                'Content-Type': 'application/json',
            }
        };
        return $http(req);
    }
});
