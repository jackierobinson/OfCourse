var app = angular.module('ofCourse');

app.controller('CourseModalController', function ($scope, $uibModal, $log) {

    var $ctrl = this;

 

    $ctrl.animationsEnabled = true;

    $ctrl.viewCourse = function (size, selectedCourse) {
      
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            templateUrl: '/App/Components/Modals/CourseModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            resolve: {
                course: function () {
                    return selectedCourse;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $ctrl.toggleAnimation = function () {
        $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
    };
});
