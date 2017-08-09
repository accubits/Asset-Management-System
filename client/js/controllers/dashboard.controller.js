"use strict";

angular.module('asset_manager').controller('DashboardCtrl', function ($scope, $state, $http, ServerAddress, userSvc, $location, $stateParams, toastr) {
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
        submitSection:false,
        accept:false,
        first_Q:'',
        second_Q:'',
        third_Q:'',
        fourth_Q:'',
        fifth_Q:'',
        submit_Q:'',
        answerArray:[],
        showSmallCircularProgress: false,
        currQes:'',
        currAns:[]
    };
    console.log($stateParams);
    $scope.qesAns = [
        {
            qes:'1.	Which of the following best describes your current stage of life?',
             ans: ['Single with few financial burdens. Ready to accumulate wealth for future short term and long-term goals.','A couple without children. Preparing for the future by establishing a home. Expecting to have or already have a high purchase rate of household and consumer items.','Young family with a home. You have a mortgage and childcare costs and maintain only small cash balances.']
        },
        {
            qes:'2. What would you estimate your Net Worth to be, that is total assets excluding the family home less liabilities?',
            ans: ['Less than $250,000','Between $250,000 and $500,000','Between $500,000 and $750,000','Between $750,000 and $1,000,000','Greater than $1,000,000']
        },
        {
            qes:'3. How long would you invest the majority of your money before you think you would need access to it? (Assuming you already have plans in place to meet short term cashflow and/or emergencies?',
            ans: ['In 2 years or less.','Within 3- 5 years.','Within 6 - 10 years.','Not for 10 + years.']
        },
        {
            qes:' 4. In some instances, tax savings can be obtained from investments but this means taking on more risk. Which of the following statements best describes your goal for investing?',
            ans: ['Preferably guaranteed returns, before tax savings.','Stable, reliable returns, minimal tax savings.','Some variability in returns, some tax savings','Moderate variability in returns, reasonable tax savings','Unstable but potentially higher returns, maximise tax savings.']
        },
        {
            qes: '  5. When considering your investments and making investment decisions, do you think about the impact of possible losses or possible gains?',
            ans: ['I am always concerned about possible losses.', 'I am somewhat concerned about possible losses.', 'I usually consider possible gains.', 'I always consider possible gains.']
        }
    ];

    var idx =  0;
    $scope.model.currQes =  $scope.qesAns[idx].qes;
    $scope.model.currAns =  $scope.qesAns[idx].ans;




    $scope.next = function () {

       /* var temp = {}
        temp[$scope.model.currQes] = $scope.model.first_Q;*/
        var temp = {
            Que: $scope.model.currQes,
            Ans: $scope.model.first_Q
        };

        $scope.model.answerArray.push(temp);

        idx = idx+1;


        if (parseInt(idx) >= 5)
        {
            $scope.model.firstQuestion = false;
            $scope.model.submitSection = true;
        }
        else
        {
            $scope.model.currQes =  $scope.qesAns[idx].qes;
            $scope.model.currAns =  $scope.qesAns[idx].ans;
        }
    };



    /*api call submitQuestions[start] */
    $scope.submitQuestion = function () {
       /* $scope.model.answerArray.push($scope.model.submit_Q);*/
        if ($scope.model.accept == false)
        {
            return false;
        }

        var data = '&&users_uniqueId=' + $stateParams.userUniqueId + '&&users_questions=' + JSON.stringify($scope.model.answerArray);

        var postData = data;
        var requestObj = {
            method: 'POST',
            url: ServerAddress + 'addQuestions.php',
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


   /*api call submitQuestions[end] */





});