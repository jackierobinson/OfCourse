var app = angular.module('ofCourse');

app.directive('myCalendar', function() {
    return {
        restrict: 'E',
        scope: {
            schedule: "="
        },
        templateUrl: '/App/Components/Calendar/Calendar.html'
    };
})