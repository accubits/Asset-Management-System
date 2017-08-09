angular.module('asset_manager').directive('ignoreMouseWheel', function ($rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('mousewheel', function (event) {
                element.blur();
            });
        }
    }
});

angular.module('asset_manager').directive('disableScroll', function () {
    return {
        restrict: 'A',
        link: function (scope, $element) {
            $element.on('focus', function () {
                angular.element(this).on('keydown', function (e) {
                    var specialKeys = [];
                    specialKeys.push(8); //Backspace
                    specialKeys.push(9); //Tab
                    specialKeys.push(46); //Delete
                    specialKeys.push(36); //Home
                    specialKeys.push(35); //End
                    specialKeys.push(37); //Left
                    specialKeys.push(39); //Right   
                    specialKeys.push(110); //Dot  
                    specialKeys.push(190); //Dot  
                    if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 69 || (!(e.keyCode >= 48 && e.keyCode <= 57) && !(e.keyCode >= 96 && e.keyCode <= 105) && (specialKeys.indexOf(e.keyCode) === -1))) {
                        e.preventDefault();
                    }
                });
            });
            $element.on('blur', function () {
                angular.element(this).off('keydown');
            });
        }
    };
});