angular.module('asset_manager')
    .directive('displayAlert', ['alertSvc', function (alertSvc) {
        return {
            restrict: 'AE',
         
             template: '<div class="alert_msg col-md-6 col-sm-8 col-xs-8"> <div uib-alert ng-repeat="alert in vm.alerts" class="alert alert-{{alert.type}}" close="vm.closeAlert($index)">{{alert.msg}}</div> </div>',
            // template: '<div ng-repeat="alert in vm.alerts" class="alert alert-{{alert.type}}" role="alert"><button ng-click="vm.closeAlert($index)" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>{{alert.msg}}</div>',
            controller: function(){
                var vm = this;
                vm.alertSvc = alertSvc;

                vm.alerts = vm.alertSvc.alerts;

                vm.closeAlert = function (index) {
                    vm.alertSvc.closeAlert(index);
                }
            },
            controllerAs: 'vm'
            }
    }]);

     