angular.module('asset_manager').service('alertSvc', function () {
    var alertService = {};

    // create an array of alerts
    alertService.alerts = [];

    alertService.showAlert = function (type, msg) {
        alertService.alerts.splice(alertService.alerts.length-1, 1);
        alertService.alerts.push({ 'type': type, 'msg': msg });
    };

    alertService.closeAlert = function (index) {
        alertService.alerts.splice(index, 1);
    };

    alertService.clearAllAlertLast = function () {
        alertService.alerts.splice(alertService.alerts.length-1, 1);
    };

    return alertService;
});