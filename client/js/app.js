angular.module('asset_manager', [
    'ngSanitize',
    'ngAnimate',
    'ngCookies',
    'ui.router',
    'ui.bootstrap',
    'angularFileUpload',
    'toastr'
], function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

angular.module('asset_manager').run(['$rootScope', '$http', 'ServerAddress', 'userSvc', '$cookieStore', '$state', 'toastr', function ($rootScope, $http, ServerAddress, userSvc, $cookieStore, $state,toastr) {
    $http.defaults.headers.post["Accept"] = "";
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $rootScope.$on('$stateChangeStart', function (e, to, toParams, from) {
        // console.log(from.name);
        // console.log(to.name);
        // toastr.clear();
        // if (!userSvc.isUserLogedIn() && to.data.authentication === true) {
        //     e.preventDefault();
        //     $state.go('login');
        // }
        //
        // if (userSvc.isUserLogedIn() && to.data.authentication === false) {
        //     if (to.name === 'logout' || from.name === '') {
        //         doLogout();
        //         return;
        //     }
        //     e.preventDefault();
        //     $state.go(from.name);
        // }
        //
        // if (!userSvc.isUserLogedIn() && to.name === 'logout') {
        //     e.preventDefault();
        //     $state.go('login');
        // }

        /*function doLogout() {
            var data = 'token=' + userSvc.getUserToken();

            var postData = data;
            var requestObj = {
                method: 'POST',
                url: ServerAddress + 'signOut.php',
                data: postData
            };

            $http(requestObj).success(function (data) {
                $cookieStore.remove('isLogedin');
                $cookieStore.remove('userToken');
                toastr.success('Succesfully loggedout', '');
                $state.go('login');
            }).error(function (data, err) {
                if (err === 403) {
                    $cookieStore.remove('isLogedin');
                    $cookieStore.remove('userToken');
                    toastr.error('Session expired, please login again', '');
                    $state.go('login');
                }
                toastr.error('Could not logout from the app. Please check your connectivity.', '');
            });
        }*/

    });
}]);