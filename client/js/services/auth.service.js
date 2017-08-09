'use strict';

angular.module('asset_manager')
    .service('AuthInterceptor', function ($q) {
        return {
            'responseError': function (response) {
                if (response.status === 403) { // Unauthorized
                    window.location.assign('/auth/logout');
                }
                return $q.reject(response);
            }
        };
 });