var app = angular.module('ofCourse');

app.directive('mySchedule', function () {
    return {
        restrict: 'E',
        scope: {
            schedule: "="
        },
        templateUrl: '/App/Components/Schedule/Schedule.html'
    };
});