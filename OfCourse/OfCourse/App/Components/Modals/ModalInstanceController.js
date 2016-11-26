var app = angular.module('ofCourse');

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, course) {
    var $ctrl = this;
    $scope.course = course;
});