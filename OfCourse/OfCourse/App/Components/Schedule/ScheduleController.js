var app = angular.module('ofCourse');

app.controller('ScheduleController', ['$scope', function ($scope) {
    $scope.schedule =
    [
        {
            "name": "CSC 3102: Advanced Data Structures and Algorithm Analysis",
            "location": "Tureaud Hall",
            "time": "1:30-2:50 TTH",
            "professor": "Kooima R"
        },
        {
            "name": "CSC 1200: Ethics in Computing",
            "location": "Tureaud Hall",
            "time": "10:30-11:20 W",
            "professor": "Busch K"
        },
        {
            "name": "CSC 4330 Software Systems Development",
            "location": "Tureaud Hall",
            "time": "5:00-6:30 MW",
            "professor": "Mahmoud A"
        }
    ];
}]);