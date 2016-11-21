var app = angular.module('ofCourse');

app.controller('OfferingsController', ['$scope', function ($scope) {
    $scope.departments = ['CSC', 'MATH', 'ART'];
        $scope.courses =
        [
        {
            "department": "CSC",
            "number": 3102,
            "name": "Advanced Data Structures and Algorithm Analysis",
            "location": "Tureaud Hall",
            "time": "1:30-2:50 TTH",
            "professor": "Kooima R",
            "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
        },
        {
            "department": "CSC",
            "number": 1200,
            "name": "Ethics in Computing",
            "location": "Tureaud Hall",
            "time": "10:30-11:20 W",
            "professor": "Busch K",
            "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
        },
        {
            "department": "CSC",
            "number": 4330,
            "name": "Software Systems Development",
            "location": "Tureaud Hall",
            "time": "5:00-6:30 MW",
            "professor": "Mahmoud A",
            "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
        }
    ];
}]);