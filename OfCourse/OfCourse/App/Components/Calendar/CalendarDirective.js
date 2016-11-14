var app = angular.module('ofCourse');

app.directive('myCalendar', function() {
    return {
        restrict: 'E',
        scope: {
            times: "="
        },
        templateUrl: '/App/Components/Calendar/Calendar.html'
    };
})