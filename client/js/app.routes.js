angular.module('asset_manager').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
             data:{
                authentication:false
            }
        })

        .state('logout', {
            url: '/logout',
            data:{
                authentication:false
            }
        })



        .state('cloud', {
            url: '/cloud',
            templateUrl: 'views/cloud.html',
            data:{
                authentication:true
            },
                 
        })

        .state('cloud.dashboard', {
            url: '/dashboard',
            params:{userUniqueId : null},
            templateUrl: 'views/dashboard.html',
           controller: 'DashboardCtrl'
        });

    $urlRouterProvider.otherwise('/')
    $locationProvider.html5Mode(true);
}]);
