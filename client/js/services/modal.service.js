'use strict';

angular.module('asset_manager')
    .service('modaslSvc', function ($timeout, $q, $uibModal) {
        var self = {
            deleteModalManip: function ($event, title) {
                var deferred = $q.defer();

                // $timeOut(function() {
                deleteModalManagement($event, title).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                //   }, 1000);
                return deferred.promise;
            }
        };

        /* Delete modal management in general[Start] */
        var deleteModalManagement = function ($event, title) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'overlays/delete[general].html',
                size: 'lg',
                backdrop: 'true',
                resolve: {
                    item: function () {
                        return title;
                    }
                },

                controller: function ($scope, $uibModalInstance,item) {
                    $scope.model = {};
                    $scope.model.title = item;
                    $scope.model.itemName  = item.toLowerCase();
                    $scope.deleteAPI = function () {
                        $scope.confirm();
                    };
                    $scope.confirm = function () {
                        $uibModalInstance.close();
                    };

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss(null);
                    };
                    // resetModel();
                }
            });
            return modalInstance.result;
        };
        /* Delete modal management in general[End] */
        return self;
    });