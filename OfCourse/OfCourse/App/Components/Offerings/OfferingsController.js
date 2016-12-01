var app = angular.module('ofCourse');

app.controller('OfferingsController', ['$scope', function ($scope) {
    $scope.departments = ['CSC', 'MATH', 'ART'];
        $scope.courses =
            [
            {
                "department": "CSC",
                "number": "3102",
                "name": "Advanced Data Structures and Algorithm Analysis",
                "location": "Tureaud Hall",
                "time": "11:30-12:30",
                "Attendance":"Tuesday",
                "professor": "Kooima",
                "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
            },
            {
                "department": "CSC",
                "number": "1200",
                "name": "Ethics in Computing",
                "location": "Tureaud Hall",
                "time": "10:30-11:30",
                "Attendance":"Wednesday",
                "professor": "Busch",
                "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
            },
            {
                "department": "CSC",
                "number": "4330",
                "name": "Software Systems Development",
                "location": "Tureaud Hall",
                "time": "12:30-1:30",
                "Attendance":"Thursday",
                "professor": "Mahmoud",
                "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
            },
             {
                 "department": "MATH",
                 "number": "1550",
                 "name": "Calculus",
                 "location": "Lockett Hall",
                 "time": "12:30-1:30",
                 "Attendance":"Wednesday",
                 "professor": "Terri",
                 "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
             },
              {
                  "department": "ENGL",
                  "number": "2000",
                  "name": "English Composition",
                  "location": "Tureaud Hall",
                  "time": "09:30-10:30",
                  "Attendance":"Friday",
                  "professor": "McKinnon",
                  "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
              }
            ];
}]);

