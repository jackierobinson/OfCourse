var app = angular.module('ofCourse');

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, course, scheduleCourse) {
    $scope.course = course;

    $scope.addToSchedule = function (newCourse) {
        scheduleCourse.addToSchedule(newCourse);
    };
});