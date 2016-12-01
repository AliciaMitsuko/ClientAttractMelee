/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  23/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
'use strict';

angular.module('facilitation')
    .factory('User', function ($resource) {
        return $resource('/auth/users/:id/', {},
            {
                'update': {
                    method:'PUT'
                }
            });
    });