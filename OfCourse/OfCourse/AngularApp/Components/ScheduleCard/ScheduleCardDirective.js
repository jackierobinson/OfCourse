var app = angular.module('ofCourse', []);

app.directive('scheduleCard', function () {
    return {
        restrict: 'E',
        replace: 'true',
        template: '<h3>Hello World!!</h3>'
    };
});