angular.module('asset_manager').config(function (uibDatepickerConfig, $httpProvider, toastrConfig) {
    uibDatepickerConfig.showWeeks = false;
    uibDatepickerConfig.showButtonBar = false;

    angular.extend(toastrConfig, {
        maxOpened: 1,
        closeButton: true,
        preventOpenDuplicates: false,
        tapToDismiss: true,
        timeOut: 3000,
        autoDismiss: true,
        extendedTimeOut: 1000
    });

    $httpProvider.interceptors.push('AuthInterceptor');
});