'use strict';

angular.module('asset_manager')
    .value('ServerAddress', 'http://52.220.41.10/Asset_management/server/user/')
    .value('ServerDwnloadpath', '')

    .service('userSvc', function ($http, ServerAddress, $cookieStore) {
        var self = {
            loginUser: {
                success: false,
                role: '',
                token: ''
            },

            getUserToken: function () {
                return $cookieStore.get('userToken');
            },

            getUserRole: function () {
                return self.loginUser.role;
            },

            getUserID: function () {
                return $cookieStore.get('userId');
            },


            setUser: function (user) {
                self.loginUser = user;
            },

            isUserLogedIn: function () {
                return $cookieStore.get('isLogedin');
            }
        };

        return self;
    });
