var app = angular.module('ofCourse');

app.directive('myOfferings', function () {
    return {
        restrict: 'E',
        scope: {
            departments: "=",
            ctrl: "="
        },
        templateUrl: '/App/Components/Offerings/Offerings.html'
    };
});