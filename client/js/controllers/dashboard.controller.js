"use strict";

angular.module('asset_manager').controller('DashboardCtrl', function ($scope, $state, $http, ServerAddress, userSvc, $location, toastr) {
    /*Scope Variable/ Function Assignment [Start]*/
    $scope.model = {
        userName: '',
        password: '',
        confirm_password: '',
        firstQuestion:true,
        secondQuestion:false,
        thirdQuestion:false,
        fourthQuestion:false,
        fifthQuestion:false,
        first_Q:'',
        second_Q:'',
        third_Q:'',
        fourth_Q:'',
        fifth_Q:'',
        answerArray:[],
        showSmallCircularProgress: false
    };

    $scope.firstQuestion = function () {
        $scope.model.firstQuestion = false;
        $scope.model.secondQuestion = true;
        $scope.model.thirdQuestion = false;
        $scope.model.fourthQuestion = false;
        $scope.model.fifthQuestion = false;
        $scope.model.answerArray.push($scope.model.first_Q);
    };
    $scope.secondQuestion = function () {
        $scope.model.firstQuestion = false;
        $scope.model.secondQuestion = false;
        $scope.model.thirdQuestion = true;
        $scope.model.fourthQuestion = false;
        $scope.model.fifthQuestion = false;
        $scope.model.answerArray.push($scope.model.second_Q);
    };
    $scope.thirdQuestion = function () {
        $scope.model.firstQuestion = false;
        $scope.model.secondQuestion = false;
        $scope.model.thirdQuestion = false;
        $scope.model.fourthQuestion = true;
        $scope.model.fifthQuestion = false;
        $scope.model.answerArray.push($scope.model.third_Q);
    };
    $scope.fourthQuestion = function () {
        $scope.model.firstQuestion = false;
        $scope.model.secondQuestion = false;
        $scope.model.thirdQuestion = false;
        $scope.model.fourthQuestion = false;
        $scope.model.fifthQuestion = true;
        $scope.model.answerArray.push($scope.model.fourth_Q);
    };
    $scope.fifthQuestion = function () {
        $scope.model.answerArray.push($scope.model.fifth_Q);
    };

    /*api call signUpStaff[start] */
    $scope.resetPasswrd = function () {
        $scope.model.showSmallCircularProgress = true;

        var data = 'token=' + $location.search().t + '&&asset_manager_users_password=' + $scope.model.password + '&&asset_manager_users_confirm_password=' + $scope.model.confirm_password;

        var postData = data;
        var requestObj = {
            method: 'POST',
            url: ServerAddress + 'setForgotPassword.php',
            data: postData
        };

        $http(requestObj).success(function (data) {
            console.log(data);
            $state.go('login');
            toastr.success(data.result, '');
        }).error(function (data, err) {
            $scope.model.showSmallCircularProgress = false;
            console.log(data, err);
            toastr.error(data.error, '');
        });


    };
   /*api call signUpStaff[end] */





});