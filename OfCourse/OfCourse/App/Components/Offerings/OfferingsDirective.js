var app = angular.module('ofCourse');

app.directive('myOfferings', function () {
    return {
        restrict: 'E',
        scope: {
            departments: "=",
            courses: "="
        },
        templateUrl: '/App/Components/Offerings/Offerings.html'
    };
});