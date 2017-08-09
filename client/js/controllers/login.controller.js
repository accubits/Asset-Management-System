'use strict';

angular.module('asset_manager').controller('LoginCtrl', function ($scope, $state, $http, $uibModal, userSvc, ServerAddress, $cookieStore,toastr) {
    /*Scope Variable/Function Assignment[Start] */
    $scope.loginModel = {
        userName: '',
        password: '',
        email:'',
        sign_up:false,
        log_in:true,
        sign_form:false

    };
    $scope.log_in = function () {
        $scope.loginModel.log_in =true;
        $scope.loginModel.sign_up =false;
        $scope.loginModel.sign_form =false;
    };
    $scope.sign_up = function () {
        $scope.loginModel.log_in =false;
        $scope.loginModel.sign_up =true;
        $scope.loginModel.sign_form =true;
    };

    // /* Validating Credentials Enterd[Start] */
    // var ValidateLogin = function () {
    //     // Validating Email Format With Reg Exp
    //     var EMAIL_REGEXP = /^([A-Za-z0-9_\-\.]+)@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,3})$/;
    //     if (!EMAIL_REGEXP.test($scope.loginModel.userName)) {
    //         showError('Please enter a valid user name', 'error', true);
    //         return false;
    //     }
    //
    //     if ($scope.loginModel.password === '') {
    //         showError('Please enter password', 'error', true);
    //         return false;
    //     }
    //     return true;
    // };
    // /* Validating Credentials Enterd[End] */

    $scope.doLogin = function () {
        var data = 'users_email=' + $scope.loginModel.email + '&&users_password=' + $scope.loginModel.password;

        var postData = data;
        var requestObj = {
            method: 'POST',
            url: ServerAddress+ 'signIn.php',
            data: postData
        };

        $http(requestObj).success(function (data) {
            $cookieStore.put('isLogedin', data.success);
            $cookieStore.put('userToken', data.result.token);
            $cookieStore.put('userId', data.result.userId);
            userSvc.setUser(data.result);
            /*$state.go('cloud.dashboard');*/
            location.assign('../../MatrixAdmin/charts.html');

            toastr.success('Succesfully logged in', '');
        }).error(function (data, err) {
            console.log(data, err);
            toastr.error(data.error, '');
        });
    };
    /*api call signUp[start] */
    $scope.doSignup = function () {

        var data = '&&users_name=' + $scope.loginModel.userName + '&&users_email=' + $scope.loginModel.email + '&&users_password=' + $scope.loginModel.password;

        var postData = data;
        var requestObj = {
            method: 'POST',
            url: ServerAddress + 'signUp.php',
            data: postData
        };

        $http(requestObj).success(function (data) {
            console.log(data);
            $state.go('cloud.dashboard');
            toastr.success('Succesfully registered', '');
        }).error(function (data, err) {
            console.log(data, err);
            toastr.error(data.error, '');
        });


    };
    /*api call signUp[end] */

});