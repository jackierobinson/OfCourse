var app = angular.module('ofCourse');

app.controller('ScheduleController', ['$scope', 'scheduleCourse', function ($scope, scheduleCourse) {
    $scope.schedule = scheduleCourse.getSchedule();

    $scope.$watch('schedule', function (newValue, oldValue) {
        if (newValue !== oldValue)
            $scope.schedule = scheduleCourse.getSchedule();
    });
}]);